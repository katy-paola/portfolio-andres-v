"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import ReactCard from "../stack/ReactCard";
import NextjsCard from "../stack/NextjsCard";
import NodejsCard from "../stack/NodejsCard";
import TailwindCard from "../stack/TailwindCard";
import { cn } from "@/lib/utils";

gsap.registerPlugin(Flip);

const offsetClasses = [
  "card-offset-1",
  "card-offset-2",
  "card-offset-3",
  "card-offset-4",
];

export default function Stack({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. FIRST: Captura el estado inicial (apilado con offsets)
    const state = Flip.getState(container.children);
    const startHeight = container.offsetHeight;

    // 2. LAST: Cambia al estado de cuadrícula (prepara el layout final en el DOM)
    container.classList.remove("cards-stacked");
    Array.from(container.children).forEach((child, index) => {
      child.classList.remove(offsetClasses[index]);
    });
    const endHeight = container.offsetHeight;
    gsap.set(container, { height: startHeight });

    // 3. INVERT y PLAY: Anima del estado apilado al de cuadrícula
    Flip.from(state, {
      duration: 1,
      ease: "power1.inOut",
      // *** ESTO ES LO ÚNICO QUE DEBES CAMBIAR ***
      stagger: {
        amount: 0.6, // La duración total que tomará el desapilado
        from: "end", // Inicia desde el último elemento (la tarjeta rosa, que está arriba visualmente)
      },
      // ****************************************
      absolute: true,
      height: endHeight,
      onComplete: () => {
        gsap.set(container.children, { clearProps: "all" });
        gsap.set(container, { clearProps: "height" });
      },
    });
  }, []);

  const cardsData = [
    { id: 1, component: ReactCard, index: 0 },
    { id: 2, component: NextjsCard, index: 1 },
    { id: 3, component: NodejsCard, index: 2 },
    { id: 4, component: TailwindCard, index: 3 },
  ];

  return (
    <section className={cn("flex flex-col gap-4 p-4 md:p-8", className)}>
      <h2>Tecnologías</h2>

      <div
        ref={containerRef}
        className={cn(
          "grid md:grid-cols-4 xl:grid-cols-2 gap-4 h-full cards-stacked"
        )}
      >
        {cardsData.map((card) => {
          const CardComponent = card.component;
          const cardClasses = cn(
            "relative p-4 pt-6 content-center text-center text-base bg-primary/50 backdrop-blur-md border-2 mt-4 group",
            offsetClasses[card.index]
          );

          return (
            <CardComponent
              key={card.id}
              className={cardClasses}
              iconClassName="absolute bg-background rounded-full size-8 p-1 top-0 -translate-y-1/2 right-1/2 translate-x-1/2 group-hover:rotate-360 transition-transform duration-2000"
            />
          );
        })}
      </div>
    </section>
  );
}
