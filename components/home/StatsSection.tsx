"use client"

import { Sparkles, Check, Clock, MousePointer } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="py-10 md:py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { value: "+5000", label: "Problemas resueltos", icon: <Sparkles className="h-5 w-5 text-primary" /> },
            { value: "98%", label: "Clientes satisfechos", icon: <Check className="h-5 w-5 text-primary" /> },
            { value: "15 min", label: "Tiempo de respuesta", icon: <Clock className="h-5 w-5 text-primary" /> },
            { value: "24/7", label: "Soporte disponible", icon: <MousePointer className="h-5 w-5 text-primary" /> },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm border border-primary/5 hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 rounded-full p-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
              </div>
              <p className="text-dark/70 mt-1 md:mt-2 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 