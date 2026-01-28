import { cn } from "@/lib/utils";
import { Input } from "../retroui/Input";
import { Textarea } from "../retroui/Textarea";
import { Button } from "../retroui/Button";
import { useSendEmail } from "@/hooks/useSendEmail";
import type { FormEvent } from "react";

export default function Contact({ className }: { className?: string }) {
  const { handleSubmit, statusText } = useSendEmail();

  const handleSubmitContactForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    await handleSubmit({ email, message });

    form.reset();
  };

  return (
    <section id="contacto" className={cn("scroll-mt-21", className)}>
      <h2 className="font-semibold text-2xl">Contacto</h2>

      <form onSubmit={handleSubmitContactForm} className="flex flex-col gap-6">
        <fieldset className="grid gap-4">
          <label htmlFor="name">
            Nombre
            <Input name="name" id="name" placeholder="" />
          </label>

          <label htmlFor="email">
            Correo electrónico
            <Input name="email" id="email" required placeholder="" />
          </label>

          <label htmlFor="message">
            Mensaje
            <Textarea
              name="message"
              id="message"
              className="resize-none"
              required
              placeholder=""
            />
          </label>
        </fieldset>

        <Button type="submit" className="flex justify-center">
          Enviar
        </Button>
      </form>

      <p>{statusText}</p>
    </section>
  );
}
