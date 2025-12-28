import { MapPinIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/retroui/Popover";
import { Badge } from "../retroui/Badge";
import { IGLOOLAB_ROLES } from "@/utils/const/experience";
import { cn } from "@/lib/utils";

export default function Experience({ className }: { className?: string }) {
  return (
    <section
      id="experiencia"
      className={cn("p-4 md:p-8 scroll-mt-[84px]", className)}
    >
      <h2 className="font-semibold text-2xl mb-4">Experiencia</h2>
      <ul className="flex gap-8 flex-col md:flex-row">
        <li className="flex-1">
          <article className="flex flex-col gap-4 h-full">
            <header className="flex justify-between items-center">
              <h3 className="font-medium text-lg">igloolab</h3>
              <p className="flex items-center gap-1">
                <MapPinIcon size={18} /> Cali, Colombia
              </p>
            </header>
            <ul className="flex flex-col gap-4 flex-1">
              {IGLOOLAB_ROLES.map((role, index) => (
                <li key={index} className="contents">
                  <Popover>
                    <PopoverTrigger asChild>
                      <header className="flex flex-1 flex-col gap-1 justify-between shadow-md hover:shadow active:shadow-none bg-white border-2 transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 px-4 py-1.5 text-base cursor-pointer md:flex-row">
                        <h4 className="font-medium">{role.roleName}</h4>
                        <small className="self-end">{role.period}</small>
                      </header>
                    </PopoverTrigger>
                    <PopoverContent className="min-w-96">
                      <section className="flex flex-col gap-4">
                        <header className="flex items-center justify-between">
                          <h4 className="font-medium">{role.roleName}</h4>
                          <small>{role.period}</small>
                        </header>
                        <ul className="list-disc list-inside">
                          {role.tasks.map((task, taskIndex) => (
                            <li key={taskIndex}>{task}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1">
                          {role.stack.map((tool, toolIndex) => (
                            <Badge key={toolIndex} variant={"surface"}>
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </section>
                    </PopoverContent>
                  </Popover>
                </li>
              ))}
            </ul>
          </article>
        </li>
        <li className="flex-1">
          <article className="flex flex-col gap-4 h-full">
            <header className="flex justify-between items-center">
              <h3 className="font-medium text-lg">Sima</h3>
              <p className="flex items-center gap-1">
                <MapPinIcon size={18} /> Cartagena, Colombia
              </p>
            </header>
            <section className="flex-1 flex flex-col justify-between gap-4 p-4 border-2 bg-white">
              <section>
                <header className="flex gap-1 flex-col justify-between mb-4 md:flex-row">
                  <h4 className="font-medium">Web Master</h4>
                  <small className="self-end md:self-auto">May. 2020 - Abr. 2021</small>
                </header>
                <ul className="list-disc list-inside">
                  <li>Creación de sitios web en Wordpress para pymes.</li>
                  <li>Manejo de hosting en CPanel y Linux.</li>
                </ul>
              </section>
              <div className="flex flex-wrap gap-1">
                <Badge variant={"surface"}>WordPress</Badge>
                <Badge variant={"surface"}>HTML</Badge>
                <Badge variant={"surface"}>Hosting Web</Badge>
              </div>
            </section>
          </article>
        </li>
      </ul>
    </section>
  );
}
