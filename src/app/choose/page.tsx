"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function WhyChooseUsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const centerOrbRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
      )

      // Left column items
      gsap.fromTo(
        leftColRef.current?.querySelectorAll(".feature-left") || [],
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Center orb reveal and gentle float
      gsap.fromTo(
        centerOrbRef.current,
        { opacity: 0, scale: 0.92, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: centerOrbRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
      gsap.to(centerOrbRef.current, {
        y: -6,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Right column items
      gsap.fromTo(
        rightColRef.current?.querySelectorAll(".feature-right") || [],
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-[70vh] relative overflow-hidden"
      style={{
        backgroundImage: "url('/S5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay over background image */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-300 rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-blue-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main heading */}
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold text-white text-center mb-16 text-balance">
          Why choose us?
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {/* Left column */}
          <div ref={leftColRef} className="space-y-8">
            {/* 14-day risk-free trial */}
            <div className="feature-left">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  14-day risk-free trial
                  <img src="/Component-86.png" alt="rocket icon" className="w-10 h-10" />
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  You can experience our services without any financial risk before signing any formal contract.
                </p>
              </div>
            </div>

            <div className="feature-left">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  Flexible Recruitment Models
                  <img src="/box.png" alt="box icon" className="w-10 h-10" />
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  You can choose the model that best suits your business from flat rate, extended fee, or time and
                  materials.
                </p>
              </div>
            </div>

            {/* Start your trial within 2 business days */}
            <div className="feature-left">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  Start your trial within 2 business days
                  <img src="/dollar.png" alt="dollar icon" className="w-10 h-10" />
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Not only does this save you a lot of opportunity cost, it also eliminates unnecessary waiting time.
                </p>
              </div>
            </div>
          </div>

          {/* Center - Logo/Brand */}
          <div ref={centerOrbRef} className="flex justify-center items-center">
            <div className="relative">
              {/* Glowing orb effect */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 relative overflow-hidden shadow-2xl shadow-blue-500/50">
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path
                          d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20"
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth="0.5"
                          fill="none"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                  </svg>
                </div>

                {/* Logo container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-lg mb-4 mx-auto flex items-center justify-center backdrop-blur-sm">
                     <Image src="/logo/Ohana Blue.svg" alt="Logo" width={64} height={64} />
                    </div>
                    <div className="text-white">
                      <div className="text-2xl font-bold">OHANA WEB</div>
                      <div className="text-lg font-light">Solutions</div>
                    </div>
                  </div>
                </div>

                {/* Animated glow rings */}
                <div className="absolute -inset-4 rounded-full border border-cyan-300/30 animate-pulse"></div>
                <div className="absolute -inset-8 rounded-full border border-blue-300/20 animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div ref={rightColRef} className="space-y-8">
            {/* 480-hour warranty */}
            <div className="feature-right">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <img src="/graph.png" alt="graph icon" className="w-10 h-10" />
                  480-hour warranty
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">We ensure the success of your product even after the project is over.</p>
              </div>
            </div>

            <div className="feature-right">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <img src="/puzzle.png" alt="puzzle icon" className="w-10 h-10" />
                  100% NDA protection
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Before starting your ISMS - ISO 27001:2013 certification project, we will sign an NDA to keep all your
                  information confidential.
                </p>
              </div>
            </div>
            <div className="feature-right">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <img src="/handtake.png" alt="handshake icon" className="w-10 h-10" />
                  Project Status Updates
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We provide project progress reports in the form of daily, weekly, monthly reports, or whenever requested by the client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}