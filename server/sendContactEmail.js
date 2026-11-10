import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactEmail({ name, email, message, env = process.env }) {
  const trimmedName = String(name || "").trim();
  const trimmedEmail = String(email || "").trim();
  const trimmedMessage = String(message || "").trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return { ok: false, status: 400, error: "Name, email, and message are required." };
  }

  if (!emailPattern.test(trimmedEmail)) {
    return { ok: false, status: 400, error: "Please enter a valid email address." };
  }

  if (trimmedMessage.length > 5000) {
    return { ok: false, status: 400, error: "Message is too long." };
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, status: 500, error: "Email service is not configured." };
  }

  const to = env.CONTACT_TO_EMAIL || "bluebird23szn@gmail.com";
  const from = env.RESEND_FROM || "Christian Portfolio <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: trimmedEmail,
    subject: `Portfolio message from ${trimmedName}`,
    text: [
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      "",
      trimmedMessage,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return { ok: false, status: 502, error: "Failed to send message." };
  }

  return { ok: true, status: 200 };
}
