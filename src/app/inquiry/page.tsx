"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import emailjs from "@emailjs/browser"

function Toast({ type, text, onClose }: { type: 'success' | 'error'; text: string; onClose: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    const auto = setTimeout(() => onClose(), 4000);
    return () => { clearTimeout(t); clearTimeout(auto); };
  }, [onClose]);
  return (
    <div
      className={`fixed bottom-24 right-6 z-50 rounded-sm px-4 py-3 shadow-lg border transition transform duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      } ${type === 'success' ? 'bg-[#00c7f1] border-cyan-300 text-white' : 'bg-red-500 border-red-300 text-white'}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <span className="font-semibold">{type === 'success' ? 'Success' : 'Error'}</span>
        <span className="opacity-95">{text}</span>
        <button
          aria-label="Close notification"
          onClick={onClose}
          className="ml-2 text-white/90 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default function InquiryPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [toast, setToast] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // Read EmailJS config from public env vars
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  useEffect(() => {
    // Optional init (not required if passing publicKey in send options)
    if (PUBLIC_KEY) {
      emailjs.init({ publicKey: PUBLIC_KEY })
    }
  }, [PUBLIC_KEY])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name || !email || !message) return

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError("Email service is not configured. Please set your EmailJS env variables.")
      setToast({ type: 'error', text: 'Email service not configured. Please try again later.' })
      return
    }

    setSubmitting(true)

    // Button tap animation
    gsap.to("#submitBtn", { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1 })

    try {
      // Params must match your EmailJS template variables
      const params = {
        name: name,
        email: email,
        message,
        reply_to: email,
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params)

      setSubmitted(true)
      setToast({ type: 'success', text: 'Your message has been sent. We will get back to you soon.' })
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      console.error(err)
      setError("Failed to send message. Please try again later.")
      setToast({ type: 'error', text: 'Failed to send. Please try again later.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      className="min-h-[70vh] relative py-20 px-4"
      style={{
        backgroundImage: "url('/S5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 z-0"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10 sm:mb-16">
          Contact Us
        </h1>

        <form
          onSubmit={onSubmit}
          className="bg-blue-700/30 backdrop-blur-sm border border-white/20 rounded-sm p-6 sm:p-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-white mb-2 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-sm bg-[#345b95] text-white placeholder-white/70 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00c7f1]"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-sm bg-[#345b95] text-white placeholder-white/70 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00c7f1]"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help you?"
              rows={6}
              className="w-full rounded-sm bg-[#345b95] text-white placeholder-white/70 border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00c7f1]"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              id="submitBtn"
              type="submit"
              disabled={submitting}
              className={`mt-2 inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium transition-colors duration-200 shadow-sm ${
                submitting
                  ? "bg-white/30 text-white/70 cursor-not-allowed"
                  : "bg-[#00c7f1] text-white hover:bg-[#00b5dc]"
              }`}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>

          {error && <p className="text-red-300 text-sm">{error}</p>}
          {submitted && !error && (
            <p className="text-white/90 text-sm">Thanks! Your message has been sent.</p>
          )}
        </form>
      </div>

      {/* {toast && (
        <Toast
          type={toast.type}
          text={toast.text}
          onClose={() => setToast(null)}
        />
      )} */}
    </section>
  )
}