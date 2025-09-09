"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    text: "Ohanaweb Solutions の開発チームは、合意した納期を守るために見事に対応してくれました。プロジェクトは厳しい時間的制約がありましたが、すべての作業を予定通りに完了し、期待を超える高品質な製品を納品してくれました。プロジェクトの各段階における Ohanaweb Solutions の開発チームの正確さと徹底ぶりは、高いプロ意識を示していました。",
    name: "Andrew Che",
    title: "CEO - Morning Geek Technology Pte. Ltd.",
    avatar: "/userOne.png",
  },
  {
    id: 2,
    text: "Ohanaweb Solutions の開発チームは、合意した納期を守るために見事に対応してくれました。プロジェクトは厳しい時間的制約がありましたが、すべての作業を予定通りに完了し、期待を超える高品質な製品を納品してくれました。プロジェクトの各段階における Ohanaweb Solutions の開発チームの正確さと徹底ぶりは、高いプロ意識を示していました。",
    name: "Mr. Tomoyuki Miyamoto",
    title: "CEO - Marui Textile Co., Ltd.",
    avatar: "/userTwo.png",
  },
  {
    id: 3,
    text: "安心感のあるサポートを提供してくれます。Ohanaweb Solutions の仕事に対する姿勢は非常に誠実です。機会があれば、ぜひプロフェッショナルとして Ohanaweb Solutions を選びたいと思います。",
    name: "Mr. Yasuo Sakai",
    title: "CEO - Native Creation",
    avatar: "/userThree.png",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const el = headerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            import("gsap").then(({ gsap }) => {
              gsap.fromTo(
                el,
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
              )
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-10 md:mb-12 px-2">
          <h2 className="mb-4 md:mb-6 text-3xl md:text-5xl font-bold text-[#00c7f1]">お客様の声</h2>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base">
            Ohanaweb Japan は常に最高のプロダクトを提供するために努力しています。日々の取り組みは、お客様からの温かい言葉やフィードバックという形で返ってきます。こちらはその一部のご紹介です。
          </p>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-lg hover:bg-gray-50"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-lg hover:bg-gray-50"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </Button>
          <div className="overflow-hidden mx-2 sm:mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">{testimonial.text}</p>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-cyan-400 text-sm font-medium">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-sm transition-colors ${
                  index === currentIndex ? " border-2 border-cyan-400" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
