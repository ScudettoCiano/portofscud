"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section id="about" className="py-20 bg-slate-800" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-center text-white mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-slate-400 text-center mb-16 text-lg transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Passionate student with a mission to create innovative solutions
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`relative transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-2xl blur-xl"></div>
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="About me"
                className="relative rounded-2xl shadow-2xl w-full border border-slate-700 transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div
              className={`space-y-8 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  As an <span className="text-blue-400 font-semibold">Information Systems</span> student at <span className="text-blue-400 font-semibold">Universitas Indonesia</span>, I have built a solid foundation in <span className="text-blue-400 font-semibold">data analytics</span> and <span className="text-blue-400 font-semibold">data science</span> through various challenging practical experiences. My curiosity naturally drives me to explore beyond classroom learning, constantly seeking opportunities to apply analytical concepts in meaningful ways that create tangible impact for organizations and communities.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  What sets me apart is my ability to see the <span className="text-blue-400 font-semibold">big picture</span> while remaining detail-oriented in execution. I believe that working effectively with data requires not just technical proficiency, but also the ability to understand <span className="text-blue-400 font-semibold">business context</span>, ask the right questions, and communicate findings in compelling ways. With a strong <span className="text-blue-400 font-semibold">growth mindset</span> and deep interest in the intersection of <span className="text-blue-400 font-semibold">technology</span> and <span className="text-blue-400 font-semibold">business</span>, I'm ready to contribute toward creating measurable impact through data-driven insights across various roles in the data field.
                </p>
                <div className="mt-8">
                  <span className="text-white text-base font-normal">
                    <span className="font-semibold">Relevant Courses:</span> Artificial Intelligence & Fundamentals of Data Science, Statistics and Probability, Database Systems, Linear Algebra, Fundamentals of Programming, etc
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
