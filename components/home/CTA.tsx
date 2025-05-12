"use client"

import { ChevronRight, Check, Lock } from "lucide-react"
import { Button } from "../ui/button"

export default function CTA() {
    return(
        <section
        className="py-16 md:py-20 relative overflow-hidden bg-white"
      >
        {/* Fondo con los colores corporativos */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
 
        {/* Patrón sutil para añadir textura */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-2"></div>
        
        {/* Elementos decorativos con colores corporativos */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 rounded-full filter blur-3xl opacity-30"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center rounded-full border border-red-500 bg-white px-3 py-1 text-xs md:text-sm text-dark">
                <span className="mr-2 rounded-full bg-red-500 px-1.5 py-0.5 text-xs text-white font-medium">
                  Nuevo
                </span>
                <span>Soporte técnico 24/7</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#25375f]">
                ¿Problemas con tu computador?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-[#25375f]/80">
                No pierdas más tiempo. Nuestros técnicos están listos para ayudarte de forma remota, rápida y
                eficiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="default"
                  className="bg-red-500 hover:bg-red-600 text-white gap-2 rounded-full group"
                  onClick={() => window.open('https://www.remotedesktop.com/hd-app/help', '_blank', 'noopener,noreferrer')}
                >
                  Obtén Soporte Remoto ahora
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#25375f]/20 text-[#25375f] hover:bg-[#25375f]/5 hover:text-[#25375f] rounded-full"
                  onClick={() => {
                    const preciosSection = document.getElementById('precios');
                    if (preciosSection) {
                      preciosSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Ver planes
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-xl shadow-gray-100/50 transform hover:translate-y-[-4px] transition-all duration-300">
                
                <div className="flex items-center gap-4 mb-6 relative">
                  {/* Candado verde circular similar a la referencia */}
                  <div className="bg-emerald-100 rounded-full p-3 ring-4 ring-emerald-50">
                    <Lock className="h-8 w-8 md:h-10 md:w-10 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#25375f]">Conexión 100% Segura</h3>
                    <p className="text-[#25375f]/60 text-sm md:text-base">
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
                      <div className="rounded-full bg-emerald-50 p-1 group-hover/item:bg-emerald-100 transition-colors duration-300">
                        <Check className="h-4 w-4 text-emerald-500" />
                      </div>
                      <span className="text-[#25375f]/70 text-sm md:text-base group-hover/item:text-[#25375f] transition-colors duration-300">{feature}</span>
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