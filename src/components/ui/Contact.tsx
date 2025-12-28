import { cn } from "@/lib/utils";
import { Input } from "../retroui/Input";
import { Textarea } from "../retroui/Textarea";
import { Button } from "../retroui/Button";

export default function Contact({ className }: { className?: string }) {
  return (
    <section id="contacto" className={cn("scroll-mt-[84px]", className)}>
      <h2 className="font-semibold text-2xl">Contacto</h2>
      <form action="" className="flex flex-col gap-6">
        <fieldset className="grid gap-4">
          <label htmlFor="name">
            Nombre
            <Input name="name" id="name" placeholder="" />
          </label>
          <label htmlFor="email">
            Correo electrónico
            <Input name="email" id="email" placeholder="" />
          </label>
          <label htmlFor="message">
            Mensaje
            <Textarea className="resize-none" placeholder="" />
          </label>
        </fieldset>
        <Button className="flex justify-center">Enviar</Button>
      </form>
    </section>
  );
}
