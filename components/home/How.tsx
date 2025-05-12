"use client"

import { MessageSquare, Monitor, Zap } from "lucide-react"

export default function HeroSection() {
    return (
        <section
        className="py-16 md:py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/power-digital-marketing-P_dneF5Pz_c-unsplash.jpg')" }}
      >
        {/* Overlay blanco para suavizar la imagen */}
        <div className="absolute inset-0 bg-white/80 dark:bg-dark/80 mix-blend-lighten pointer-events-none"></div>
        {/* Overlay de color para matizar con los colores del sitio */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/20 via-secondary/20 to-transparent"></div>

        <div className="container relative">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block mb-3 md:mb-4 relative">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium">
                Proceso Simple
              </span>
              <div className="absolute -bottom-1 -right-1 w-full h-full border border-primary/30 rounded-md"></div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-shadow-lg text-red-50">
              ¿Cómo funciona nuestro servicio?
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-dark/70 max-w-3xl mx-auto">
              Asistencia Remota te permite solucionar problemas informáticos sin necesidad de desplazamientos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 -translate-y-1/2 z-0"></div>

            {[
              {
                step: 1,
                title: "Contáctanos",
                description: "Llámanos o escríbenos describiendo el problema que tienes con tu equipo.",
                icon: <MessageSquare className="h-6 w-6 text-white" />,
              },
              {
                step: 2,
                title: "Conexión Remota",
                description: "Te guiaremos para establecer una conexión segura con tu equipo.",
                icon: <Monitor className="h-6 w-6 text-white" />,
              },
              {
                step: 3,
                title: "Solución Inmediata",
                description: "Nuestros técnicos solucionarán el problema mientras tú observas todo el proceso.",
                icon: <Zap className="h-6 w-6 text-white" />,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md relative z-10 border border-primary/25 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center font-bold text-3xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full"></div>
                <div className="pt-4">
                  <div className="mb-4 rounded-full w-12 h-12 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-dark">{step.title}</h3>

                  <p className="text-dark/70 text-md md:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}