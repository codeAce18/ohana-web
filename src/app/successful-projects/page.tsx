"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Demo data – replace images/links as needed
const projects = [
  {
    id: 1,
    title: "E‑Commerce Revamp",
    client: "TechFlow Solutions",
    description:
      "A complete storefront rebuild with blazing performance and a modern UX across devices.",
    image: "/gamer.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "IoT Analytics Dashboard",
    client: "InnovateLab Inc.",
    description:
      "Real-time telemetry visualization and alerting for thousands of connected devices.",
    image: "/tech.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Logistics Optimization",
    client: "Nippon Express Systems",
    description:
      "Route planning and scheduling solution that reduced delivery latency by 27%.",
    image: "/trends.jpg",
    link: "#"
  }
]

export default function SuccessfulProjectsPage() {
  const [active, setActive] = useState(1) // index of the center/active card
  const containerRef = useRef<HTMLDivElement>(null)

  // circular helpers
  const leftIndex = useMemo(() => (active + projects.length - 1) % projects.length, [active])
  const rightIndex = useMemo(() => (active + 1) % projects.length, [active])

  const goNext = () => setActive((idx) => (idx + 1) % projects.length)
  const goPrev = () => setActive((idx) => (idx + projects.length - 1) % projects.length)

  // optional auto-play; pause on hover
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let hovered = false
    const onEnter = () => (hovered = true)
    const onLeave = () => (hovered = false)
    el.addEventListener("mouseenter", onEnter)
    el.addEventListener("mouseleave", onLeave)

    const id = setInterval(() => {
      if (!hovered) goNext()
    }, 5000)

    return () => {
      el.removeEventListener("mouseenter", onEnter)
      el.removeEventListener("mouseleave", onLeave)
      clearInterval(id)
    }
  }, [])

  // Card component for reuse
  const Card = ({ project, emphasis }: { project: typeof projects[number]; emphasis: "left" | "center" | "right" }) => {
    const base = "relative rounded-xl overflow-hidden border will-change-transform transition-[transform,opacity,filter] duration-500 ease-out"
    const size =
      emphasis === "center"
        ? "w-[92vw] sm:w-[520px] md:w-[640px] lg:w-[720px] aspect-[16/10] z-20 scale-100"
        : "w-[300px] md:w-[360px] lg:w-[420px] aspect-[16/10] z-10 scale-90"
    const pos =
      emphasis === "left"
        ? "opacity-90 -translate-x-2 md:-translate-x-4"
        : emphasis === "right"
        ? "opacity-90 translate-x-2 md:translate-x-4"
        : "opacity-100 shadow-2xl"

    return (
      <div className={`${base} ${size} ${pos} bg-white border-gray-200`}>        
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width:1024px) 720px, (min-width:768px) 640px, 92vw"
            className="object-cover"
            priority={emphasis === "center"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
          {/* <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
          <p className="text-cyan-300 text-sm md:text-base">{project.client}</p>
          {emphasis === "center" && (
            <p className="mt-2 text-sm md:text-base text-white/90 line-clamp-3">{project.description}</p>
          )} */}
          <div className="mt-3">
            <a
              href={project.link}
              className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-cyan-300 hover:text-cyan-200"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-[#fff] py-16 px-0 overflow-x-hidden" ref={containerRef}>
      <div className="max-w-[100vw] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00c7f1]">Successful Projects</h1>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6 px-2 md:px-6">
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0A2349] text-white hover:bg-[#15407a] transition active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="text-[#0A2349] text-sm md:text-base font-medium select-none">
            {active + 1} / {projects.length}
          </div>

          <button
            onClick={goNext}
            aria-label="Next"
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0A2349] text-white hover:bg-[#15407a] transition active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel (center bigger, sides smaller) */}
        <div className="relative flex items-center justify-center gap-3 md:gap-6 lg:gap-8 px-2 md:px-6 overflow-x-hidden">
          {/* Left */}
          <div className="hidden sm:block">
            <Card project={projects[leftIndex]} emphasis="left" />
          </div>

          {/* Center */}
          <div>
            <Card project={projects[active]} emphasis="center" />
          </div>

          {/* Right */}
          <div className="hidden sm:block">
            <Card project={projects[rightIndex]} emphasis="right" />
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === active ? "bg-cyan-400 scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}