"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    text: "Ohanaweb Solutions' development team performed admirably to meet the mutually agreed deadlines. Our project was under strict time constraints, but they completed all work on schedule and delivered a superior quality product that exceeded our expectations. The precision and thoroughness of Ohanaweb Solutions' development team at each stage of the project demonstrated their high level of professionalism.",
    name: "Andrew Che",
    title: "CEO - Morning Geek Technology Pte. Ltd.",
    avatar: "/userOne.png",
  },
  {
    id: 2,
    text: "Ohanaweb Solutions' development team performed admirably to meet the mutually agreed deadlines. Our project was under strict time constraints, but they completed all work on schedule and delivered a superior quality product that exceeded our expectations. The precision and thoroughness of Ohanaweb Solutions' development team at each stage of the project demonstrated their high level of professionalism.",
    name: "Mr. Tomoyuki Miyamoto",
    title: "CEO - Marui Textile Co., Ltd.",
    avatar: "/UserTwo.png",
  },
  {
    id: 3,
    text: "They provide support according to peace of mind. Ohanaweb Solutions' work attitude. If there is an opportunity, choosing Ohanaweb Solutions professionally.",
    name: "Mr. Yasuo Sakai",
    title: "CEO - Native Creation",
    avatar: "/UserThree.png",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
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
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="mb-6 text-4xl md:text-5xl font-bold text-[#00c7f1]">Customer testimonials</h2>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Ohanaweb Japan, we always strive to continually deliver the best products. These efforts are
            rewarded by the kind words, feedback, and reviews from our customers. Here are some of the kind words we
            have received from our customers:
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
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

          {/* Testimonials */}
          <div className="overflow-hidden mx-16">
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

          {/* Dot Indicators */}
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
