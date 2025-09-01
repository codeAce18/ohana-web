"use client"

import { useEffect, useState } from "react"

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
          <StatCard label="Yearly performance" value={years} suffix="+" />
          <StatCard label="Project successes" value={projects} suffix="+" />
          <StatCard label="Active Customers" value={customers} suffix="+" />
          <StatCard label="professional teams" value={teams} suffix="+" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-4xl sm:text-5xl font-extrabold text-[#134a8b]">
        {value}
        {suffix}
      </div>
      <div className="mt-2 text-slate-700 font-medium">{label}</div>
    </div>
  )
}