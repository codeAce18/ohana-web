"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "NextLevel",
    client: "TechFlow Solutions",
    description:
      "A complete storefront rebuild with blazing performance and a modern UX across devices.",
    image: "/nextlevel.png",
    link: "https://nextlevelholdings.co.jp/"
  },
  {
    id: 2,
    title: "Kafuu",
    client: "InnovateLab Inc.",
    description:
      "Real-time telemetry visualization and alerting for thousands of connected devices.",
    image: "/kafuu.png",
    link: "https://www.kafuu-okinawa.jp/"
  },
  {
    id: 3,
    title: "Ohtake",
    client: "Nippon Express Systems",
    description:
      "Route planning and scheduling solution that reduced delivery latency by 27%.",
    image: "/ohtake.png",
    link: "https://www.ohtake.ac.jp/"
  },
   {
    id: 4,
    title: "Noluc",
    client: "Nippon Express Systems",
    description:
      "Route planning and scheduling solution that reduced delivery latency by 27%.",
    image: "/noluc.png",
    link: "https://www.noluc.jp/"
  },
   {
    id: 5,
    title: "Fujioka",
    client: "Nippon Express Systems",
    description:
      "Route planning and scheduling solution that reduced delivery latency by 27%.",
    image: "/fuji.png",
    link: "https://fujioka-dental.jp/"
  },
   {
    id: 6,
    title: "Narikoma",
    client: "Nippon Express Systems",
    description:
      "Route planning and scheduling solution that reduced delivery latency by 27%.",
    image: "/narikoma.png",
    link: "https://www.narikoma-group.co.jp/corp/"
  },
   {
    id: 7,
    title: "Logistics Optimization",
    client: "Nippon Express Systems",
    description:
      "Route planning and scheduling solution that reduced delivery latency by 27%.",
    image: "/craft.png",
    link: "https://marimocraft.co.jp/"
  },
     {
    id: 8,
    title: "Logistics Optimization",
    client: "Nippon Express Systems",
    description:
      "Route planning and scheduling solution that reduced delivery latency by 27%.",
    image: "/hamao.png",
    link: "https://hamaokamekki.co.jp/"
  }
]

export default function SuccessfulProjectsPage() {
  const [active, setActive] = useState(1) // index of the center/active card
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLHeadingElement | null>(null)

  const leftIndex = useMemo(() => (active + projects.length - 1) % projects.length, [active])
  const rightIndex = useMemo(() => (active + 1) % projects.length, [active])

  const [direction, setDirection] = useState<1 | -1>(1)
  const goNext = () => {
    setDirection(1)
    setActive((idx) => (idx + 1) % projects.length)
  }
  const goPrev = () => {
    setDirection(-1)
    setActive((idx) => (idx + projects.length - 1) % projects.length)
  }

  useEffect(() => {
    const el = containerRef.current

    const headerEl = headerRef.current
    let observer: IntersectionObserver | null = null
    if (headerEl) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              import("gsap").then(({ gsap }) => {
                gsap.fromTo(
                  headerEl,
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
                )
              })
              observer && observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.25 }
      )
      observer.observe(headerEl)
    }

    let hovered = false
    const onEnter = () => (hovered = true)
    const onLeave = () => (hovered = false)

    if (el) {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    }

    const id = setInterval(() => {
      if (!hovered) goNext()
    }, 3000)

    return () => {
      if (el) {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      }
      if (observer) observer.disconnect()
      clearInterval(id)
    }
  }, [])

  const Card = ({ project, emphasis }: { project: typeof projects[number]; emphasis: "left" | "center" | "right" }) => {
    const base = "relative rounded-xl overflow-hidden border will-change-transform transition-[transform,opacity,filter] duration-500 ease-out"
    const size =
      emphasis === "center"
        ? "w-[92vw] sm:w-[520px] md:w-[640px] lg:w-[820px] lg:h-[550px] aspect-[16/10] z-20 scale-100 cursor-pointer"
        : "w-[300px] md:w-[360px] lg:w-[520px] aspect-[16/10] z-10"
    const pos =
      emphasis === "left"
        ? "opacity-90 -translate-x-2 md:-translate-x-4 "
        : emphasis === "right"
        ? "opacity-90 translate-x-2 md:translate-x-4"
        : "opacity-100 shadow-2xl"

    return (
      <div className={`${base} ${size} ${pos} bg-white border-gray-200 group`}>        
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={
              emphasis === "center"
                ? "(min-width:1024px) 720px, (min-width:768px) 640px, 92vw"
                : "(min-width:1024px) 420px, (min-width:768px) 360px, 300px"
            }
            quality={90}
            className="object-cover"
            priority={emphasis === "center"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {project.link && (
          <div className="absolute inset-0 flex items-end justify-end p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#00c7f1] text-[#0A2349] font-semibold px-4 py-2 shadow-lg hover:shadow-xl ring-2 ring-[#00c7f1]/70"
            >
              Visit site
            </motion.a>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
          {/* <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
          <p className="text-cyan-300 text-sm md:text-base">{project.client}</p>
          {emphasis === "center" && (
            <p className="mt-2 text-sm md:text-base text-white/90 line-clamp-3">{project.description}</p>
          )} */}
          {/* <div className="mt-3">
            <a
              href={project.link}
              className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-cyan-300 hover:text-cyan-200"
            >
              View Project
            </a>
          </div> */}
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-[#fff] py-16 px-0 overflow-x-hidden" ref={containerRef}>
      <div className="max-w-[100vw] mx-auto">
        <div className="text-center mb-10">
          <h1 ref={headerRef} className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00c7f1]">成功事例</h1>
        </div>

        <div className="flex items-center justify-between mb-6 px-2 md:px-6">
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-sm bg-[#00c7f1] text-white hover:bg-[#15407a] transition active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="text-[#0A2349] text-sm md:text-base font-medium select-none">
            {active + 1} / {projects.length}
          </div>

          <button
            onClick={goNext}
            aria-label="Next"
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-sm bg-[#00c7f1] text-white hover:bg-[#15407a] transition active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="relative flex items-center justify-center gap-3 md:gap-6 lg:gap-12 px-2 md:px-6 overflow-x-hidden pt-10">
          <motion.div
            key={`left-${leftIndex}`}
            className="hidden sm:block"
            initial={{ opacity: 0.5, scale: 0.95, y: 10 }}
            animate={{ opacity: 0.9, scale: 1, y: 0 }}
            exit={{ opacity: 0.5, scale: 0.95, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card project={projects[leftIndex]} emphasis="left" />
          </motion.div>
          <div className="relative">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={active}
                custom={direction}
                variants={{
                  enter: (dir: 1 | -1) => ({ opacity: 0, x: dir * 60, rotate: dir * 1.5, scale: 0.98 }),
                  center: { opacity: 1, x: 0, rotate: 0, scale: 1 },
                  exit: (dir: 1 | -1) => ({ opacity: 0, x: -dir * 60, rotate: -dir * 1.5, scale: 0.98 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card project={projects[active]} emphasis="center" />
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            key={`right-${rightIndex}`}
            className="hidden sm:block"
            initial={{ opacity: 0.5, scale: 0.95, y: -10 }}
            animate={{ opacity: 0.9, scale: 1, y: 0 }}
            exit={{ opacity: 0.5, scale: 0.95, y: 10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card project={projects[rightIndex]} emphasis="right" />
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > active ? 1 : -1)
                setActive(i)
              }}
              aria-label={`Go to ${i + 1}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={`h-2.5 w-2.5 rounded-sm transition-all ${
                i === active ? "border-2 border-cyan-400 scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}