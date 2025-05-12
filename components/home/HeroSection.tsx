"use client"

import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark/5 via-transparent to-primary/5"></div>

      {/* Animated shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 left-[10%] w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-[20%] w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs md:text-sm text-primary shadow-sm">
              <span className="mr-2 rounded-full bg-primary px-1.5 py-0.5 text-xs text-white">Nuevo</span>
              <span>Soporte técnico sin salir de casa</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-dark">
              Soporte Técnico <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Remoto</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-secondary/30 -rotate-1"></span>
              </span>{" "}
              en Todo Chile
            </h1>
            <p className="text-lg md:text-xl text-dark/80 max-w-xl">
              Resolvemos tus problemas informáticos sin salir de casa. Rápido, eficiente y profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary group-hover:scale-105 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Obtén Soporte Remoto Ahora
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="border-dark/20 text-dark hover:bg-dark/5 rounded-full">
                Ver Servicios
              </Button>
            </div>
            <div className="flex items-center gap-4 text-dark/80 pt-2 md:pt-4">
           
              <div className="text-xs md:text-sm">
                Más de <span className="font-medium text-primary text-2xm">2.000+</span> clientes satisfechos
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 mx-auto lg:mx-0 max-w-md lg:max-w-none">
            <div className="relative w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden border border-primary/10">
              <div className="relative w-full h-full md:h-600 lg:h-600">
                <Image
                  src="/images/steven-cordes-EZmOa2Mv0nc-unsplash.jpg"
                  alt="Soporte técnico remoto"
                  className="object-cover w-full h-full"
                  width={500}
                  height={600}
                  style={{ filter: 'brightness(0.9) saturate(1.1) hue-rotate(10deg)' }}
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-primary/10 flex items-center gap-3 max-w-[200px]">
              <div className="bg-green-100 rounded-full p-2 text-green-600">
                <Check className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium">Respuesta en menos de 15 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 