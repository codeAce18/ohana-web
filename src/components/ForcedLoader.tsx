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
        {/* Logo bouncing like a ball */}
        <Image
          src="/logo/Ohana Blue.png"
          alt="Ohana logo"
          width={96}
          height={96}
          priority
          className="animate-bounce-ball select-none"
        />
        {/* Soft shadow under the logo */}
      <div className="mt-2 w-20 h-2 rounded-full bg-black/40 blur-[3px] animate-shadow" />
      </div>

      <style>{`
        @keyframes bounceBall {
          0%, 100% { transform: translateY(25px) scale(1); }
          50% { transform: translateY(-78px) scale(1.02, 0.98); }
        }
        @keyframes shadowPulse {
          0%, 100% { transform: scale(1);  }
          50% { transform: scale(0.8); opacity: 0.15; }
        }
        .animate-bounce-ball { animation: bounceBall 1.2s ease-in-out infinite; }
        .animate-shadow { animation: shadowPulse 1.2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}