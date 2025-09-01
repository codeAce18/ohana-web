"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const categories = [
  "UI/UX Design",
  "Blockchain",
  "Website creation",
  "Mobile App Development",
  "Web App",
  "System Development",
]

const projects = {
  "UI/UX Design": [
    {
      id: 1,
      title: "Brand Identity Design",
      image: "/brand-identity-design-mockups-and-logos.png",
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      image: "/mobile-app-mockups-with-orange-branding-blockchain.png",
    },
    {
      id: 3,
      title: "Web Interface Design",
      image: "/clean-blue-and-white-internal-communication-interf.png",
    },
  ],
  Blockchain: [
    {
      id: 4,
      title: "PoC blockchain app",
      image: "/mobile-app-mockups-with-orange-branding-blockchain.png",
    },
    {
      id: 5,
      title: "Digital Wallet App",
      image: "/purple-themed-digital-wallet-app-on-laptop-screens.png",
    },
    {
      id: 6,
      title: "Crypto Trading Platform",
      image: "/task-management-web-application-interface.png",
    },
  ],
  "Website creation": [
    {
      id: 7,
      title: "E-commerce Website",
      image: "/modern-ecommerce-website.png",
    },
    {
      id: 8,
      title: "Corporate Website",
      image: "/clean-blue-and-white-internal-communication-interf.png",
    },
    {
      id: 9,
      title: "Portfolio Website",
      image: "/brand-identity-design-mockups-and-logos.png",
    },
  ],
  "Mobile App Development": [
    {
      id: 10,
      title: "Food Delivery App",
      image: "/mobile-app-mockups-with-orange-branding-blockchain.png",
    },
    {
      id: 11,
      title: "Fitness Tracking App",
      image: "/task-management-web-application-interface.png",
    },
    {
      id: 12,
      title: "Social Media App",
      image: "/purple-themed-digital-wallet-app-on-laptop-screens.png",
    },
  ],
  "Web App": [
    {
      id: 13,
      title: "Task Management System",
      image: "/task-management-web-application-interface.png",
    },
    {
      id: 14,
      title: "Internal communication system",
      image: "/clean-blue-and-white-internal-communication-interf.png",
    },
    {
      id: 15,
      title: "Project Management Tool",
      image: "/modern-ecommerce-website.png",
    },
  ],
  "System Development": [
    {
      id: 16,
      title: "CRM System",
      image: "/clean-blue-and-white-internal-communication-interf.png",
    },
    {
      id: 17,
      title: "Inventory Management",
      image: "/task-management-web-application-interface.png",
    },
    {
      id: 18,
      title: "Analytics Dashboard",
      image: "/purple-themed-digital-wallet-app-on-laptop-screens.png",
    },
  ],
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("UI/UX Design")
  const [currentIndex, setCurrentIndex] = useState(0)
  const projectsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentProjects = projects[activeCategory as keyof typeof projects]
  const visibleProjects = currentProjects.slice(currentIndex, currentIndex + 3)

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return

    // Slide out current projects
    gsap.to(projectsRef.current?.children || [], {
      x: -100,
      opacity: 0,
      duration: 0.2,
      stagger: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setActiveCategory(category)
        setCurrentIndex(0)

        // Slide in new projects
        gsap.fromTo(
          projectsRef.current?.children || [],
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.2,
            stagger: 0.4,
            ease: "power2.out",
          },
        )
      },
    })
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      gsap.to(projectsRef.current?.children || [], {
        x: 100,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        onComplete: () => {
          setCurrentIndex(currentIndex - 3)
          gsap.fromTo(
            projectsRef.current?.children || [],
            { x: -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.2,
              stagger: 0.2,
              ease: "power2.out",
            },
          )
        },
      })
    }
  }

  const handleNext = () => {
    if (currentIndex + 3 < currentProjects.length) {
      gsap.to(projectsRef.current?.children || [], {
        x: -100,
        opacity: 0,
        duration: 0.1,
        stagger: 0.05,
        onComplete: () => {
          setCurrentIndex(currentIndex + 3)
          gsap.fromTo(
            projectsRef.current?.children || [],
            { x: 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.1,
              stagger: 0.2,
              ease: "power2.out",
            },
          )
        },
      })
    }
  }

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" })

    gsap.fromTo(
      projectsRef.current?.children || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.1,
        delay: 0.2,
        ease: "power2.out",
      },
    )
  }, [])

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
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0  z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-5xl font-bold text-white text-center mb-16">Our Portfolio</h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-400 text-blue-900"
                  : "bg-blue-700/50 text-white hover:bg-blue-600/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid with Navigation */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
              currentIndex === 0
                ? "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex + 3 >= currentProjects.length}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
              currentIndex + 3 >= currentProjects.length
                ? "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Projects Grid */}
          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(currentProjects.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const newIndex = index * 3
                  if (newIndex !== currentIndex) {
                    gsap.to(projectsRef.current?.children || [], {
                      x: newIndex > currentIndex ? -100 : 100,
                      opacity: 0,
                      duration: 0.3,
                      stagger: 0.05,
                      onComplete: () => {
                        setCurrentIndex(newIndex)
                        gsap.fromTo(
                          projectsRef.current?.children || [],
                          { x: newIndex > currentIndex ? 100 : -100, opacity: 0 },
                          {
                            x: 0,
                            opacity: 1,
                            duration: 0.4,
                            stagger: 0.05,
                            ease: "power2.out",
                          },
                        )
                      },
                    })
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 3) === index ? "bg-cyan-400" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
