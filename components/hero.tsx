"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Eye, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const handleViewWork = () => {
    const element = document.querySelector("#experience")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv-scudetto-ciano.pdf" // Pastikan file ini ada di public/
    link.download = "Scudetto-Ciano-Syam-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Typewriter animation for subtitle
  const typewriterTexts = [
    "Empowering ideas with technology.",
    "Data-driven. Creative. Always learning.",
    "Let's build something great together!"
  ];
  const [typeIndex, setTypeIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    const currentText = typewriterTexts[typeIndex];
    if (!isDeleting && displayed.length < currentText.length) {
      typingTimeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length + 1));
      }, 40);
    } else if (isDeleting && displayed.length > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length - 1));
      }, 20);
    } else if (!isDeleting && displayed.length === currentText.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTypeIndex((prev) => (prev + 1) % typewriterTexts.length);
    }
    return () => clearTimeout(typingTimeout);
  }, [displayed, isDeleting, typeIndex, typewriterTexts]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden pt-20"
    >
      {/* Subtle background gradient and blurred blob */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black opacity-95"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/30 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up relative z-10">
            Selamat datang di <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Scudetto Ciano Syam</span> Portfolio
          </h1>

          <div className="text-xl sm:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 min-h-[56px]">
            <span className="border-r-2 border-blue-400 pr-1 animate-pulse inline-block">{displayed}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-400">
            <Button
              size="lg"
              onClick={handleViewWork}
              className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white shadow-lg shadow-blue-600/25 transition-all duration-300 transform hover:scale-105"
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-slate-100 to-white hover:from-white hover:to-slate-100 text-slate-800 border-slate-300 hover:border-white shadow-lg shadow-slate-400/25 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-8 animate-fade-in-up delay-600">
            {[
              { icon: Phone, href: "https://wa.me/6285694375953", color: "hover:text-green-400", label: "WhatsApp" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=scudetto024@gmail.com", color: "hover:text-slate-200", label: "Gmail" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/scudetto-ciano-syam/", color: "hover:text-blue-300", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/ScudettoCiano", color: "hover:text-white", label: "GitHub" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
              >
                {social.icon && <social.icon className="h-7 w-7" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
