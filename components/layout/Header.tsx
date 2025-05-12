"use client"

import Link from "next/link"
import { Menu, Cpu, X, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useCallback, useMemo, memo } from "react"
import MobileMenu from "@/components/layout/MobileMenu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import HelpDialogMessage from "../header/HelpDialogMessage"

// La lista de secciones como constante para evitar recrearla en cada renderización
const SECTIONS = ["inicio", "servicios", "precios", "blog", "faq", "contacto"]
const SECTION_NAMES = ["Inicio", "Servicios", "Precios", "Blog", "FAQ", "Contacto"]

// Aplicamos memo para evitar renderizaciones innecesarias del Header
export default memo(function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Optimizamos la detección de scroll con useCallback y un sistema de throttling más eficiente
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    
    // Solo actualizamos el estado si hay un cambio significativo para evitar re-renders innecesarios
    if (Math.abs(currentScrollY - scrollY) > 5) {
      setScrollY(currentScrollY)
    }
    
    // Detección de sección activa optimizada
    const scrollPosition = currentScrollY + 100
    
    let foundActiveSection = false
    for (const section of SECTIONS) {
      const element = document.getElementById(section)
      if (element) {
        const { top, bottom } = element.getBoundingClientRect()
        if (top <= 100 && bottom >= 100) {
          if (activeSection !== section) {
            setActiveSection(section)
          }
          foundActiveSection = true
          break
        }
      }
    }
    
    if (!foundActiveSection && currentScrollY <= 100 && activeSection !== "inicio") {
      setActiveSection("inicio")
    }
  }, [scrollY, activeSection])

  // Implementación de throttling más eficiente para el scroll
  useEffect(() => {
    let rafId: number | null = null
    
    const throttledHandleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          handleScroll()
          rafId = null
        })
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    
    // Llamada inicial para configurar el estado
    handleScroll()
    
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [handleScroll])

  // Memorizamos el renderizado de los links para evitar cálculos innecesarios
  const navLinks = useMemo(() => {
    return SECTION_NAMES.map((item, index) => {
      const itemLower = SECTIONS[index]
      const isActive = activeSection === itemLower
      return (
        <Link 
          key={item} 
          href={`#${itemLower}`} 
          className={`text-sm font-medium relative group ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
        >
          {item}
          <span 
            className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200
              ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
          ></span>
        </Link>
      )
    })
  }, [activeSection])

  // Optimizamos la clase de estilo del header para evitar cálculos durante el renderizado
  const headerClassName = useMemo(() => `sticky top-0 z-50 w-full transition-all duration-200 ${
    scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
  }`, [scrollY])

  return (
    <header className={headerClassName}>
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
          {navLinks}
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
            ¡Obtén Soporte Ahora!
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
}) 