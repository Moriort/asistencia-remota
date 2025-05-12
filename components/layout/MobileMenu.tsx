"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Cpu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  activeSection: string
}

export default function MobileMenu({ activeSection }: MobileMenuProps) {
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
              {["Inicio", "Servicios", "Precios", "Blog", "FAQ", "Contacto"].map((item) => {
                const itemLower = item.toLowerCase()
                const isActive = activeSection === itemLower
                return (
                  <Link
                    key={item}
                    href={`#${itemLower}`}
                    className={`block text-base font-medium transition-colors duration-300 flex items-center group
                      ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={`h-0.5 bg-primary transition-all duration-300 mr-2
                      ${isActive ? 'w-2' : 'w-0 group-hover:w-2'}`}></span>
                    {item}
                  </Link>
                )
              })}
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
      )}
    </div>
  )
} 