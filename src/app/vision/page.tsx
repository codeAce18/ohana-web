"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Heart, Users, Lightbulb } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function VisionPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)
  const goalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.children || [],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
      )
      gsap.fromTo(
        principlesRef.current?.querySelectorAll(".principle-card") || [],
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: principlesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
      gsap.fromTo(
        goalRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: goalRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
      gsap.to(".floating-element", {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <section className="relative py-20 px-4 text-center bg-[#134a8b]/90 lg:bg-transparent">

        <div ref={heroRef} className="max-w-4xl mx-auto">
          <div className="">
            <span className="inline-block rounded-full bg-[#00c7f1] px-4 py-2 text-sm font-bold text-white mb-2">OHANA-WEB ビジョン</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#00c7f1] mb-6 text-balance">
            誰にでも人に優しいウェブを。
          </h1>

          <p className="text-xl text-slate-100 lg:text-slate-600 max-w-3xl mx-auto leading-relaxed text-pretty">
            ハワイ語で「ohana = 家族」という意味のように、私たちは一人ひとりのクライアントに寄り添う安心できる存在であり続けたいと考えています。
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div ref={principlesRef} className="grid md:grid-cols-3 gap-8">

            <div className="principle-card bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">親しみやすさ</h3>
              <p className="text-slate-700 leading-relaxed">
                専門用語はできるだけ避け、誰にでも分かりやすく説明することを心がけています。
              </p>
            </div>

            <div className="principle-card bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">信頼と安心</h3>
              <p className="text-slate-700 leading-relaxed">
                納品して終わりではなく、長期的なパートナーとしてサポートを続けます。
              </p>
            </div>

            <div className="principle-card bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">人に優しいデザイン</h3>
              <p className="text-slate-700 leading-relaxed">
                ユーザーの視点を第一に考え、シンプルで分かりやすく、使いやすいウェブサイトを制作します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center bg-white">
        <div ref={goalRef} className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 sm:p-12 border border-blue-100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">私たちの目標はシンプルです:</h2>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-[#00c7f1] mb-6 md:mb-8 text-balance">
              「ウェブ開発を通じて、日常に温もりと安心を届けること。」
            </blockquote>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
              OHANA-WEB は、人々の生活に自然に溶け込む優しいウェブ体験をこれからも提供し続けます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-blue-600" />
            <div className="w-12 h-0.5 bg-blue-600" />
          </div>
          <p className="text-slate-600 italic">ひとつひとつのウェブサイトで、つながりを生み出す。</p>
        </div>
      </section>
    </div>
  )
}
