"use client"

import { Clock, Smartphone, Search, DollarSign, Heart, Users, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const textBlockRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial hero reveal
      gsap.fromTo(
        heroRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power2.out" },
      )

      // Text block on scroll
      gsap.fromTo(
        textBlockRef.current?.querySelectorAll("p") || [],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textBlockRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // List items on scroll
      gsap.fromTo(
        listRef.current?.querySelectorAll("li") || [],
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Image card on scroll
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 32, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Gentle floating for decorative bubbles
      gsap.to(".floating-element", {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-30 floating-element" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-100 rounded-full opacity-40 floating-element" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-100 rounded-full opacity-25 floating-element" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 relative">
        {/* Hero */}
        <div ref={heroRef} className="flex flex-col items-center justify-center text-center mb-10">
          <span className="inline-block rounded-full bg-[#00c7f1] px-4 py-2 text-sm font-bold text-white mb-2">
            ABOUT US
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-[#00c7f1] mb-6 text-balance">
            We do things differently
          </h1>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div className="max-w-2xl">
            <div ref={textBlockRef} className="border-2 border-blue-200 rounded-lg p-6 bg-white/80 backdrop-blur mb-8">
              <p className="text-slate-700 mb-4 text-pretty">
                <strong>OHANA-WEB</strong> is a web production company that values "human-friendly web." The name
                "OHANA" means family in Hawaiian, and as the word suggests, our philosophy is to treat every client like
                family.
              </p>

              <p className="text-slate-700 mb-4 text-pretty">
                Web development often seems technical and rigid. But what we aim for is "easy-to-understand web
                production that anyone can casually consult about."
              </p>

              <p className="text-slate-700 text-pretty">
                Our goal is not just to make websites, but to shape our clients' ideas and deliver warmth and
                reassurance into everyday life.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-slate-800 font-medium mb-4">
                At OHANA-WEB, we create gentle web development that connects people to people:
              </p>

              <ul ref={listRef} className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-slate-700">Explaining clearly in everyday words, not difficult jargon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-700">
                    Not ending at delivery, but walking alongside clients in their ongoing operations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-700">
                    Standing in the user's shoes to create web experiences that are gentle, clear, and beautiful
                  </span>
                </li>
              </ul>

              <p className="text-slate-700 mt-4 italic">
                By holding on to this approach, we want to be a comfortable partner clients can trust.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:pl-8 self-stretch">
            <div ref={imageRef} className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="relative w-full aspect-[3/4] lg:h-full">
                <Image
                  src="/team.jpg"
                  alt="Showcase"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}