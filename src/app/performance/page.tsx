"use client"

import { useEffect, useRef } from "react"
import { Monitor, Smartphone, Zap } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function PerformancePage() {
  const containerRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const rowsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power2.out" },
      )

      // Each comparison row
      const rows = rowsRef.current?.querySelectorAll(".perf-row") || []
      gsap.fromTo(
        rows,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rowsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-24 bg-cover "
      style={{ backgroundImage: "url('/S5.jpg')" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-blue-200 text-sm font-medium mb-2">PERFORMANCE COMPARISON</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Compare old with new</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            As consumers, we now all demand ultra-fast internet speeds on our mobile devices, intuitive search results
            and want less hassle. Let's look at the difference between traditional builds vs Ohanaweb Digital.
          </p>
        </div>

        {/* Comparison blocks */}
        <div ref={rowsRef} className="space-y-16 md:space-y-28">
          {/* Traditional Website vs Ohanaweb Digital */}
          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Monitor className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Traditional Website</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px]">
                    Traditional HTML build using WordPress and multiple tracking installs
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-white/60 font-medium text-lg">vs</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Monitor className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Ohanaweb Digital</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px] md:ml-auto">Ultra-fast loading time with page speed below 4s</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Responsiveness vs Ohanaweb Digital Responsiveness */}
          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">User Responsiveness</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px]">
                    Pages provide personalized content but require a page reload for every user action
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-white/60 font-medium text-lg">vs</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Ohanaweb Digital Responsiveness</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px] md:ml-auto">
                    Dynamically loads new content as the page as they surf and interact on their device
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Native Experience vs Ohanaweb Digital Experience */}
          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Zap className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Native Experience</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px]">
                    Traditional builds try to emulate a native experience but generally fail
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-white/60 font-medium text-lg">vs</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Zap className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Ohanaweb Digital Experience</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px] md:ml-auto">
                    Our websites feel like native applications on both desktop and mobile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}