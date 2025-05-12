"use client"

import { ChevronRight, Check, Lock } from "lucide-react"
import { Button } from "../ui/button"

export default function CTA() {
    return(
        <section
        className="py-16 md:py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/power-digital-marketing-P_dneF5Pz_c-unsplash.jpg')" }}
      >
        {/* Overlay blanco para suavizar la imagen */}
        <div className="absolute inset-0 bg-white/80 dark:bg-dark/80 mix-blend-lighten pointer-events-none"></div>
        {/* Overlay de color para matizar con los colores del sitio */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/10 rounded-full filter blur-3xl"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs md:text-sm text-white">
                <span className="mr-2 rounded-full bg-white px-1.5 py-0.5 text-xs text-primary font-medium">
                  Nuevo
                </span>
                <span>Soporte técnico 24/7</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
                ¿Problemas con tu computador?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white/90">
                No pierdas más tiempo. Nuestros técnicos están listos para ayudarte de forma remota, rápida y
                eficiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 gap-2 rounded-full group"
                >
                  Obtén Soporte Remoto ahora
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-secondary hover:bg-white/10 hover:text-white rounded-full"
                >
                  Ver planes
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 transform rotate-1 hover:rotate-0 transition-all duration-300">
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-white/10 rounded-full filter blur-xl"></div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-white/10 rounded-full filter blur-xl"></div>
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="bg-white/10 rounded-full p-3">
                    <Lock className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Conexión 100% Segura</h3>
                    <p className="text-white/80 text-sm md:text-base">
                      Utilizamos protocolos de encriptación avanzados
                    </p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 relative">
                  {[
                    "Sin instalación de software adicional",
                    "Conexión en menos de 2 minutos",
                    "Soporte para Windows, Mac y Linux",
                    "Pago seguro con múltiples opciones",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="rounded-full bg-white/10 p-1 group-hover/item:bg-white/20 transition-colors duration-300">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white/80 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}