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
import VisionPage from "./vision/page"
import StatsPage from "./stats/page"
import Testimonials from "./testimonials/page"
import SuccessfulProjectsPage from "./successful-projects/page"
import WhyChooseUsPage from "./choose/page"
import Footer from "./footer/page"
import InquiryPage from "./inquiry/page"
import Image from "next/image"
import Loading from "./loading"

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

  // Approach section refs
  const approachSectionRef = useRef<HTMLElement | null>(null)
  const approachTextRef = useRef<HTMLDivElement | null>(null)
  const approachListRef = useRef<HTMLUListElement | null>(null)
  const approachImageRef = useRef<HTMLDivElement | null>(null)



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



      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress

          // Parallax background + move gradient together to avoid top gap
          gsap.set(bgImageRef.current, {
            yPercent: progress * 30,
            scale: 1.15 - progress * 0.1,
          })
          gsap.set(gradientRef.current, {
            yPercent: progress * 30,
          })

          // Parallax overlay
          gsap.set(cyanOverlayRef.current, {
            yPercent: progress * 20,
          })


        },
      })

      // Approach section animations
      if (approachSectionRef.current) {
        // Text fade-up
        gsap.fromTo(
          approachTextRef.current?.children || [],
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: approachTextRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // List items slide in
        gsap.fromTo(
          approachListRef.current?.querySelectorAll("li") || [],
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: approachListRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )

        // Image card reveal
        gsap.fromTo(
          approachImageRef.current,
          { opacity: 0, y: 28, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: approachImageRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      return () => {
        // cleanup
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
        id="home"
        ref={sectionRef as any}
        className="relative isolate min-h-[75vh] sm:min-h-[100vh] flex items-center overflow-hidden"
      >
        <div
          aria-hidden
          ref={slantRef}
          className="absolute left-0 top-0 hidden xl:block h-full w-[60%] bg-[#134a8b]/90 z-0 pointer-events-none"
          style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 6vw) 100%, 0 100%)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-[#134a8b]/90 z-0 xl:hidden" />



        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            ref={bgImageRef}
            className="absolute inset-0 bg-[length:cover] bg-center"
            style={{ backgroundImage: `url('${HERO_BG_URL}')` }}
          />
         
          <div
            ref={gradientRef}
            className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 will-change-transform"
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

      <section id="stats"><StatsPage/></section>
        <section id="why-choose-us"><WhyChooseUsPage/></section>
      <section id="about"><AboutPage/></section>
       <section
        id="approach"
        ref={approachSectionRef as any}
        className="py-16 sm:py-24 bg-white"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left image, similar to About page but mirrored */}
            <div className="lg:pr-8 self-stretch order-1 lg:order-none">
              <div ref={approachImageRef} className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="relative w-full aspect-[3/4] lg:h-full">
                  <Image
                    src="/approach.jpg"
                    alt="Our Approach"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right text content */}
            <div ref={approachTextRef} className="max-w-2xl">
              <span className="inline-block rounded-full bg-[#00c7f1] px-4 py-2 text-sm font-bold text-white mb-2">
                OUR APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Approach</h2>

              <p className="mt-4 text-slate-700">
                Creating a website is not just about making designs. It’s about asking: “Who do we want to reach?” and
                “Who do we want to connect with?” We value these client perspectives, and we propose web designs that are
                gentle and user-friendly.
              </p>

              <ul ref={approachListRef} className="mt-6 list-disc pl-5 space-y-2 text-slate-700">
                <li>We provide clear explanations so that even first-time clients can feel at ease.</li>
                <li>Even after delivery, we aim to remain someone you can casually reach out to for advice.</li>
                <li>We offer strong after-support so that we can continue walking alongside you in the long term.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="performance"><PerformancePage/></section>
      <section id="vision"><VisionPage/></section>
      <section id="portfolio"><Portfolio/></section>
      <section id="testimonials"><Testimonials/></section>
      <section id="successful-projects"><SuccessfulProjectsPage/></section> 
      <section id="inquiry"><InquiryPage/></section>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 rounded-sm bg-[#00c7f1] text-white shadow-lg hover:shadow-xl w-12 h-12 flex items-center justify-center transition transform hover:scale-105"
      >
        ↑
      </button>
      <Footer/>
    </>
  )
}