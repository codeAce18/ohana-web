"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import "@/app/index.css"

import Navbar from "@/layout/navbar"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AboutPage from "./about/page"
import PerformancePage from "./performance/page"
import Portfolio from "./portfolio/page"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const HERO_BG_URL = "/japan.jpg"

  // Refs for animation targets
  const sectionRef = useRef<HTMLElement | null>(null)
  const slantRef = useRef<HTMLDivElement | null>(null)
  const bgImageRef = useRef<HTMLDivElement | null>(null)
  const cyanOverlayRef = useRef<HTMLDivElement | null>(null)
  const gradientRef = useRef<HTMLDivElement | null>(null)

  const badgeRef = useRef<HTMLSpanElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const ctasRef = useRef<HTMLDivElement | null>(null)

  const floatingElement1Ref = useRef<HTMLDivElement | null>(null)
  const floatingElement2Ref = useRef<HTMLDivElement | null>(null)
  const floatingElement3Ref = useRef<HTMLDivElement | null>(null)

  // Entrance animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      // Slow down entire sequence
      tl.timeScale(0.6)

      tl.from(
        bgImageRef.current,
        {
          scale: 1.15,
          rotation: 2,
          duration: 1.8,
          transformOrigin: "center",
          ease: "power2.out",
        },
        0,
      )

      tl.from(
        slantRef.current,
        {
          xPercent: -100,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        0.2,
      )

      tl.from(
        badgeRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          rotation: -5,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        0.4,
      )

      tl.from(
        titleRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
          duration: 1.0,
          ease: "power3.out",
        },
        0.6,
      )

      tl.from(
        paragraphRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        0.8,
      )

      if (ctasRef.current) {
        tl.from(
          Array.from(ctasRef.current.children),
          {
            y: 30,
            opacity: 0,
            scale: 0.9,
            stagger: 0.15,
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          1.0,
        )
      }

      tl.from(
        [floatingElement1Ref.current, floatingElement2Ref.current, floatingElement3Ref.current],
        {
          scale: 0,
          opacity: 0,
          rotation: 180,
          stagger: 0.2,
          duration: 1.0,
          ease: "back.out(1.7)",
        },
        0.8,
      )

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress

          // Parallax background
          gsap.set(bgImageRef.current, {
            yPercent: progress * 30,
            scale: 1.15 - progress * 0.1,
          })

          // Parallax overlay
          gsap.set(cyanOverlayRef.current, {
            yPercent: progress * 20,
          })

          // Floating elements parallax
          gsap.set(floatingElement1Ref.current, {
            yPercent: progress * -40,
            rotation: progress * 360,
          })

          gsap.set(floatingElement2Ref.current, {
            yPercent: progress * -60,
            rotation: progress * -180,
          })

          gsap.set(floatingElement3Ref.current, {
            yPercent: progress * -30,
            rotation: progress * 270,
          })
        },
      })

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window

        const xPercent = (clientX / innerWidth - 0.5) * 2
        const yPercent = (clientY / innerHeight - 0.5) * 2

        gsap.to(floatingElement1Ref.current, {
          x: xPercent * 20,
          y: yPercent * 15,
          duration: 0.5,
          ease: "power2.out",
        })

        gsap.to(floatingElement2Ref.current, {
          x: xPercent * -15,
          y: yPercent * -10,
          duration: 0.7,
          ease: "power2.out",
        })

        gsap.to(floatingElement3Ref.current, {
          x: xPercent * 25,
          y: yPercent * -20,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCTAHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleCTALeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  return (
    <>
      <Navbar />
      <section
        ref={sectionRef as any}
        className="relative isolate min-h-[75vh] sm:min-h-[100vh] flex items-center overflow-hidden"
      >
        <div
          aria-hidden
          ref={slantRef}
          className="absolute left-0 top-0 h-full w-[80%] sm:w-[60%] md:w-[50%] lg:w-[60%] bg-[#134a8b]/90 z-0 pointer-events-none"
          style={{
            clipPath: "polygon(0 0, 100% 0, calc(100% - 6vw) 100%, 0 100%)",
          }}
        />

        <div
          ref={floatingElement1Ref}
          className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm z-10 pointer-events-none"
          aria-hidden
        />
        <div
          ref={floatingElement2Ref}
          className="absolute top-1/3 right-1/4 w-8 h-8 bg-[#1abddd]/30 rounded-full backdrop-blur-sm z-10 pointer-events-none"
          aria-hidden
        />
        <div
          ref={floatingElement3Ref}
          className="absolute bottom-1/4 right-10 w-12 h-12 bg-white/5 rounded-full backdrop-blur-sm z-10 pointer-events-none"
          aria-hidden
        />

        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            ref={bgImageRef}
            className="absolute inset-0 bg-[length:cover] bg-center"
            style={{ backgroundImage: `url('${HERO_BG_URL}')` }}
          />
          <div ref={cyanOverlayRef} className="" />
          <div
            ref={gradientRef}
            className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40"
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 relative z-[1]">
          <div className="max-w-2xl md:max-w-3xl">
            <span
              ref={badgeRef}
              className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur"
            >
              Launch in Days
            </span>

            <h1
              ref={titleRef}
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow"
            >
              Professional Websites in Days, Not Months
            </h1>

            <p ref={paragraphRef} className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90 max-w-prose">
              While other agencies are still scheduling discovery calls, we're building your website. No forms, no
              meetings, no waiting around.
            </p>

            <div ref={ctasRef} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-sm bg-[#1abddd] px-5 py-4 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-[#15aecb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1abddd] transition-colors"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <AboutPage/>
       <section id="approach" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Approach</h2>

            <p className="mt-4 text-slate-700">
              Creating a website is not just about making designs. It’s about asking: “Who do we want to reach?” and
              “Who do we want to connect with?” We value these client perspectives, and we propose web designs that are
              gentle and user-friendly.
            </p>

            <ul className="mt-6 list-disc pl-5 space-y-2 text-slate-700">
              <li>We provide clear explanations so that even first-time clients can feel at ease.</li>
              <li>Even after delivery, we aim to remain someone you can casually reach out to for advice.</li>
              <li>We offer strong after-support so that we can continue walking alongside you in the long term.</li>
            </ul>
          </div>
        </div>
      </section>
      <PerformancePage/>
      <Portfolio/>
    </>
  )
}
