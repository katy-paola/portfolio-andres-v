import { LINKS } from "@/utils/const/header";
import { Button } from "../retroui/Button";
import BurgerMenuIcon from "../icons/BurgerMenuIcon";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed w-full z-10 top-0">
      <nav className="bg-accent h-[68px] flex items-center md:justify-center">
        <ul
          className={cn(
            "transition-all duration-300 w-full",
            isMenuOpen ? "left-0" : "-left-full",
            `flex flex-col justify-center gap-4 p-4 absolute top-full bg-accent md:gap-8 md:static md:h-auto md:visible md:opacity-100 md:flex-row`
          )}
        >
          {LINKS.map((link, index) => (
            <li key={`${link.label}-${index}`}>
              <Button asChild variant="link" className="w-max">
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </Button>
            </li>
          ))}
        </ul>
        <Button
          size={"icon"}
          variant={"outline"}
          className="ml-4 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BurgerMenuIcon />
        </Button>
      </nav>
    </header>
  );
}
