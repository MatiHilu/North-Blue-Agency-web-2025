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
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Gracias por contactarnos</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:Arial, Helvetica, sans-serif;color:#111827;">
  <div style="max-width:600px;margin:0 auto;padding:20px;line-height:1.5;">
    <img src="${
      process.env.NEXT_PUBLIC_SITE_URL || "https://northblueagency.com"
    }/NorthBlue-Agency.png" alt="North Blue Agency" width="150" style="display:block;margin:0 auto 20px;"/>
    <h2 style="margin:0 0 20px;font-size:24px;font-weight:600;color:#111827;">North Blue Agency</h2>
    <p style="margin:0 0 16px;font-size:16px;">Hola ${name || ""},</p>
    <p style="margin:0 0 16px;font-size:14px;">Gracias por contactarte con nosotros. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
    <p style="margin:0 0 24px;font-size:14px;">Saludos,<br/>North Blue Agency</p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
    <p style="margin:0;font-size:12px;color:#6b7280;">© ${new Date().getFullYear()} North Blue Agency. Todos los derechos reservados.</p>
  </div>
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
