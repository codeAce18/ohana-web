import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env as Record<string, string | undefined>;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !MAIL_TO) {
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const fromDisplay = `${name} via Ohana Website`

    const info = await transporter.sendMail({
      from: { name: fromDisplay, address: SMTP_USER }, // keep authenticated sender for DMARC alignment
      to: MAIL_TO,
      replyTo: { name, address: email },
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${String(message).replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error("/api/inquiry error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}