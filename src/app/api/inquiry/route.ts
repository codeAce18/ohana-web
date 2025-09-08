import { NextResponse } from "next/server";

// Revert to EmailJS: call EmailJS REST API from the server route
// Env vars expected:
// - EMAILJS_SERVICE_ID
// - EMAILJS_TEMPLATE_ID
// - EMAILJS_PUBLIC_KEY (optional if using private key)
// - EMAILJS_PRIVATE_KEY (preferred for server-to-server)
// - EMAILJS_TO_EMAIL (optional, only if your template expects it)
// - NEXT_PUBLIC_SITE_URL or VERCEL_URL (used for Origin header)
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const {
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      EMAILJS_PUBLIC_KEY,
      EMAILJS_PRIVATE_KEY,
      EMAILJS_TO_EMAIL,
      NEXT_PUBLIC_SITE_URL,
      VERCEL_URL,
    } = process.env as Record<string, string | undefined>;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || (!EMAILJS_PUBLIC_KEY && !EMAILJS_PRIVATE_KEY)) {
      return NextResponse.json({ error: "EmailJS is not configured" }, { status: 500 });
    }

    // Map incoming fields to your EmailJS template params
    const template_params: Record<string, string> = {
      name: name,
      email: email,
      message: String(message),
    };

    if (EMAILJS_TO_EMAIL) {
      template_params.to_email = EMAILJS_TO_EMAIL;
    }

    const payload: Record<string, unknown> = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      template_params,
    };

    // Use public key in the body when private key is not provided
    if (EMAILJS_PUBLIC_KEY && !EMAILJS_PRIVATE_KEY) {
      payload.user_id = EMAILJS_PUBLIC_KEY;
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    // Prefer server-to-server with private key
    if (EMAILJS_PRIVATE_KEY) {
      headers.Authorization = `Bearer ${EMAILJS_PRIVATE_KEY}`;
    }

    // EmailJS may validate the Origin header
    const originBase = NEXT_PUBLIC_SITE_URL || VERCEL_URL || "http://localhost";
    headers.origin = originBase.startsWith("http") ? originBase : `https://${originBase}`;

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("EmailJS error:", res.status, errText);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    // EmailJS often returns plain text like "OK"
    const result = await res.text();
    return NextResponse.json({ ok: true, result });
  } catch (err) {
    console.error("/api/inquiry error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}