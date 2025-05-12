"use client"

import { useState, useEffect, memo } from "react"
import Link from "next/link"
import { Menu, Cpu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  activeSection: string
}

// Usar memo para prevenir renderizaciones innecesarias
const MobileMenu = memo(function MobileMenu({ activeSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Optimización: Usar una clase CSS para bloquear scroll
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden', 'fixed', 'inset-x-0')
      document.body.style.top = `-${window.scrollY}px`
    } else if (document.body.classList.contains('overflow-hidden')) {
      const scrollY = document.body.style.top
      document.body.classList.remove('overflow-hidden', 'fixed', 'inset-x-0')
      document.body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [isOpen])

  // Pre-cargar enlaces para evitar cálculos durante la animación
  const menuLinks = ["Inicio", "Servicios", "Precios", "Blog", "FAQ", "Contacto"].map((item) => {
    const itemLower = item.toLowerCase()
    const isActive = activeSection === itemLower
    return (
      <Link
        key={item}
        href={`#${itemLower}`}
        className={`block text-base font-medium transition-colors duration-200 flex items-center group
          ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}`}
        onClick={() => setIsOpen(false)}
      >
        <span className={`h-0.5 bg-primary transition-all duration-200 mr-2
          ${isActive ? 'w-2' : 'w-0 group-hover:w-2'}`}></span>
        {item}
      </Link>
    )
  })

  return (
    <div className="md:hidden">
      <Button 
        variant="outline" 
        size="icon" 
        className="border-primary/20 bg-white/90 z-[60] relative transition-all will-change-transform"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Abrir menú</span>
      </Button>

      {/* El menú siempre está en el DOM pero oculto para mejorar el rendimiento */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-200 will-change-transform ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`fixed right-0 top-0 h-full w-3/4 max-w-xs bg-white p-6 shadow-lg will-change-transform transition-transform duration-200 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
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
              className="text-dark hover:bg-primary/5 -mr-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar menú</span>
            </Button>
          </div>

          <nav className="space-y-6">
            {menuLinks}
          </nav>

          <div className="mt-8">
            <Button 
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg"
              onClick={() => {
                window.open('https://www.remotedesktop.com/hd-app/help', '_blank', 'noopener,noreferrer')
                setIsOpen(false)
              }}
            >
              Obtén Soporte Ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default MobileMenu 