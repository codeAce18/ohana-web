"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
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
      image: "/advance.png",
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      image: "/haruchika.png",
    },
    {
      id: 3,
      title: "Web Interface Design",
      image: "/funai.png",
    },
      {
      id: 4,
      title: "Web Interface Design",
      image: "/nextlevel.png",
    },
      {
      id: 5,
      title: "Web Interface Design",
      image: "/rewrite.png",
    },
      {
      id: 6,
      title: "Web Interface Design",
      image: "/msol.png",
    },
      {
      id: 7,
      title: "Web Interface Design",
      image: "/keyword.png",
    },
      {
      id: 8,
      title: "Web Interface Design",
      image: "/freelocation.png",
    },
      {
      id: 9,
      title: "Web Interface Design",
      image: "/recruit.png",
    },
      {
      id: 10,
      title: "Web Interface Design",
      image: "/famione.png",
    },
      {
      id: 11,
      title: "Web Interface Design",
      image: "/pro.png",
    },
  ],
  "Real estate-related": [
    {
      id: 12,
      title: "PoC blockchain app",
      image: "/odakyu.png",
    },
    {
      id: 13,
      title: "Digital Wallet App",
      image: "/kafuu.png",
    },
    {
      id: 14,
      title: "Crypto Trading Platform",
      image: "/n-story.png",
    },
    {
      id: 15,
      title: "Crypto Trading Platform",
      image: "/tema.png",
    },
    {
      id: 16,
      title: "Crypto Trading Platform",
      image: "/asahii.png",
    },
    {
      id: 17,
      title: "Crypto Trading Platform",
      image: "/openhouse.png",
    },
    {
      id: 18,
      title: "Crypto Trading Platform",
      image: "/tap.png",
    },
  ],
  "Education-related": [
    {
      id: 19,
      title: "E-commerce Website",
      image: "/andrew.png",
    },
    {
      id: 20,
      title: "Corporate Website",
      image: "/online.png",
    },
    {
      id: 21,
      title: "Portfolio Website",
      image: "/school.png",
    },

     {
      id:22,
      title: "Portfolio Website",
      image: "/ohtake.png",
    },
     {
      id: 23,
      title: "Portfolio Website",
      image: "/seisa.png",
    },
     {
      id: 24,
      title: "Portfolio Website",
      image: "/tanaka.png",
    },
     {
      id: 25,
      title: "Portfolio Website",
      image: "/seigaku.png",
    },
  ],
  "Beauty-related": [
    {
      id: 26,
      title: "Food Delivery App",
      image: "/akiko.png",
    },
    {
      id: 27,
      title: "Fitness Tracking App",
      image: "/ethree.png",
    },
    {
      id: 28,
      title: "Social Media App",
      image: "/hanamoyako.png",
    },
    {
      id: 29,
      title: "Social Media App",
      image: "/select.png",
    },
   
    {
      id: 30,
      title: "Social Media App",
      image: "/noluc.png",
    },
    {
      id: 31,
      title: "Social Media App",
      image: "/spa.png",
    },
    {
      id: 32,
      title: "Social Media App",
      image: "/cellabo.png",
    },
  ],
  "Medical-related": [
    {
      id: 33,
      title: "Task Management System",
      image: "/futa.png",
    },
    {
      id: 34,
      title: "Internal communication system",
      image: "/seed.png",
    },
    {
      id: 35,
      title: "Project Management Tool",
      image: "/nakayama.png",
    },
    {
      id: 36,
      title: "Project Management Tool",
      image: "/fuji.png",
    },
    {
      id: 37,
      title: "Project Management Tool",
      image: "/marina.png",
    },
  ],
  "Food-related": [
    {
      id: 38,
      title: "CRM System",
      image: "/shok.png",
    },
    {
      id: 39,
      title: "Inventory Management",
      image: "/narikoma.png",
    },
    {
      id: 40,
      title: "Analytics Dashboard",
      image: "/heart.png",
    },
    {
      id: 41,
      title: "Analytics Dashboard",
      image: "/peko.png",
    },

  ],
  "E-commerce-related": [
    {
      id: 42,
      title: "Machine Learning Platform",
      image: "/craft.png",
    },
    {
      id: 43,
      title: "AI Chatbot System",
      image: "/rise.png",
    },
    {
      id: 44,
      title: "Predictive Analytics Tool",
      image: "/franc.png",
    },
  ],
  "Others (Pets, Animation)": [
    {
      id: 45,
      title: "Machine Learning Platform",
      image: "/ripuca.png",
    },
    {
      id: 46,
      title: "AI Chatbot System",
      image: "/hamao.png",
    },
    {
      id: 47,
      title: "Predictive Analytics Tool",
      image: "/dog.png",
    },
    {
      id: 48,
      title: "Predictive Analytics Tool",
      image: "/wanpass.png",
    },
    {
      id: 49,
      title: "Predictive Analytics Tool",
      image: "/odakyu.png",
    },
  ],
}

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [categoryStartIndex, setCategoryStartIndex] = useState(0)
  const projectsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

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
    // Fade in header on scroll into view
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        },
      )
    }

    // Animate project cards when the grid is in view
    gsap.fromTo(
      projectsRef.current?.children || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: projectsRef.current, start: "top 85%", toggleActions: "play none none reverse" },
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
        <h2 ref={headerRef} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10 sm:mb-16">Our Portfolio</h2>
    <div className="flex items-center justify-center mb-6 sm:mb-8">
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
          {/* Carousel navigation buttons */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous projects"
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-sm transition-all duration-300 bg-[#345b95] ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#00c7f1]"
            }`}
          >
            <ChevronLeft size={24} className="text-[#00c7f1]" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex + 3 >= currentProjects.length}
            aria-label="Next projects"
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-sm transition-all duration-300 bg-[#345b95] ${
              currentIndex + 3 >= currentProjects.length ? "opacity-50 cursor-not-allowed" : "hover:bg-[#00c7f1]"
            }`}
          >
            <ChevronRight size={24} className="text-[#00c7f1]" />
          </button>

          <div ref={projectsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-4 sm:mx-8 lg:mx-16">
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

          {/* Pagination dots */}
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
                className={`w-3 h-3 rounded-sm transition-all duration-300 ${
                  Math.floor(currentIndex / 3) === index ? "border-2 border-cyan-400" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
