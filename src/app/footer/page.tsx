"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#stats", label: "Stats" },
    { href: "#about", label: "About" },
    { href: "#approach", label: "Approach" },
    { href: "#performance", label: "Performance" },
    { href: "#vision", label: "Vision" },
    { href: "#portfolio", label: "Portfolio" },
    // { href: "#testimonials", label: "Testimonials" },
    { href: "#successful-projects", label: "Successful Projects" },
    { href: "#why-choose-us", label: "Why Choose Us" },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer
      className="relative text-[#000] bg-[#f8f9fd]"

    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-12 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-12 md:h-20 flex items-center">
                <Image
                  src="/logo/Ohana Blue.png"
                  alt="Ohanaweb"
                  width={140}
                  height={80}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </div>
            <p className="mt-4  text-sm leading-relaxed max-w-sm">
              We build professional, user‑friendly websites in days — not months. Friendly support, clear communication,
              and a focus on what really matters: your users.
            </p>
            <div className="mt-6">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
                <Button size="lg" className="bg-[#00c7f1] hover:bg-[#15aecb] text-white">Get Started</Button>
              </a>
            </div>
          </div>

          {/* Quick Links (split into two columns on md) */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-semibold tracking-wide ">Navigation</h3>
              <ul className="mt-4 space-y-3">
                {links.slice(0, Math.ceil(links.length / 2)).map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleSmoothScroll(e, l.href)}
                      className=" hover:text-[#00c7f1] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wide ">More</h3>
              <ul className="mt-4 space-y-3">
                {links.slice(Math.ceil(links.length / 2)).map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleSmoothScroll(e, l.href)}
                      className=" hover:text-[#00c7f1] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold tracking-wide ">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>Email: cbnbc08@gmail.com</li>
                <li>Hours: Mon–Fri, 9:00–18:00 JST</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Ohanaweb. All rights reserved.</p>
          <p className="text-white/60 text-sm">Made with care by OHANA‑WEB</p>
        </div>
      </div>
    </footer>
  )
}