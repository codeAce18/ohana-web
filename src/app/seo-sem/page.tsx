"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SeoSemPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const textBlockRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal
      gsap.fromTo(
        heroRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power2.out" },
      )

      // Text block on scroll
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

      // Image card on scroll
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
            ABOUT SEO/SEM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Grow traffic with smart SEO & SEM</h2>
        </div>

        {/* Content grid similar to About */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div>
            <div ref={textBlockRef} className="border-2 border-blue-200 rounded-lg p-6 bg-white/80 backdrop-blur">
              <p className="text-slate-700 mb-4 text-pretty">
                Analyzing a website is a key part of SEO. It helps you understand where your visitors are coming from, the keywords they use to find your site, and which pages capture their attention the most. With these insights, you can optimize your site to attract even more traffic. More visitors ultimately lead to better rankings in search results.
              </p>
              <p className="text-slate-700 mb-4 text-pretty">
               Beyond organic growth, you can also bring in additional traffic through SEM (Search Engine Marketing). SEM uses paid advertising on search engines to promote your website, ensuring it appears prominently to potential customers searching for relevant terms.
              </p>
              <p className="text-slate-700 text-pretty">
                However, both SEO and SEM require consistent effort and can quickly become time-consuming. Spending too much time on them might take your focus away from your core business, while neglecting them altogether could mean missed opportunities. That’s where our team comes in — we have dedicated specialists who can manage these strategies on your behalf, helping you achieve measurable results more efficiently.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:pl-8 self-stretch">
            <div ref={imageRef} className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="relative w-full aspect-[3/4] lg:h-full">
                <Image
                  src="/SEO.jpg"
                  alt="SEO & SEM"
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