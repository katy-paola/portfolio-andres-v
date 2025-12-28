import { ChevronUpIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "../retroui/Button";

export default function Footer() {
  return (
    <footer className="flex justify-between p-4">
      <div className="flex gap-4">
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
      <Button variant={"outline"} size={"icon"} asChild>
        <a href="#main" title="Volver arriba">
          <ChevronUpIcon />
        </a>
      </Button>
    </footer>
  );
}
