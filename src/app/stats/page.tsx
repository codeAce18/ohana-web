"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

// Simple count-up hook for smooth animation
function useCountUp(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let raf: number
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / durationMs, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs])

  return value
}

export default function StatsPage() {
  // Values will animate on each load
  const years = useCountUp(12)
  const projects = useCountUp(800)
  const customers = useCountUp(200)
  const teams = useCountUp(300)

  return (
    <section className="bg-white py-16 sm:py-24">
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

function StatCard({ label, value, suffix = "", image }: { label: string; value: number; suffix?: string; image: string }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image}
          alt={label}
          width={48}
          height={48}
          className="w-14 h-14 object-contain"
        />
      <div className="">
          <div className="text-3xl font-bold text-[#00c7f1]">
          {value}
          {suffix}
        </div>
        <div className=" text-[#0A2349] font-medium">{label}</div>
      </div>
      </div>
      
    </div>
  )
}