import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import HangingPhoto from "../hero/HangingPhoto";
import HeroText from "../hero/HeroText";

export default function Hero({ className }: { className?: string }) {
  const photoRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!photoRef.current || !textRef.current) return;

    const hangingPhotoElement = photoRef.current;
    const heroTextElement = textRef.current;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          hangingPhotoElement,
          { rotation: 14, transformOrigin: "top center" },
          { rotation: -8, duration: 1.2, ease: "power1.inOut" },
          0
        )
        .to(hangingPhotoElement, {
          rotation: 6,
          duration: 0.8,
          ease: "power1.inOut",
        })
        .to(hangingPhotoElement, {
          rotation: 0,
          duration: 0.6,
          ease: "power2.out",
        });

      timeline.from(
        heroTextElement.querySelectorAll(".hero-line"),
        {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        },
        0
      );

      /* TEXTO — hold hasta el final */
      timeline.to(
        {},
        {
          duration: timeline.duration(),
        },
        0
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={cn(
        "flex flex-col lg:flex-row gap-4 p-4 md:p-8 justify-center items-center",
        className
      )}
    >
      <HangingPhoto ref={photoRef} />

      <HeroText ref={textRef} />
    </section>
  );
}
