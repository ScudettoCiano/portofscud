"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent mb-4">
              Scudetto Ciano Syam
            </h3>
            <p className="text-slate-400 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Information Systems Student at University of Indonesia & Data Analyst Enthusiast passionate about transforming
              data into meaningful insights that drive business decisions.
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
              {[
                { icon: Phone, href: "https://wa.me/6285694375953", label: "WhatsApp", color: "hover:text-green-400" },
                { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=scudetto024@gmail.com", label: "Gmail", color: "hover:text-slate-200" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/scudetto-ciano-syam/", label: "LinkedIn", color: "hover:text-blue-300" },
                { icon: Github, href: "https://github.com/ScudettoCiano", label: "GitHub", color: "hover:text-white" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110 p-2 sm:p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50`}
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="bg-slate-800/50 text-slate-300 border-slate-600 hover:bg-slate-700/50 hover:border-slate-500 hover:text-white transition-all duration-300 hover:scale-105 text-sm"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-slate-400 px-4">
            <div className="flex items-center mb-3 md:mb-0 text-center md:text-left">
              <span>© 2024 Scudetto Ciano Syam. All rights reserved.</span>
            </div>
            <div className="flex items-center">
              <span>Made with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 mx-1" />
              <span>and lots of data</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
