"use client"

import { Database, MessageSquare, Monitor, Server, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Services() {
    return (
        <section id="servicios" className="py-16 md:py-20 bg-white">
            <div className="container">
                <div className="text-center mb-10 md:mb-16">
                    <div className="inline-block mb-3 md:mb-4 relative">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium">
                            Nuestros Servicios
                        </span>
                        <div className="absolute -bottom-1 -right-1 w-full h-full border border-primary/30 rounded-md"></div>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-dark">
                        Soluciones completas para tus necesidades
                    </h2>
                    <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-dark/70 max-w-3xl mx-auto">
                        Ofrecemos servicios especializados para resolver cualquier problema informático.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            icon: <Monitor className="h-6 w-6 md:h-7 md:w-7 text-white" />,
                            title: "Soporte Informático General",
                            description:
                                "Asistencia para cualquier problema con tu computador, desde lentitud hasta errores del sistema.",
                        },
                        {
                            icon: <Server className="h-6 w-6 md:h-7 md:w-7 text-white" />,
                            title: "Instalación y Configuración",
                            description:
                                "Instalamos y configuramos cualquier software que necesites para tu trabajo o uso personal.",
                        },
                        {
                            icon: <Shield className="h-6 w-6 md:h-7 md:w-7 text-white" />,
                            title: "Eliminación de Virus y Malware",
                            description:
                                "Limpiamos tu equipo de amenazas y reforzamos su seguridad para prevenir futuras infecciones.",
                        },
                        {
                            icon: <Zap className="h-6 w-6 md:h-7 md:w-7 text-white" />,
                            title: "Optimización de Rendimiento",
                            description:
                                "Hacemos que tu PC funcione más rápido eliminando archivos innecesarios y optimizando el sistema.",
                        },
                        {
                            icon: <MessageSquare className="h-6 w-6 md:h-7 md:w-7 text-white" />,
                            title: "Asesoramiento Tecnológico",
                            description:
                                "Te orientamos en la compra de equipos y te ayudamos a tomar las mejores decisiones tecnológicas.",
                        },
                        {
                            icon: <Database className="h-6 w-6 md:h-7 md:w-7 text-white" />,
                            title: "Soporte para Windows",
                            description:
                                "Especialistas en todas las versiones de Windows, desde la instalación hasta la solución de problemas.",
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-primary/10 hover:shadow-md hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            <div className="p-6 md:p-8">
                                <div className="mb-6 rounded-xl w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary to-secondary group-hover:shadow-lg transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-dark/70 mb-6 text-sm md:text-base">{service.description}</p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-primary font-medium hover:underline text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300"
                                >
                                    Saber más <ArrowUpRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}