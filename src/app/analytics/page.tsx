"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AnalyticsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const textBlockRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power2.out" },
      )

      gsap.fromTo(
        textBlockRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textBlockRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 28, scale: 0.98 },
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
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-20 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        {/* Hero */}
        <div ref={heroRef} className="text-center mb-10">
          <span className="inline-block rounded-full bg-[#00c7f1] px-4 py-2 text-sm font-bold text-white mb-2">
            ANALYSIS BY GOOGLE ANALYTICS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Turn insights into growth</h2>
        </div>

        {/* Content grid similar to Our Approach (image left, text right) */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="lg:pr-8 self-stretch order-1 lg:order-none">
            <div ref={imageRef} className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="relative w-full aspect-[3/4] lg:h-full">
                <Image
                  src="/Analytics.jpg"
                  alt="Google Analytics"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div ref={textBlockRef} className="border-2 border-blue-200 rounded-lg p-6 bg-white/80 backdrop-blur">
              <p className="text-slate-700 mb-4 text-pretty">
                By studying visitor trends, we can uncover what your audience truly wants, identify which pages perform well (and which don’t), and make improvements that enhance both user satisfaction and overall traffic growth.
              </p>
              <p className="text-slate-700 mb-4 text-pretty">
                In practice, this means analyzing the keywords most likely to drive sales, understanding where visitors are coming from and at what times, and tracking seasonal shifts in demand for your products or services.
              </p>
              <p className="text-slate-700 mb-4 text-pretty">
                Think of it like running a physical store: by observing shoppers, you can see how products are arranged, which ones sell best, and the demographics of your customers. Without that insight, it’s difficult to know what changes will boost sales. The same principle applies online — without proper website analysis, you can’t know how to optimize effectively.
              </p>
              <p className="text-slate-700 text-pretty">
               That’s why we perform regular weekly analyses and implement improvements to keep your website performing at its best.
              </p>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  )
}