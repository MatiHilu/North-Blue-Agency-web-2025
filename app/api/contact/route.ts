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
        },\n\n¡Gracias por contactarte con nosotros! Hemos recibido tu mensaje y nuestro equipo lo revisará para responderte lo antes posible.\n\nSaludos,\nNorth Blue Agency`,
        html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Gracias por contactarnos</title>
</head>
<body
    style="margin:0;padding:60px;background:#1f2937;font-family:Arial, Helvetica, sans-serif; background-repeat: no-repeat;">
    <div style="max-width:600px;margin:20px auto;border-radius:16px;overflow:hidden;">
        <div style="background:#000;padding:20px;text-align:center;">
            <img src="https://northblueagency.com/North-Blue-Agency-Light.svg" alt="North Blue Agency" height="60"
                style="display:block;margin:0 auto;" />
        </div>
        <div style="padding:20px;background-color:#ffffff;line-height:1.5;min-height: 230px; padding-top: 40px;">
            <h2 style="margin:0 0 10px;font-size:22px;color:#111827;">Hola Matías,</h2>
            <p style="font-size:15px;color:#333333;margin:0 0 15px;">¡Gracias por contactarte con nosotros! Hemos
                recibido tu mensaje y nuestro equipo lo revisará para responderte lo antes posible.</p>
            <p style="font-size:15px;color:#333333;margin:0 0 25px;">Mientras tanto, te invitamos a conocer nuestro
                <strong>Blog</strong>.
            </p>
            <a href="https://northblueagency.com/blog" target="_blank"
                style="display:inline-block;padding:10px 20px;background:#00b2ff;color:#ffffff;text-decoration:none;border-radius:4px;">Ver
                posteos</a>
        </div>
        <div style="background-color:#ff4081;padding:10px;text-align:center;">
            <p style="font-size:12px;color:#fff;margin:0;">© 2025 North Blue Agency. Todos los derechos reservados.
            </p>
        </div>
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
