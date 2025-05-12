"use client"

import Link from "next/link"
import { Cpu } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-1.5 md:p-2 rotate-3">
                <Cpu className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
                    Asistencia Remota
                  </span>
                  <span className="text-xs align-top">®</span>
                </div>
                <span className="text-[10px] md:text-xs text-white/60">by Digital Strong Locking S.A.</span>
              </div>
            </div>
            <p className="text-white/70 text-sm md:text-base">
              Soporte técnico remoto profesional para todo Chile. Rápido, eficiente y sin complicaciones.
            </p>
            <div className="flex gap-3 md:gap-4">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                  name: "Facebook",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                  name: "Instagram",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  ),
                  name: "Twitter",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                  name: "LinkedIn",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors duration-300 hover:scale-110 transform"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 relative inline-block">
              Enlaces Rápidos
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {["Inicio", "Servicios", "Precios", "Blog", "FAQ", "Contacto"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 relative inline-block">
              Servicios
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-secondary"></span>
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Soporte Informático",
                "Eliminación de Virus",
                "Optimización de PC",
                "Soporte para Windows",
                "Asesoramiento Tecnológico",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-secondary group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 relative inline-block">
              Legal
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-white/50"></span>
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {["Términos y Condiciones", "Política de Privacidad", "Política de Cookies"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-white/50 group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Digital Strong Locking S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 