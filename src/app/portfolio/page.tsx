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
      title: "Career Scouting",
      image: "/advance.png",
      url: "https://www.careerscout.co.jp/"
    },
    {
      id: 2,
      title: "Haruchika",
      image: "/haruchika.png",
      url: "https://www.haruchika.co.jp/"
    },
    {
      id: 3,
      title: "Web Interface Design",
      image: "/funai.png",
      url: "https://www.funaisoken.co.jp/"
    },
      {
      id: 4,
      title: "Web Interface Design",
      image: "/nextlevel.png",
      url: "https://nextlevelholdings.co.jp/"
    },
      {
      id: 5,
      title: "Web Interface Design",
      image: "/rewrite.png",
      url: "https://www.rewrite.co.jp/"
    },
      {
      id: 6,
      title: "Web Interface Design",
      image: "/msol.png",
      url: "https://www.msols.com/"
    },
      {
      id: 7,
      title: "Web Interface Design",
      image: "/keyword.png",
      url: "https://keywordmap.jp/"
    },
      {
      id: 8,
      title: "Web Interface Design",
      image: "/freelocation.png",
      url: "https://freelocation.co.jp/"
    },
      {
      id: 9,
      title: "Web Interface Design",
      image: "/recruit.png",
      url: "https://www.recruit-ms.co.jp/"
    },
      {
      id: 10,
      title: "Web Interface Design",
      image: "/famione.png",
      url: "https://famione.com/benefit/"
    },
      {
      id: 11,
      title: "Web Interface Design",
      image: "/pro.png",
      url: "https://pro-d-use.jp/"
    },
  ],
  "Real estate-related": [
    {
      id: 12,
      title: "PoC blockchain app",
      image: "/odakyu.png",
      url: "https://www.odakyu.jp/group/brand/topic/"
    },
    {
      id: 13,
      title: "Digital Wallet App",
      image: "/kafuu.png",
      url: "https://www.kafuu-okinawa.jp/"
    },
    {
      id: 14,
      title: "Crypto Trading Platform",
      image: "/n-story.png",
      url: "https://www.n-story.net/　"
    },
    {
      id: 15,
      title: "Crypto Trading Platform",
      image: "/tema.png",
      url: "https://www.temairazu.com/"
    },
    {
      id: 16,
      title: "Crypto Trading Platform",
      image: "/asahii.png",
      url: "https://www.asahi-housing.co.jp/"
    },
    {
      id: 17,
      title: "Crypto Trading Platform",
      image: "/openhouse.png",
      url: "https://openhouse-group.com/"
    },
    {
      id: 18,
      title: "Crypto Trading Platform",
      image: "/tap.png",
      url: "https://www.tap-ic.co.jp/"
    },
  ],
  "Education-related": [
    {
      id: 19,
      title: "E-commerce Website",
      image: "/andrew.png",
      url: "https://www.andrew.ac.jp"
    },
    {
      id: 20,
      title: "Corporate Website",
      image: "/online.png",
      url: "https://to-z.net/online/"
    },
    {
      id: 21,
      title: "Portfolio Website",
      image: "/school.png",
      url: "https://school.js88.com/"
    },

     {
      id:22,
      title: "Portfolio Website",
      image: "/ohtake.png",
      url: "https://www.ohtake.ac.jp/"
    },
     {
      id: 23,
      title: "Portfolio Website",
      image: "/seisa.png",
      url: "https://seisa.ac.jp/"
    },
     {
      id: 24,
      title: "Portfolio Website",
      image: "/tanaka.png",
      url: "https://tanakasorobanjuku.com/"
    },
     {
      id: 25,
      title: "Portfolio Website",
      image: "/seigaku.png",
      url: "https://seigaku.jp/kase/"
    },
  ],
  "Beauty-related": [
    {
      id: 26,
      title: "Food Delivery App",
      image: "/akiko.png",
      url: "https://e-akiko.com/lp/"
    },
    {
      id: 27,
      title: "Fitness Tracking App",
      image: "/ethree.png",
      url: "https://www.ethree.tokyo/"
    },
    {
      id: 28,
      title: "Social Media App",
      image: "/hanamoyako.png",
      url: "https://topclass-n.net"
    },
    {
      id: 29,
      title: "Social Media App",
      image: "/select.png",
      url: "https://u-select-up.com/"
    },
   
    {
      id: 30,
      title: "Social Media App",
      image: "/noluc.png",
      url: "https://www.noluc.jp/"
    },
    {
      id: 31,
      title: "Social Media App",
      image: "/spa.png",
      url: "https://bio-spa.jp/"
    },
    {
      id: 32,
      title: "Social Media App",
      image: "/cellabo.png",
      url: "https://www.celllabo.jp/"
    },
  ],
  "Medical-related": [
    {
      id: 33,
      title: "Task Management System",
      image: "/futa.png",
      url: "https://futamatagawa-dental.com/"
    },
    {
      id: 34,
      title: "Internal communication system",
      image: "/seed.png",
      url: "https://www.seed-recruit.com/"
    },
    {
      id: 35,
      title: "Project Management Tool",
      image: "/nakayama.png",
      url: "https://nakayama-kyousei.com/"
    },
    {
      id: 36,
      title: "Project Management Tool",
      image: "/fuji.png",
      url: "https://fujioka-dental.jp/"
    },
    {
      id: 37,
      title: "Project Management Tool",
      image: "/marina.png",
      url: "https://www.marina-dc.com/"
    },
  ],
  "Food-related": [
    {
      id: 38,
      title: "CRM System",
      image: "/shok.png",
      url: "https://www.shokubun.co.jp/"
    },
    {
      id: 39,
      title: "Inventory Management",
      image: "/narikoma.png",
      url: "https://www.narikoma-group.co.jp/corp/"
    },
    {
      id: 40,
      title: "Analytics Dashboard",
      image: "/heart.png",
      url: "https://www.heart-bread.com/"
    },
    {
      id: 41,
      title: "Analytics Dashboard",
      image: "/peko.png",
      url: "https://www.fujiya-peko.co.jp"
    },

  ],
  "E-commerce-related": [
    {
      id: 42,
      title: "Machine Learning Platform",
      image: "/craft.png",
      url: "https://marimocraft.co.jp/"
    },
    {
      id: 43,
      title: "AI Chatbot System",
      image: "/rise.png",
      url: "https://www.rise.sc/"
    },
    {
      id: 44,
      title: "Predictive Analytics Tool",
      image: "/franc.png",
      url: "https://francfranc.com/"
    },
  ],
  "Others (Pets, Animation)": [
    {
      id: 45,
      title: "Machine Learning Platform",
      image: "/ripuca.png",
      url: "https://ripuca.co.jp/lp-instagram/"
    },
    {
      id: 46,
      title: "AI Chatbot System",
      image: "/hamao.png",
      url: "https://hamaokamekki.co.jp/"
    },
    {
      id: 47,
      title: "Predictive Analytics Tool",
      image: "/dog.png",
      url: "https://doghuggy.com/"
    },
    {
      id: 48,
      title: "Predictive Analytics Tool",
      image: "/wanpass.png",
      url: "https://wanpass.me/"
    },
    {
      id: 49,
      title: "Predictive Analytics Tool",
      image: "/odakyu.png",
      url: "https://www.odakyu.jp/group/brand/topic/"
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

  const currentProjects = (projects[activeCategory as keyof typeof projects] || []) as { id: number; title: string; image: string; url?: string }[]
  const visibleProjects = currentProjects.slice(currentIndex, currentIndex + 6)

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
          setCurrentIndex(currentIndex - 6)
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
    if (currentIndex + 6 < currentProjects.length) {
      gsap.to(projectsRef.current?.children || [], {
        x: -100,
        opacity: 0,
        duration: 0.1,
        stagger: 0.05,
        onComplete: () => {
          setCurrentIndex(currentIndex + 6)
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
      <div className="max mx-auto relative z-10">
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
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-sm transition-all  duration-300 bg-[#345b95] ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#00c7f1]"
            }`}
          >
            <ChevronLeft size={24} className="text-[#00c7f1]" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex + 6 >= currentProjects.length}
            aria-label="Next projects"
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20  p-3 rounded-sm transition-all duration-300 bg-[#345b95] ${
              currentIndex + 6 >= currentProjects.length ? "opacity-50 cursor-not-allowed" : "hover:bg-[#00c7f1]"
            }`}
          >
            <ChevronRight size={24} className="text-[#00c7f1]" />
          </button>

          <div ref={projectsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-4 sm:mx-8 lg:mx-16">
            {visibleProjects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className=" rounded-sm overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <button
                    type="button"
                    onClick={() => {
                      if (project.url) {
                        window.open(project.url, "_blank", "noopener,noreferrer")
                      }
                    }}
                    disabled={!project.url}
                    className={`mt-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      project.url ? "bg-white/30 text-white/70 hover:bg-[#00c7f1] hover:text-white" : "bg-white/30 text-white/70 cursor-not-allowed"
                    }`}
                    aria-label={`Visit ${project.title} website`}
                  >
                    Visit site
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(currentProjects.length / 6) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const newIndex = index * 6
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
                  Math.floor(currentIndex / 6) === index ? "border-2 border-cyan-400" : "bg-white/30 hover:bg-white/50"
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
