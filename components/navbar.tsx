"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "How To" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on route change / resize
  useEffect(() => {
    const close = () => setMobileMenuOpen(false)
    window.addEventListener("resize", close)
    return () => window.removeEventListener("resize", close)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? "bg-black/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo — scales down on small phones */}
          <Link href="/" className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
            <span className="text-[10px] sm:text-sm font-light text-gray-400 tracking-widest uppercase">The</span>
            <span className="text-lg sm:text-2xl font-black text-white tracking-tight">DETAIL</span>
            <svg viewBox="0 0 40 16" className="w-5 sm:w-8 h-3 sm:h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="0,8 8,8 12,2 16,14 20,4 24,12 28,8 40,8" />
            </svg>
            <span className="text-lg sm:text-2xl font-black text-white tracking-tight">CLINIC</span>
          </Link>

          {/* Desktop Navigation — lg breakpoint (1024px+) */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 xl:px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
            <Button asChild variant="outline" className="ml-2 border-white/20 text-white hover:bg-white/5 rounded-full px-4 xl:px-5 text-sm transition-all duration-300">
              <a href="tel:5626328290" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">(562) 632-8290</span>
                <span className="xl:hidden">Call</span>
              </a>
            </Button>
            <Button asChild className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full px-5 xl:px-6 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
              <a href="https://www.rinzapp.com/order/loyalpine" target="_blank" rel="noopener">
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button — visible below lg */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild size="sm" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full px-4 text-xs">
              <a href="https://www.rinzapp.com/order/loyalpine" target="_blank" rel="noopener">
                Book Now
              </a>
            </Button>
            <button
              className="p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Navigation — full screen overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 sm:top-20 z-40 bg-[#0a0a0a] overflow-y-auto animate-fade-in">
          <div className="px-4 sm:px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-4 text-lg text-gray-300 hover:text-cyan-400 transition-colors font-medium rounded-lg hover:bg-white/5 active:bg-white/10 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 space-y-3">
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/5 rounded-full h-12 text-base">
                <a href="tel:5626328290" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  (562) 632-8290
                </a>
              </Button>
              <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full h-12 text-base">
                <a href="https://www.rinzapp.com/order/loyalpine" target="_blank" rel="noopener" className="flex items-center justify-center gap-2">
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
