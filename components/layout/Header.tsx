"use client"

import Link from "next/link"
import { Menu, Cpu, X, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import MobileMenu from "@/components/layout/MobileMenu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import HelpDialogMessage from "../header/HelpDialogMessage"

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Detectar sección activa
      const sections = ["inicio", "servicios", "precios", "blog", "faq", "contacto"]
      const scrollPosition = window.scrollY + 100 // Offset para mejor detección

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= 100 && bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrollY > 50 ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-1.5 md:p-2 rotate-3 hover:rotate-6 transition-all duration-300">
            <Cpu className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
              Asistencia Remota
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground">by Digital Strong Locking S.A.</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {["Inicio", "Servicios", "Precios", "Blog", "FAQ", "Contacto"].map((item) => {
            const itemLower = item.toLowerCase()
            const isActive = activeSection === itemLower
            return (
              <Link 
                key={item} 
                href={`#${itemLower}`} 
                className={`text-sm font-medium relative group ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              >
                {item}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                ></span>
              </Link>
            )
          })}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="bg-white/80 hover:bg-white text-primary border-primary/20"
            onClick={() => setIsHelpModalOpen(true)}
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            Ayuda
          </Button>

          <Button
            size="sm"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full"
            onClick={() => {
              window.open('https://www.remotedesktop.com/hd-app/help', '_blank', 'noopener,noreferrer')
            }}
          >
            Obtén Soporte Ahora
          </Button>
        </div>

        <HelpDialogMessage 
          isOpen={isHelpModalOpen}
          onOpenChange={setIsHelpModalOpen}
        />

        <MobileMenu activeSection={activeSection} />
      </div>
    </header>
  )
} 