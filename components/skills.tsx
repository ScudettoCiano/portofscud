"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleTechs, setVisibleTechs] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const technologies = [
    { name: "Python", logo: "/logo/python.png" },
    { name: "React", logo: "/logo/react.png" },
    { name: "FastAPI", logo: "/logo/fastapi.png" },
    { name: "SQL", logo: "/logo/sql.svg" },
    { name: "MySQL", logo: "/logo/mysql.svg" },
    { name: "PostgreSQL", logo: "/logo/postgresql.svg" },
    { name: "Google Looker Studio", logo: "/logo/lookerstudio.svg" },
    { name: "Tableau", logo: "/logo/tableau.svg" },
    { name: "Streamlit", logo: "/logo/streamlit.svg" },
    { name: "Excel", logo: "/logo/excel.svg" },
    { name: "Pandas", logo: "/logo/pandas.svg" },
    { name: "NumPy", logo: "/logo/numpy.svg" },
    { name: "Scikit-learn", logo: "/logo/scikitlearn.svg" },
    { name: "TensorFlow", logo: "/logo/tensorflow.svg" },
    { name: "Java", logo: "/logo/java.svg" },
    { name: "Git", logo: "/logo/git.svg" },
    { name: "Docker", logo: "/logo/docker.svg" },
    { name: "VS Code", logo: "/logo/vscode.svg" },
    { name: "Jupyter", logo: "/logo/jupyter.svg" },
    { name: "Google Analytics", logo: "/logo/googleanalytics.svg" },
    { name: "Matplotlib", logo: "/logo/matplotlib.svg" },
    { name: "Figma", logo: "/logo/figma.svg" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate tech cards in waves
          technologies.forEach((_, index) => {
            setTimeout(
              () => {
                setVisibleTechs((prev) => [...prev, index])
              },
              Math.floor(index / 8) * 200 + (index % 8) * 50,
            )
          })
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="py-16 sm:py-20 bg-slate-800 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background blob */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] sm:w-[900px] h-[200px] sm:h-[350px] bg-gradient-to-r from-blue-700/30 via-cyan-400/20 to-blue-900/30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Technologies & Tools
          </h2>
          <p
            className={`text-slate-400 text-center mb-12 sm:mb-16 text-base sm:text-lg transition-all duration-1000 delay-200 px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            The tech stack I use to build solutions and create value
          </p>

          {/* Marquee/Infinite scroll area */}
          <div className="overflow-hidden w-full relative" style={{paddingBottom: '20px'}}>
            <div
              className="marquee-row flex gap-4 sm:gap-6"
              style={{
                animation: 'marqueeX 48s linear infinite',
                height: '90px sm:110px',
              }}
              onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
              onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
            >
              {[...technologies, ...technologies].map((tech, techIndex) => (
                <Card
                  key={tech.name + techIndex}
                  className={
                    `bg-slate-700/50 border border-slate-600 transition-all duration-500 shadow-xl shadow-blue-600/20 backdrop-blur-sm group cursor-pointer min-w-[100px] sm:min-w-[120px] animate-float-on-hover`
                  }
                  style={{borderWidth: '2px'}}
                >
                  <CardContent className="p-3 sm:p-4 flex flex-col items-center justify-center h-20 sm:h-24">
                    <span className="text-slate-300 font-medium text-xs text-center group-hover:text-white transition-colors duration-300 leading-tight">
                      {tech.name}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Add float animation for hover */}
      <style jsx global>{`
        .animate-float-on-hover:hover {
          animation: floatY 1.2s ease-in-out infinite alternate;
        }
        @keyframes floatY {
          from { transform: translateY(0); }
          to { transform: translateY(-12px); }
        }
        @keyframes marqueeX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-row {
          width: max-content;
        }
        @media (max-width: 640px) {
          .marquee-row {
            animation-duration: 30s !important;
          }
        }
      `}</style>
    </section>
  )
}
