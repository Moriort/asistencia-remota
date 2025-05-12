"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Blog() {
    return(
        <section id="blog" className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block mb-3 md:mb-4 relative">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium">
                Recursos y Consejos
              </span>
              <div className="absolute -bottom-1 -right-1 w-full h-full border border-primary/30 rounded-md"></div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-dark">Blog Tecnológico</h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-dark/70 max-w-3xl mx-auto">
              Consejos y trucos para mantener tu equipo en óptimas condiciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                image: "/placeholder.svg?height=400&width=600",
                alt: "Cómo proteger tu PC de virus",
                category: "Seguridad",
                categoryColor: "bg-primary/10 text-primary",
                date: "Mayo 15, 2023",
                title: "Cómo proteger tu PC de virus y malware en 2023",
                description:
                  "Descubre las mejores prácticas y herramientas para mantener tu computador libre de amenazas.",
              },
              {
                image: "/placeholder.svg?height=400&width=600",
                alt: "Windows 11 vs Windows 10",
                category: "Windows",
                categoryColor: "bg-secondary/10 text-secondary",
                date: "Abril 28, 2023",
                title: "Windows 11 vs Windows 10: ¿Vale la pena actualizar?",
                description:
                  "Analizamos las ventajas y desventajas de la última versión del sistema operativo de Microsoft.",
              },
              {
                image: "/placeholder.svg?height=400&width=600",
                alt: "Optimizar PC lenta",
                category: "Rendimiento",
                categoryColor: "bg-gray-200 text-dark",
                date: "Marzo 10, 2023",
                title: "5 razones por las que tu PC va lento y cómo solucionarlo",
                description:
                  "Aprende a identificar y resolver los problemas más comunes que afectan el rendimiento de tu equipo.",
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-rose-50 to-gray-200" />
                  
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(189, 54, 54, 0.51)_1px,transparent_1px)] bg-[length:20px_20px]" />
                  </div>

                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 p-6 text-center z-10">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-center gap-2">
                      <span className={`text-xs font-medium ${blog.categoryColor} px-2 py-1 rounded-full`}>
                        {blog.category}
                      </span>
                      <span className="text-xs text-gray-600">{blog.date}</span>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-250/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-4 left-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                      href="#"
                      className="bg-white/80 text-gray-800 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm"
                    >
                      Leer artículo
                    </Link>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-dark/70 mb-3 md:mb-4 text-sm md:text-base">{blog.description}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary font-medium hover:underline text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Leer más <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button variant="outline" className="border-dark/20 text-dark hover:bg-dark/5 rounded-full">
              Ver todos los artículos
            </Button>
          </div>
        </div>
      </section>
    )
}
