import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Rate limiting store (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Spam detection keywords
const SPAM_KEYWORDS = [
  "cheap",
  "free",
  "offer",
  "promotion",
  "casino",
  "crypto",
  "bitcoin",
  "viagra",
  "sex",
  "loan",
  "credit",
  "debt",
  "refinance",
  "mortgage",
  "insurance",
  "investment",
  "profit",
  "make money",
  "work from home",
  "click here",
  "urgent",
  "limited time",
  "act now",
  "congratulations",
  "winner",
  "prize",
  "lottery",
  "guaranteed",
  "no risk",
  "spam",
];

// Patterns that indicate gibberish/random text
const GIBBERISH_PATTERNS = {
  // Excessive consonants in a row (more than 4)
  excessiveConsonants: /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{5,}/,
  // Mixed case randomly (more than normal)
  randomMixedCase: /^[a-z]*[A-Z][a-z]*[A-Z][a-z]*[A-Z]/,
  // Alternating caps in weird patterns
  alternatingCaps: /^[a-zA-Z]*[a-z][A-Z][a-z][A-Z][a-z][A-Z]/,
  // No vowels or too few vowels for length
  fewVowels: (text: string) => {
    const vowels = text.match(/[aeiouAEIOU]/g);
    const vowelCount = vowels ? vowels.length : 0;
    return text.length > 8 && vowelCount / text.length < 0.15;
  },
  // Repeated character patterns
  repeatedChars: /(.)\1{3,}/,
};

// Common real name patterns (to avoid false positives)
const REAL_NAME_PATTERNS = [
  /^[A-Z][a-z]+ [A-Z][a-z]+$/, // John Smith
  /^[A-Z][a-z]+$/, // John
  /^[A-Z][a-z]+ [A-Z]\.$/, // John D.
  /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/, // John Michael Smith
];

// Common company name patterns
const COMPANY_PATTERNS = [
  /\b(LLC|Inc|Corp|Ltd|Co|Company|Agency|Group|Solutions|Services)\b/i,
  /^[A-Z][a-z]+ [A-Z][a-z]+( [A-Z][a-z]+)?$/, // Real Company Name
];

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

// Helper functions for spam detection and rate limiting
function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const real = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (real) {
    return real.trim();
  }

  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return false;
  }

  if (now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
    return false;
  }

  if (record.count >= 5) {
    // Max 5 submissions per minute
    return true;
  }

  record.count++;
  return false;
}

function containsSpam(text: string): boolean {
  if (!text) return false;

  const lowerText = text.toLowerCase();
  return SPAM_KEYWORDS.some((keyword) => lowerText.includes(keyword));
}

function isGibberish(
  text: string,
  fieldType: "name" | "company" | "message" = "message"
): boolean {
  if (!text || text.length < 3) return false;

  const trimmedText = text.trim();

  // Check for patterns that indicate random text
  if (GIBBERISH_PATTERNS.excessiveConsonants.test(trimmedText)) {
    return true;
  }

  if (GIBBERISH_PATTERNS.repeatedChars.test(trimmedText)) {
    return true;
  }

  if (GIBBERISH_PATTERNS.fewVowels(trimmedText)) {
    return true;
  }

  // For names and companies, be more strict
  if (fieldType === "name") {
    // Check if it looks like a real name
    const looksLikeRealName = REAL_NAME_PATTERNS.some((pattern) =>
      pattern.test(trimmedText)
    );
    if (!looksLikeRealName && trimmedText.length > 15) {
      return true;
    }

    // Check for random mixed case (like SnoRtITtNYdEbnILVdAlmbgc)
    if (
      GIBBERISH_PATTERNS.randomMixedCase.test(trimmedText) ||
      GIBBERISH_PATTERNS.alternatingCaps.test(trimmedText)
    ) {
      return true;
    }
  }

  if (fieldType === "company") {
    const looksLikeRealCompany = COMPANY_PATTERNS.some((pattern) =>
      pattern.test(trimmedText)
    );
    if (!looksLikeRealCompany && trimmedText.length > 12) {
      return true;
    }
  }

  // Additional gibberish detection for all fields
  // Check for sequences without vowels that are too long
  const consonantSequences = trimmedText.match(
    /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{4,}/g
  );
  if (consonantSequences && consonantSequences.length > 1) {
    return true;
  }

  return false;
}

function validateFormData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check honeypot field
  if (data.website || data.phone_number || data.url_field) {
    errors.push("Bot detected");
    return { isValid: false, errors }; // Early return for bot detection
  }

  // Check required fields - more robust validation
  if (
    !data.name ||
    typeof data.name !== "string" ||
    data.name.trim().length < 2
  ) {
    errors.push("Name is required and must be at least 2 characters");
  }

  if (
    !data.email ||
    typeof data.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
  ) {
    errors.push("Valid email is required");
  }

  if (
    !data.message ||
    typeof data.message !== "string" ||
    data.message.trim().length < 10
  ) {
    errors.push("Message is required and must be at least 10 characters");
  }

  // Additional empty field checks
  if (data.name === "" || data.email === "" || data.message === "") {
    errors.push("All required fields must be filled");
  }

  // Check for spam content (only if fields are not empty)
  const fieldsToCheck = [
    data.name,
    data.email,
    data.message,
    data.company,
  ].filter(
    (field) => field && typeof field === "string" && field.trim().length > 0
  );

  if (fieldsToCheck.some((field) => containsSpam(field))) {
    errors.push("Spam content detected");
  }

  // Check for gibberish/random text
  if (data.name && isGibberish(data.name, "name")) {
    errors.push("Name appears to be random text");
  }

  if (data.company && isGibberish(data.company, "company")) {
    errors.push("Company name appears to be random text");
  }

  if (data.message && isGibberish(data.message, "message")) {
    errors.push("Message appears to be random text");
  }

  // Check for suspicious patterns
  if (
    data.message &&
    typeof data.message === "string" &&
    data.message.includes("http://")
  ) {
    errors.push("Suspicious content detected");
  }

  // Check for only whitespace in required fields
  if (data.name && data.name.trim() === "") {
    errors.push("Name cannot be only whitespace");
  }

  if (data.message && data.message.trim() === "") {
    errors.push("Message cannot be only whitespace");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

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
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check rate limiting
    if (isRateLimited(clientIP)) {
      console.log("Rate limited:", clientIP);
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await request.json();
    console.log("Contact data received:", {
      ...data,
      email: data.email ? "[HIDDEN]" : "missing",
    });

    // Validate form data
    const validation = validateFormData(data);
    if (!validation.isValid) {
      console.log("Validation failed:", validation.errors);
      return NextResponse.json(
        { ok: false, error: "Invalid form data", details: validation.errors },
        { status: 400 }
      );
    }

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
    const { name, email } = data;

    // Filter out honeypot fields and prepare clean data for email
    const cleanData = { ...data };
    delete cleanData.website;
    delete cleanData.phone_number;
    delete cleanData.url_field;

    // Build email content from filtered fields
    const htmlContent = Object.entries(cleanData)
      .filter(([key, value]) => value && key !== "honeypot")
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join("");
    const textContent = Object.entries(cleanData)
      .filter(([key, value]) => value && key !== "honeypot")
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    // Send mail to site owner
    await transporter.sendMail({
      from: `"North Blue Agency" <${sender}>`,
      replyTo: name && email ? `"${name}" <${email}>` : undefined,
      to: process.env.CONTACT_TO_EMAIL || "info@northblueagency.com",
      subject: data.subject || `New message from ${name || "contact"}`,
      text: textContent,
      html: htmlContent,
    });

    // Send thank-you email to the user
    if (email) {
      await transporter.sendMail({
        from: `"North Blue Agency" <${sender}>`,
        to: email,
        subject: "Thank you for contacting us",
        text: `Hi ${
          name || ""
        },\n\nThank you for contacting us! We have received your message and our team will review it to respond as soon as possible.\n\nBest regards,\nNorth Blue Agency`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Thank you for contacting us</title>
</head>
<body
    style="margin:0;padding:60px;background:#1f2937;font-family:Arial, Helvetica, sans-serif; background-repeat: no-repeat;">
    <div style="max-width:600px;margin:20px auto;border-radius:16px;overflow:hidden;">
        <div style="background:#000;padding:20px;text-align:center;">
            <img src="https://northblueagency.com/North-Blue-Agency-Light.svg" alt="North Blue Agency" height="60"
                style="display:block;margin:0 auto;" />
        </div>
        <div style="padding:20px;background-color:#ffffff;line-height:1.5;min-height: 230px; padding-top: 40px;">
            <h2 style="margin:0 0 10px;font-size:22px;color:#111827;">Hi ${
              name || "there"
            },</h2>
            <p style="font-size:15px;color:#333333;margin:0 0 15px;">Thank you for contacting us! We have
                received your message and our team will review it to respond as soon as possible.</p>
            <p style="font-size:15px;color:#333333;margin:0 0 25px;">In the meantime, we invite you to check out our
                <strong>Blog</strong>.
            </p>
            <a href="https://northblueagency.com/blog" target="_blank"
                style="display:inline-block;padding:10px 20px;background:#00b2ff;color:#ffffff;text-decoration:none;border-radius:4px;">View
                posts</a>
        </div>
        <div style="background-color:#ff4081;padding:10px;text-align:center;">
            <p style="font-size:12px;color:#fff;margin:0;">© 2025 North Blue Agency. All rights reserved.
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
      { ok: false, error: error.message || "Error sending message" },
      { status: 500 }
    );
  }
}
