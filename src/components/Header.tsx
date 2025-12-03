"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { name: "Layanan", href: "#solution", id: "solution" },
  { name: "Keunggulan", href: "#usp", id: "usp" },
  { name: "Proses", href: "#process", id: "process" },
  { name: "Testimoni", href: "#testimoni-gallery", id: "testimoni-gallery" },
  { name: "Kontak", href: "#cta", id: "cta" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("solution")

  // Smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll spy
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    ) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  // Handle link click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = -70
      const topPosition = target.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top: topPosition, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] font-sans transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Navbar background */}
      <div
        className={`backdrop-blur-xl border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/95 border-green-100"
            : "bg-white/80 border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">

          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            {/* (Optional) Logo image — uncomment jika punya logo*/}
            <div className="relative w-10 h-10">
              <Image
                src="/logo-cvmulia.webp"
                alt="Logo CV Mulia Djaya Utama"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <span
              className={`text-lg md:text-xl font-bold tracking-wide transition-colors ${
                scrolled ? "text-green-800" : "text-green-900"
              }`}
            >
              CV. MULIA DJAYA UTAMA
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={i}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-medium transition-colors group ${
                    scrolled
                      ? isActive
                        ? "text-green-700"
                        : "text-gray-700 hover:text-green-700"
                      : isActive
                      ? "text-green-800"
                      : "text-gray-700 hover:text-green-800"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    } ${scrolled ? "bg-green-600" : "bg-green-500"}`}
                  />
                </a>
              )
            })}
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? "text-green-800" : "text-green-800"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-16 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-green-100 shadow-xl z-[10000]"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={i}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-base font-medium transition-all ${
                      isActive
                        ? "text-green-700 font-semibold"
                        : "text-gray-700 hover:text-green-700"
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
