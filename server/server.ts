import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = 3000;

const resend = new Resend(process.env.RESEND_API_KEY!);

app.use(cors());
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email and message are required",
    });
  }

  try {
    await resend.emails.send({
      from: "Formulario Contacto <onboarding@resend.dev>",
      to: process.env.TO_EMAIL!,
      subject: "New message from portfolio Andrés Vizcaíno",
      html: `
        <h3>New message by ${name}</h3>
        <p><strong>From:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Failed to send email",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
