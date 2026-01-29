import { forwardRef } from "react";
import { DownloadIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "../retroui/Button";

const HeroText = forwardRef<HTMLElement>(function HeroText(_, ref) {
  return (
    <section ref={ref} className="flex flex-col gap-4">
      <section className="hero-line">
        <h1 className="text-xl md:text-3xl text-center lg:text-left font-semibold font-head">
          Hola, soy Andrés Vizcaíno.
        </h1>
        <p className="text-lg text-center lg:text-left text-accent-foreground">
          Desarrollador Web Full Stack
        </p>
      </section>

      <div className="hero-line flex gap-4 justify-center lg:justify-start">
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
  );
});

export default HeroText;
