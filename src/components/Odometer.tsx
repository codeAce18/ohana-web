"use client"

import React, { useEffect, useMemo, useRef } from "react"

type OdometerProps = {
  value: number
  className?: string
  suffix?: string
}

// Rolling odometer-style digits that animate on value changes.
export default function Odometer({ value, className = "", suffix = "" }: OdometerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const digitRefs = useRef<HTMLDivElement[]>([])
  const prevDigitsRef = useRef<number[] | null>(null)
  const prevLenRef = useRef<number>(String(value).length)

  // Normalize to digits only for animation; suffix rendered separately
  const valueStr = String(Math.max(0, Math.floor(value)))

  // Keep previous and current strings right-aligned for smooth carries (e.g., 99 -> 100)
  const { currentDigits, prevDigits } = useMemo(() => {
    const prev = prevDigitsRef.current ?? valueStr.split("").map((d) => Number(d))
    const curr = valueStr.split("").map((d) => Number(d))
    const maxLen = Math.max(prev.length, curr.length)

    const pad = (arr: number[], len: number) => {
      const res = new Array(len - arr.length).fill(0).concat(arr)
      return res
    }

    return {
      prevDigits: pad(prev, maxLen),
      currentDigits: pad(curr, maxLen),
    }
  }, [valueStr])

  // Ensure refs array length matches
  useEffect(() => {
    digitRefs.current = digitRefs.current.slice(0, currentDigits.length)
  }, [currentDigits.length])

  // Apply transform to each digit column based on previous -> current with wrap handling (9 -> 0 continues forward)
  useEffect(() => {
    currentDigits.forEach((nextDigit, i) => {
      const el = digitRefs.current[i]
      if (!el) return

      const prevDigit = prevDigits[i]
      // If rolling backward (e.g., 9 -> 0), continue forward by adding 10
      const target = nextDigit < prevDigit ? nextDigit + 10 : nextDigit

      // Animate to target index (each step is 10%)
      el.style.transition = "transform 500ms ease-out"
      el.style.transform = `translateY(-${target * 10}%)`

      const handle = () => {
        // After animation, normalize if we overshot by +10
        if (target >= 10) {
          // Remove transition, snap back to modulo position, then restore transition
          el.style.transition = "none"
          el.style.transform = `translateY(-${(target % 10) * 10}%)`
          // Force reflow to apply snap before re-enabling transition for future updates
          void el.offsetHeight
          el.style.transition = "transform 500ms ease-out"
        }
        el.removeEventListener("transitionend", handle)
      }

      // Listen once per update
      el.addEventListener("transitionend", handle)
    })

    // Store current as previous for next change
    prevDigitsRef.current = currentDigits
    prevLenRef.current = currentDigits.length
  }, [currentDigits, prevDigits])

  // Build the stacked digits 0..9 repeated twice for seamless wrap
  const stack = useMemo(() => Array.from({ length: 20 }, (_, i) => i % 10), [])

  return (
    <div ref={containerRef} className={`inline-flex items-baseline ${className}`}>
      {currentDigits.map((digit, i) => (
        <div key={i} className="relative overflow-hidden" style={{ height: "1em" }}>
          <div
            ref={(el) => {
              if (el) digitRefs.current[i] = el
            }}
            className="flex flex-col leading-none will-change-transform"
            // Initialize position without animation on first render
            style={{ transform: `translateY(-${(prevDigits[i] <= digit ? digit : digit + 10) * 10}%)` }}
          >
            {stack.map((n, idx) => (
              <span key={idx} className="block" style={{ lineHeight: 1 }}>
                {n}
              </span>
            ))}
          </div>
        </div>
      ))}
      {suffix ? <span className="ml-1">{suffix}</span> : null}
    </div>
  )
}