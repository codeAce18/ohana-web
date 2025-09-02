"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const categories = [
  "Corporate-related",
  "Real estate-related",
  "Education-related",
  "Beauty-related",
  "Medical-related",
  "Food-related",
  "E-commerce-related",
  "Others (Pets, Animation)"
]

const projects = {
  "Corporate-related": [
    {
      id: 1,
      title: "Brand Identity Design",
      image: "/one.png",
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      image: "/two.png",
    },
    {
      id: 3,
      title: "Web Interface Design",
      image: "/three.png",
    },
  ],
  "Real estate-related": [
    {
      id: 4,
      title: "PoC blockchain app",
      image: "/three.png",
    },
    {
      id: 5,
      title: "Digital Wallet App",
      image: "/two.png",
    },
    {
      id: 6,
      title: "Crypto Trading Platform",
      image: "/one.png",
    },
  ],
  "Education-related": [
    {
      id: 7,
      title: "E-commerce Website",
      image: "/two.png",
    },
    {
      id: 8,
      title: "Corporate Website",
      image: "/three.png",
    },
    {
      id: 9,
      title: "Portfolio Website",
      image: "/one.png",
    },
  ],
  "Beauty-related": [
    {
      id: 10,
      title: "Food Delivery App",
      image: "/three.png",
    },
    {
      id: 11,
      title: "Fitness Tracking App",
      image: "/one.png",
    },
    {
      id: 12,
      title: "Social Media App",
      image: "/three.png",
    },
  ],
  "Medical-related": [
    {
      id: 13,
      title: "Task Management System",
      image: "/two.png",
    },
    {
      id: 14,
      title: "Internal communication system",
      image: "/three.png",
    },
    {
      id: 15,
      title: "Project Management Tool",
      image: "/two.png",
    },
  ],
  "Food-related": [
    {
      id: 16,
      title: "CRM System",
      image: "/one.png",
    },
    {
      id: 17,
      title: "Inventory Management",
      image: "/two.png",
    },
    {
      id: 18,
      title: "Analytics Dashboard",
      image: "/three.png",
    },
  ],
  "E-commerce-related": [
    {
      id: 19,
      title: "Machine Learning Platform",
      image: "/two.png",
    },
    {
      id: 20,
      title: "AI Chatbot System",
      image: "/three.png",
    },
    {
      id: 21,
      title: "Predictive Analytics Tool",
      image: "/three.png",
    },
  ],
  "Others (Pets, Animation)": [
    {
      id: 19,
      title: "Machine Learning Platform",
      image: "/two.png",
    },
    {
      id: 20,
      title: "AI Chatbot System",
      image: "/three.png",
    },
    {
      id: 21,
      title: "Predictive Analytics Tool",
      image: "/three.png",
    },
  ],
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [categoryStartIndex, setCategoryStartIndex] = useState(0)
  const projectsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)

  const categoriesPerView = 6
  const visibleCategories = categories.slice(categoryStartIndex, categoryStartIndex + categoriesPerView)

  const currentProjects = (projects[activeCategory as keyof typeof projects] || []) as { id: number; title: string; image: string }[]
  const visibleProjects = currentProjects.slice(currentIndex, currentIndex + 3)

  const handleCategoryPrevious = () => {
    if (categoryStartIndex > 0) {
      gsap.to(categoriesRef.current?.children || [], {
        x: 50,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        onComplete: () => {
          setCategoryStartIndex(categoryStartIndex - 1)
          gsap.fromTo(
            categoriesRef.current?.children || [],
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.2,
              stagger: 0.05,
              ease: "power2.out",
            }
          )
        },
      })
    }
  }

  const handleCategoryNext = () => {
    if (categoryStartIndex + categoriesPerView < categories.length) {
      gsap.to(categoriesRef.current?.children || [], {
        x: -50,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        onComplete: () => {
          setCategoryStartIndex(categoryStartIndex + 1)
          gsap.fromTo(
            categoriesRef.current?.children || [],
            { x: 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.2,
              stagger: 0.05,
              ease: "power2.out",
            }
          )
        },
      })
    }
  }

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
      className="min-h-[70vh] relative py-20 px-4"
      ref={containerRef}
      style={{
        backgroundImage: "url('/S5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0  z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-white text-center mb-16">Our Portfolio</h2>
    <div className="flex items-center justify-center mb-8">
          <button
            onClick={handleCategoryPrevious}
            disabled={categoryStartIndex === 0}
            className={`px-4 py-10 rounded-sm mr-1 transition-all duration-300 bg-[#345b95] ${
              categoryStartIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#00c7f1]"
            }`}
          >
            <ChevronLeft size={24} className="text-[#00c7f1]" />
          </button>
          <div ref={categoriesRef} className="flex bg-blue-700/30 rounded-sm overflow-hidden backdrop-blur-sm border border-white/20">
            {visibleCategories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-8 py-10 font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-[#00c7f1] text-white"
                    : "text-white hover:bg-[#00c7f1] bg-[#345b95]"
                } ${index !== visibleCategories.length - 1 ? "border-r border-[#013878]" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
          <button
            onClick={handleCategoryNext}
            disabled={categoryStartIndex + categoriesPerView >= categories.length}
            className={`px-4 py-10 rounded-sm ml-1 transition-all duration-300 bg-[#345b95] ${
              categoryStartIndex + categoriesPerView >= categories.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronRight size={24} className="text-[#00c7f1]" />
          </button>
        </div>

        <div className="relative">
          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className=" rounded-sm overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex justify-center mt-8 gap-2">
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
          </div> */}
        </div>
      </div>
    </section>
  )
}
