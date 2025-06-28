"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Calendar, MapPin, Award } from "lucide-react"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Infinite Learning",
      period: "April 2025 - Juni 2025",
      description:
        "Developed and deployed two core ML systems: a tourism recommendation engine utilizing TF-IDF vectorization, cosine similarity, and K-means clustering algorithms, and an intelligent chatbot powered by BERT transformer models. Responsible for end-to-end model development, deployment pipeline, and innovative solution architecture.",
      achievements: [
        "Successfully delivered 2 ML projects within 3-month timeline meeting all stakeholder requirements",
        "Processed and analyzed 400+ tourism data points for in-depth recommendation",
        "Built conversational AI system handling 5+ different tourism inquiry categories with automated responses",
      ],
      technologies: ["Python", "TensorFlow/PyTorch", "BERT/Transformers", "Scikit-learn", "Flask", "Pandas/NumPy", "Google Sheets", "render"],
    },
    {
      title: "Scrum Master & Full Stack Developer",
      company: "PT. Dewanstudio",
      period: "Februari 2025 - Juni 2025",
      description:
        "Led agile development process for 5-person team while developing DewanSpace, a robust freelancer management platform. Facilitated all Scrum events, managed product backlog prioritization, and ensured sprint goal clarity. Developed end-to-end web application including API development, database design, business logic implementation, and responsive UI creation.",
      achievements: [
        "Successfully managed sprint cycles for cross-functional team of 5 developers achieving 95% sprint goal completion rate",
        "Collaborated with team to develop 30+ RESTful API endpoints with 99.5% uptime supporting freelancer management operations",
        "Delivered freelancer management platform with expected 70% increase in client operational efficiency",
      ],
      technologies: ["Java", "Spring Boot", "React.js", "Docker", "Google Cloud Platform", "Postman", "DBeaver", "Vercel"],
    },
    {
      title: "Data Analyst Intern",
      company: "PT. Madhava Persada Group",
      period: "Januari 2025 - Februari 2025",
      description:
        "Conducted thorough data analysis focusing on employee turnover and retention analytics. Responsible for stakeholder requirement gathering, data exploration, preprocessing, and creating interactive dashboards. Developed 2-page interactive dashboard using Google Looker Studio with multiple visualizations and metrics tailored to client specifications.",
      achievements: [
        "Processed and analyzed extensive employee records identifying critical turnover patterns while reducing data inconsistencies by 100%",
        "Built 2-page interactive dashboard featuring 10+ dynamic visualizations for executive stakeholders",
        "Enhanced stakeholder decision-making process through automated reporting and real-time insights",
      ],
      technologies: ["Google Sheets", "Google Looker Studio"],
    },
    {
      title: "Data Scientist Intern",
      company: "ID/X Partners Project Based Internship",
      period: "Feb 2025 - Mar 2025",
      description:
        "Developed detailed machine learning models for credit risk prediction through end-to-end data science pipeline. Conducted thorough data understanding, exploratory data analysis, data preparation, model development, and performance evaluation. Implemented multiple ML algorithms with XGBoost achieving optimal performance for financial risk assessment.",
      achievements: [
        "Built and compared 5+ credit risk prediction model with XGBoost delivering superior 95% F1-score",
        "Earned Certificate of Achievement (highest recognition) for excellent performance in data science internship",
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Google Collab"],
    },
    {
      title: "Project Leader & Data Science Student Bootcamp",
      company: "Digital Skola",
      period: "July 2024 - Oktober 2024",
      description:
        "Led cross-functional team in all-encompassing data science bootcamp program. Coordinated daily Learning Progress Reports (LPR) and weekly presentation deliverables while managing final project development. Developed end-to-end machine learning solution for song popularity prediction with Streamlit deployment, demonstrating leadership and technical excellence.",
      achievements: [
        "Successfully led team of 7 data science students achieving 100% on-time delivery for weekly documents output",
        "Developed thorough song popularity prediction model deployed on Streamlit platform",
        "Achieved 1st place ranking among 32 techies in final bootcamp evaluation demonstrating exceptional performance",
      ],
      technologies: ["Python", "Streamlit", "Google Colab", "Scikit-learn", "Pandas", "Matplotlib", "Canva", "Git"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate cards one by one
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 300)
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
    <section id="experience" className="py-16 sm:py-20 bg-slate-900" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Professional Experience
          </h2>
          <p
            className={`text-slate-400 text-center mb-12 sm:mb-16 text-base sm:text-lg transition-all duration-1000 delay-200 px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            My journey in technology and innovation
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className={`absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-slate-500 to-blue-400 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
              }`}
              style={{ transformOrigin: "top" }}
            ></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full border-2 sm:border-4 border-slate-900 shadow-lg shadow-blue-600/50 transition-all duration-500 ${
                      visibleCards.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    style={{ transitionDelay: `${600 + index * 300}ms` }}
                  ></div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 sm:ml-20 w-full transition-all duration-700 ${
                      visibleCards.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${800 + index * 300}ms` }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10 backdrop-blur-sm hover:scale-105">
                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                            <div className="flex items-center text-blue-400 mb-2">
                              <Building className="h-4 w-4 mr-2" />
                              <span className="font-semibold text-sm sm:text-base">{exp.company}</span>
                            </div>
                            <div className="flex items-center text-slate-400 text-xs sm:text-sm">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {exp.period}
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{exp.description}</p>

                        <div className="mb-4 sm:mb-6">
                          <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Key Achievements:</h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-slate-300 flex items-start text-xs sm:text-sm">
                                <span className="text-blue-400 mr-2 mt-1">▸</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="bg-slate-700/50 text-slate-300 border-slate-600 hover:border-slate-500 hover:scale-105 transition-all duration-200 text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Credential Button for specific experiences */}
                        {exp.company === "PT. Madhava Persada Group" && (
                          <div className="mt-6 pt-4 border-t border-slate-700">
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105"
                              asChild
                            >
                              <a 
                                href="https://drive.google.com/file/d/1MYWoyq-X1GPNWLK9KYCnUTUQ8bgPPNjn/view?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <Award className="h-4 w-4 mr-2" />
                                View Credential
                              </a>
                            </Button>
                          </div>
                        )}

                        {exp.company === "ID/X Partners Project Based Internship" && (
                          <div className="mt-6 pt-4 border-t border-slate-700">
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105"
                              asChild
                            >
                              <a 
                                href="https://drive.google.com/file/d/1FmZpWfGiGOkBXMMSJq5u8zNTieLbZVZ-/view?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <Award className="h-4 w-4 mr-2" />
                                View Credential
                              </a>
                            </Button>
                          </div>
                        )}

                        {exp.company === "Digital Skola" && (
                          <div className="mt-6 pt-4 border-t border-slate-700">
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105"
                              asChild
                            >
                              <a 
                                href="https://drive.google.com/file/d/1EhIEW78MS0XyVTafA-SXbkRom5EAvc1w/view?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <Award className="h-4 w-4 mr-2" />
                                View Credential
                              </a>
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
