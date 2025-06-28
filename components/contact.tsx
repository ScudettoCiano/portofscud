"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const sectionRef = useRef<HTMLElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mpwrkyvo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "scudetto024@gmail.com",
      description: "Send me an email anytime!",
      color: "from-blue-500 to-blue-600",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=scudetto024@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "085694375953",
      description: "Available for calls and WhatsApp",
      color: "from-slate-500 to-slate-600",
      href: "https://wa.me/6285694375953",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jakarta, Indonesia",
      description: "Open to remote opportunities",
      color: "from-blue-400 to-slate-500",
      href: null,
    },
  ]

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
    <section id="contact" className="py-16 sm:py-20 bg-slate-800 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[900px] h-[200px] sm:h-[350px] bg-gradient-to-r from-blue-700/10 via-cyan-400/15 to-blue-900/10 rounded-full blur-3xl animate-pulse z-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-slate-400 text-center mb-12 sm:mb-16 text-base sm:text-lg transition-all duration-1000 delay-200 px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Ready to collaborate on exciting projects? Let's connect!
          </p>

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div
              className={`lg:col-span-1 space-y-6 sm:space-y-8 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mr-2 sm:mr-3" />
                  Let's Connect
                </h3>
                <p className="text-slate-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, or just have a
                  conversation about technology and innovation. Whether you're a recruiter, potential collaborator, or
                  fellow tech enthusiast, I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-500 hover:shadow-lg hover:shadow-blue-600/10 backdrop-blur-sm hover:scale-105 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${600 + index * 200}ms` }}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start">
                        <div
                          className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${info.color} mr-3 sm:mr-4 flex-shrink-0 hover:scale-110 transition-transform duration-300`}
                        >
                          <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">{info.title}</h4>
                          {info.href ? (
                            <a
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 font-medium mb-1 hover:text-blue-300 transition-colors duration-300 block text-sm sm:text-base"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-blue-400 font-medium mb-1 text-sm sm:text-base">{info.value}</p>
                          )}
                          <p className="text-slate-400 text-xs sm:text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:scale-105 transition-transform duration-500">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl text-white flex items-center">
                    <Send className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mr-2 sm:mr-3" />
                    Send me a message
                  </CardTitle>
                  <p className="text-slate-400 text-sm sm:text-base">Fill out the form below and I'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:border-slate-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:border-slate-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 hover:border-slate-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 resize-none transition-all duration-300 hover:border-slate-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white shadow-lg shadow-blue-600/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                        <p className="text-green-400 text-center">Message sent successfully! I'll get back to you soon.</p>
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 text-center">Failed to send message. Please try again or contact me directly.</p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
