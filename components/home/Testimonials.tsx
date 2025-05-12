"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
    return(
    <section
        className="py-16 md:py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/power-digital-marketing-P_dneF5Pz_c-unsplash.jpg')" }}
      >
        {/* Overlay blanco para suavizar la imagen */}
        <div className="absolute inset-0 bg-white/80 dark:bg-dark/80 mix-blend-lighten pointer-events-none"></div>
        {/* Overlay de color para matizar con los colores del sitio */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 to-dark/95"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block mb-3 md:mb-4 relative">
              <span className="inline-block bg-white/10 text-white px-3 py-1 rounded-md text-sm font-medium">
                Testimonios
              </span>
              <div className="absolute -bottom-1 -right-1 w-full h-full border border-white/30 rounded-md"></div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto">
              Cientos de clientes satisfechos en todo Chile confían en nuestro servicio de soporte remoto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote:
                  "Tenía mi computador muy lento y con varios errores. Me atendieron en minutos y lo dejaron como nuevo. ¡Excelente servicio!",
                name: "Carolina Mendoza",
                location: "Santiago",
                initials: "CM",
                bgColor: "from-primary to-primary/80",
              },
              {
                quote:
                  "Para nuestra pequeña empresa, contar con soporte técnico remoto ha sido un alivio. Resuelven todo rápidamente y sin interrumpir nuestro trabajo.",
                name: "Roberto Fuentes",
                location: "Valparaíso",
                initials: "RF",
                bgColor: "from-secondary to-secondary/80",
              },
              {
                quote:
                  "Increíble la rapidez con la que solucionaron mi problema. No tuve que llevar mi computador a ningún lado y el precio fue muy razonable.",
                name: "María Jiménez",
                location: "Concepción",
                initials: "MJ",
                bgColor: "from-gray-400 to-gray-500",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-1 mb-4 md:mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 md:h-5 md:w-5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 md:mb-6 text-white/80 italic text-sm md:text-base relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-white/20 font-serif">"</span>
                  {testimonial.quote}
                  <span className="absolute -bottom-4 -right-2 text-4xl text-white/20 font-serif">"</span>
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-full bg-gradient-to-br ${testimonial.bgColor} h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-white font-bold text-sm md:text-base shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base text-white">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-white/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
