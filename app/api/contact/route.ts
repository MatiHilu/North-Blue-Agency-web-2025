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

    // Send mail
    await transporter.sendMail({
      from: sender,
      replyTo: name && email ? `"${name}" <${email}>` : undefined,
      to: process.env.CONTACT_TO_EMAIL || "info@northblueagency.com",
      subject: data.subject || `Nuevo mensaje de ${name || "contacto"}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { ok: false, error: error.message || "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
