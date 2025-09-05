import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure transporter with SMTP settings (Hostinger)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});
// Verify SMTP connection
transporter
  .verify()
  .then(() => {
    console.log("SMTP transporter is ready");
  })
  .catch((err) => {
    console.error("Error verifying SMTP transporter:", err);
  });

export async function POST(request: Request) {
  const data = await request.json();
  console.log("Contact data received:", data);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const sender = process.env.SENDER_EMAIL;
  if (!user || !pass) {
    console.error("Missing SMTP credentials:", { user, pass });
    return NextResponse.json(
      { ok: false, error: "Missing SMTP credentials" },
      { status: 500 }
    );
  }
  if (!sender) {
    console.error("Missing verified sender email: SENDER_EMAIL");
    return NextResponse.json(
      { ok: false, error: "Missing verified sender email" },
      { status: 500 }
    );
  }
  try {
    const { name, email } = data;
    // Build email content from all fields
    const htmlContent = Object.entries(data)
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join("");
    const textContent = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    // Send mail to site owner
    await transporter.sendMail({
      from: `"North Blue Agency" <${sender}>`,
      replyTo: name && email ? `"${name}" <${email}>` : undefined,
      to: process.env.CONTACT_TO_EMAIL || "info@northblueagency.com",
      subject: data.subject || `Nuevo mensaje de ${name || "contacto"}`,
      text: textContent,
      html: htmlContent,
    });

    // Send thank-you email to the user
    if (email) {
      await transporter.sendMail({
        from: `"North Blue Agency" <${sender}>`,
        to: email,
        subject: "Gracias por contactarnos",
        text: `Hola ${
          name || ""
        },\n\nGracias por contactarte con nosotros. Hemos recibido tu mensaje y nos pondremos en contacto pronto.\n\nSaludos,\nNorth Blue Agency`,
        html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Gracias por contactarnos</title>
</head>
<body style="margin:0; padding:0; font-family:Arial, sans-serif; background-color:#f5f5f5;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:20px auto; background-color:#ffffff; border-radius:8px; overflow:hidden;">
    <tr>
      <td style="background-color:#0070f3; padding:20px; text-align:center;">
        <h1 style="color:#ffffff; margin:0;">North Blue Agency</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:20px; color:#333333;">
        <p style="font-size:16px;">Hola ${name || ""},</p>
        <p style="font-size:14px;">Gracias por contactarte con nosotros. Hemos recibido tu mensaje y nos pondremos en contacto pronto.</p>
        <p style="font-size:14px;">Saludos,<br/>North Blue Agency</p>
      </td>
    </tr>
    <tr>
      <td style="background-color:#f0f0f0; padding:10px; text-align:center; font-size:12px; color:#777777;">
        © ${new Date().getFullYear()} North Blue Agency. Todos los derechos reservados.
      </td>
    </tr>
  </table>
</body>
</html>`,
      });
    }
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { ok: false, error: error.message || "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
