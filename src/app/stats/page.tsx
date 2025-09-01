"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

// Enhanced count-up hook with easing and staggered start
function useCountUp(target: number, durationMs = 2000, delay = 0, start = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    let raf: number
    let timeoutId: NodeJS.Timeout

    const startAnimation = () => {
      const startTime = performance.now()
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / durationMs, 1)
        const easedProgress = easeOutQuart(progress)
        setValue(Math.floor(easedProgress * target))

        if (progress < 1) raf = requestAnimationFrame(tick)
      }

      raf = requestAnimationFrame(tick)
    }

    if (delay > 0) {
      timeoutId = setTimeout(startAnimation, delay)
    } else {
      startAnimation()
    }

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeoutId)
    }
  }, [target, durationMs, delay, start])

  return value
}

export default function StatsPage() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            // Optionally unobserve after first trigger to avoid re-animating on scroll back
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const years = useCountUp(12, 2200, 0, inView)
  const projects = useCountUp(800, 2400, 200, inView)
  const customers = useCountUp(200, 2000, 400, inView)
  const teams = useCountUp(300, 2100, 600, inView)

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard label="Yearly performance" value={years} suffix="+" image="/portfolio.png" />
          <StatCard label="Project successes" value={projects} suffix="+" image="/rocket.png" />
          <StatCard label="Active Customers" value={customers} suffix="+" image="/scan.png" />
          <StatCard label="professional teams" value={teams} suffix="+" image="/tv.png" />
        </div>
      </div>
    </section>
  )
}

function StatCard({
  label,
  value,
  suffix = "",
  image,
}: { label: string; value: number; suffix?: string; image: string }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={label}
          width={48}
          height={48}
          className="w-14 h-14 object-contain"
        />
        <div className="">
          <div className="text-3xl font-bold text-[#00c7f1] transition-all duration-100">
            {value}
            {suffix}
          </div>
          <div className="text-[#0A2349] font-medium">{label}</div>
        </div>
      </div>
    </div>
  )
}
