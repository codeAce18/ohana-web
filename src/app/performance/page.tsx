"use client"

import { useEffect, useRef } from "react"
import { Monitor, Smartphone, Zap } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function PerformancePage() {
  const containerRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const rowsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power2.out" },
      )

      const rows = rowsRef.current?.querySelectorAll(".perf-row") || []
      gsap.fromTo(
        rows,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rowsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-24 bg-cover "
      style={{ backgroundImage: "url('/S5.jpg')" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-blue-200 text-sm font-medium mb-2">パフォーマンス比較</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">従来と新しいものを比較</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            消費者として、私たちは今やモバイルデバイスでの超高速インターネット速度、直感的な検索結果、
            そして手間の少ない体験を求めています。ここでは従来の構築とOhanaweb Digitalの違いを見てみましょう。
          </p>
        </div>

        <div ref={rowsRef} className="space-y-16 md:space-y-28">
          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Monitor className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">従来のウェブサイト</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px]">
                    WordPressや複数のトラッキングインストールを用いた従来のHTML構築
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-white/60 font-medium text-lg">対</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Monitor className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Ohanaweb Digital</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px] md:ml-auto">
                    ページ速度4秒未満の超高速読み込み
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">ユーザー応答性</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px]">
                    ページはパーソナライズされたコンテンツを提供しますが、各操作のたびにページを再読み込みする必要があります
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-white/60 font-medium text-lg">対</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Ohanaweb Digitalの応答性</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px] md:ml-auto">
                    サーフィンや操作中にページが動的に新しいコンテンツを読み込みます
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Zap className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">ネイティブ体験</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px]">
                    従来の構築はネイティブ体験を模倣しようとしますが、一般的に失敗します
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-white/60 font-medium text-lg">対</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex-shrink-0">
                  <Zap className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Ohanaweb Digitalの体験</h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-[374px] md:ml-auto">
                    私たちのウェブサイトはデスクトップとモバイルの両方でネイティブアプリのように感じられます
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
