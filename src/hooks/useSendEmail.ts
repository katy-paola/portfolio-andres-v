// src/hooks/useSendEmail.ts

import { useState } from "react";

export const useSendEmail = () => {
  const [statusText, setStatusText] = useState("");

  const handleSubmit = async (formData: { email: string; message: string }) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setStatusText(responseData.error || "Error al enviar el mensaje");
        throw new Error(responseData.error || "Error al enviar el mensaje");
      }

      if (responseData.success) {
        setStatusText("Mensaje enviado exitosamente");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";

      setStatusText(errorMessage);
    }
  };

  return { handleSubmit, statusText };
};
