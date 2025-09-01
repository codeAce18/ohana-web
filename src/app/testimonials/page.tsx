"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Andrew Che",
    position: "CEO",
    company: "Morning Geek Technology Pte, Ltd.",
    content: "Ohana's development team performed admirably to meet the mutually agreed deadlines. Our project was under strict time constraints, but they completed all work on schedule and delivered a superior quality product that exceeded our expectations. The precision and thoroughness of Ohana's development team at each stage of the project demonstrated their high level of professionalism.",
    rating: 5,
    avatar: "/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Mr. Tomoyuki Miyamoto",
    position: "CEO",
    company: "Marui Textile Co., Ltd.",
    content: "Ohana's development team performed admirably to meet the mutually agreed deadlines. Our project was under strict time constraints, but they completed all work on schedule and delivered a superior quality product that exceeded our expectations. The precision and thoroughness of Ohana's development team at each stage of the project demonstrated their high level of professionalism.",
    rating: 5,
    avatar: "/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Mr. Yasuo Sakai",
    position: "CEO",
    company: "Native Creation Inc.",
    content: "They provide support according to the situation, so we can build a partnership with peace of mind. Ohana has met my expectations with a very professional work attitude. If there is an opportunity in the future, I would have no hesitation in choosing Ohana and continuing to work with them.",
    rating: 5,
    avatar: "/testimonial-3.jpg"
  },
  {
    id: 4,
    name: "Mr. Mikiharu Matsuura",
    position: "Director",
    company: "Nippon Express Systems Co., Ltd.",
    content: "Ohana has been working with us on system development since 2015. They have provided us with generous support in the area of development technology, an area in which we have little development experience, and have worked with us on the project. They have also provided on-site development for a long period of time, and have responded flexibly to changes in the development situation. We feel reassured by the fact that they also place great importance on quality.",
    rating: 5,
    avatar: "/testimonial-4.jpg"
  },
  {
    id: 5,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechFlow Solutions",
    content: "Working with Ohana has been an exceptional experience. Their team's expertise in modern web technologies and their commitment to delivering high-quality solutions on time has made them our go-to development partner. The communication throughout the project was seamless and professional.",
    rating: 5,
    avatar: "/testimonial-5.jpg"
  },
  {
    id: 6,
    name: "David Chen",
    position: "Product Manager",
    company: "InnovateLab Inc.",
    content: "Ohana's attention to detail and innovative approach to problem-solving impressed us from day one. They not only delivered what we asked for but also provided valuable insights that improved our overall product strategy. Their post-launch support has been outstanding.",
    rating: 5,
    avatar: "/testimonial-6.jpg"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  const handleNext = () => {
    if (currentIndex + itemsPerPage < testimonials.length) {
      animateTransition(() => setCurrentIndex(currentIndex + itemsPerPage))
    } else {
      animateTransition(() => setCurrentIndex(0))
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      animateTransition(() => setCurrentIndex(currentIndex - itemsPerPage))
    } else {
      animateTransition(() => setCurrentIndex(testimonials.length - itemsPerPage))
    }
  }

  const animateTransition = (callback: () => void) => {
    gsap.to(testimonialsRef.current?.children || [], {
      opacity: 0,
      y: 30,
      duration: 0.3,
      stagger: 0.1,
      onComplete: () => {
        callback()
        gsap.fromTo(
          testimonialsRef.current?.children || [],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out"
          }
        )
      }
    })
  }

  const goToPage = (pageIndex: number) => {
    const newIndex = pageIndex * itemsPerPage
    if (newIndex !== currentIndex) {
      animateTransition(() => setCurrentIndex(newIndex))
    }
  }

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )

    gsap.fromTo(
      testimonialsRef.current?.children || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out"
      }
    )
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  return (
    <section
      className="min-h-screen relative py-20 px-4"
      ref={containerRef}
      style={{
        backgroundImage: "url('/S5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Customer Testimonials</h1>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            At Ohana, we always strive to continually deliver the best products. These efforts are rewarded by the kind words, feedback, and reviews from our customers. Here are some of the kind words we have received from our customers:
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-12">
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? "bg-cyan-400 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 border border-white/20"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-cyan-400" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-200 text-center mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-cyan-400 to-blue-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-cyan-400 font-medium mb-1">
                  {testimonial.position}
                </p>
                <p className="text-gray-300 text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-200 mb-6">
              Let us help you achieve your goals with our professional development services.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center py-3 px-8 rounded-lg text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}