"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Cpu,
  MessageSquare,
  Shield,
  Zap,
  Check,
  ArrowRight,
  Monitor,
  Server,
  Database,
  Lock,
  HelpCircle,
  X,
  Menu,
  ArrowUpRight,
  MousePointer,
  Clock,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from "react"
import Header from "@/components/layout/Header"
import HeroSection from "@/components/home/HeroSection"
import StatsSection from "@/components/home/StatsSection"
import Footer from "@/components/layout/Footer"
import How from "@/components/home/How"
import Services from "@/components/home/Services"
import Testimonials from "@/components/home/Testimonials"
import Pricing from "@/components/home/Pricing"
import Blog from "@/components/home/Blog"
import Faq from "@/components/home/Faq"
import CTA from "@/components/home/CTA"
import Contact from "@/components/home/Contact"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#FCFCFC]">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* How it Works Section */}
        <How />

        {/* Features/Services Section */}
        <Services />
        
        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <Pricing />

        {/* Blog Section */}
        <Blog />

        {/* FAQ Section */}
        <Faq />

        {/* CTA Section */}
        <CTA />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Componente para el menú móvil
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="outline" size="icon" className="border-primary/20" onClick={() => setIsOpen(true)}>
        <span className="sr-only">Abrir menú</span>
        <Menu className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-3/4 max-w-xs bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-1.5 rotate-3">
                  <Cpu className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
                  Asistencia Remota
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-dark hover:bg-primary/5"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Cerrar menú</span>
              </Button>
            </div>

            <nav className="space-y-6">
              {["Inicio", "Servicios", "Precios", "Blog", "FAQ", "Contacto"].map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="block text-base font-medium text-dark hover:text-primary transition-colors duration-300 flex items-center group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {item}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg">
                Obtén Soporte Ahora
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
