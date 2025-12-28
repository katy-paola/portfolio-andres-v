import { Button } from "../retroui/Button";
import { Avatar } from "../retroui/Avatar";
import { DownloadIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "flex flex-col lg:flex-row gap-4 p-4 md:p-8 justify-center items-center",
        className
      )}
    >
      <div className="frame-wrapper">
        <div className="swing-group">
          <div className="string"></div>
          <div className="photo">
            <Avatar className="size-20 rounded-none">
              <Avatar.Image
                src="/photo-andres-vizcaino.webp"
                alt="Foto de Andrés Vizcaíno"
              />
              <Avatar.Fallback className="rounded-none bg-muted/30">
                AV
              </Avatar.Fallback>
            </Avatar>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-4">
        <section>
          <h1 className="text-xl md:text-3xl text-center lg:text-left font-semibold font-head">
            Hola, soy Andrés Vizcaíno.
          </h1>
          <p className="text-lg text-center lg:text-left text-accent-foreground">
            Desarrollador Web Full Stack
          </p>
        </section>
        <div className="flex gap-4 justify-center lg:justify-start">
          <Button asChild className="font-sans" size={"md"}>
            <a
              href="#"
              className="flex items-center gap-2 justify-center md:flex-initial"
            >
              <DownloadIcon size={16} />
              Curriculum
            </a>
          </Button>
          <Button
            asChild
            className="font-sans px-2 w-11 flex justify-center md:w-auto md:px-4"
            size={"md"}
            variant={"outline"}
          >
            <a
              href="https://github.com/pipegoods"
              className="flex items-center gap-2"
              target="_blank"
            >
              <GithubIcon size={16} />
              <span className="hidden md:inline-block">GitHub</span>
            </a>
          </Button>
          <Button
            asChild
            className="font-sans px-2 w-11 flex justify-center md:w-auto md:px-4"
            size={"md"}
            variant={"outline"}
          >
            <a
              href="https://www.linkedin.com/in/andres-vizcaino-salazar/"
              className="flex items-center gap-2"
              target="_blank"
            >
              <LinkedinIcon size={16} />
              <span className="hidden md:inline-block">LinkedIn</span>
            </a>
          </Button>
        </div>
      </section>
    </section>
  );
}
