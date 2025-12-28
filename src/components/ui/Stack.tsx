import ReactCard from "../stack/ReactCard";
import NextjsCard from "../stack/NextjsCard";
import NodejsCard from "../stack/NodejsCard";
import TailwindCard from "../stack/TailwindCard";
import { cn } from "@/lib/utils";

export default function Stack({ className }: { className?: string }) {
  return (
    <section className={cn("flex flex-col gap-4  p-4 md:p-8", className)}>
      <h2>Tecnologías</h2>
      <div className="grid md:grid-cols-4 xl:grid-cols-2 gap-4 h-full">
        <ReactCard
          className="relative p-4 pt-6 content-center text-center text-base bg-transparent border-2 mt-4 group"
          iconClassName="absolute bg-background rounded-full size-8 p-1 top-0 -translate-y-1/2 right-1/2 translate-x-1/2 group-hover:rotate-360 transition-transform duration-2000"
        />
        <NextjsCard
          className="relative p-4 pt-6 content-center text-center text-base bg-transparent border-2 mt-4 group"
          iconClassName="absolute bg-background rounded-full size-8 p-1 top-0 -translate-y-1/2 right-1/2 translate-x-1/2 group-hover:rotate-360 transition-transform duration-2000"
        />
        <NodejsCard
          className="relative p-4 pt-6 content-center text-center text-base bg-transparent border-2 mt-4 group"
          iconClassName="absolute bg-background rounded-full size-8 p-1 top-0 -translate-y-1/2 right-1/2 translate-x-1/2 group-hover:rotate-360 transition-transform duration-2000"
        />
        <TailwindCard
          className="relative p-4 pt-6 content-center text-center text-base bg-transparent border-2 mt-4 group"
          iconClassName="absolute bg-background rounded-full size-8 p-1 top-0 -translate-y-1/2 right-1/2 translate-x-1/2 group-hover:rotate-360 transition-transform duration-2000"
        />
      </div>
    </section>
  );
}
