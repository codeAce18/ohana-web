"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

// Shows a full-screen overlay for a fixed duration on initial load/refresh
export default function ForcedLoader({ durationMs = 3000 }: { durationMs?: number }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), durationMs)
    return () => clearTimeout(timer)
  }, [durationMs])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-end">
        <Image
          src="/logo/Ohana Blue.png"
          alt="Ohana logo"
          width={80}
          height={80}
          priority
          className="animate-bounce-ball select-none"
        />
      <div className="mt-1 w-12 h-2 rounded-full bg-black/40 blur-[3px] animate-shadow" />
      </div>

      <style>{`
        @keyframes bounceBall {
          0%, 100% { transform: translateY(10px) scale(1); }
          50% { transform: translateY(-30px) scale(1.02, 0.98); }
        }
        @keyframes shadowPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.9); opacity: 0.25; }
        }
        .animate-bounce-ball { animation: bounceBall 1.2s ease-in-out infinite; }
        .animate-shadow { animation: shadowPulse 1.2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}