"use client"

import { Database, MessageSquare, Monitor, Server, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Información detallada de cada servicio
export const serviciosDetallados = [
    {
        icon: <Monitor className="h-6 w-6 md:h-7 md:w-7 text-white" />,
        title: "Soporte Informático General",
        description:
            "Asistencia para cualquier problema con tu computador, desde lentitud hasta errores del sistema.",
        detalles: [
            "Diagnóstico y solución remota de problemas de software",
            "Asistencia con problemas de sistema operativo Windows",
            "Solución de errores y mensajes de alerta",
            "Resolución de problemas de inicio y apagado",
            "Configuración de impresoras y periféricos",
            "Restauración de acceso a archivos y programas"
        ],
        resumen: "Nuestros técnicos especializados diagnostican y resuelven cualquier problema informático de forma rápida y eficiente, conectándose remotamente a tu equipo para solucionar desde problemas básicos hasta situaciones más complejas que requieren intervención especializada."
    },
    {
        icon: <Server className="h-6 w-6 md:h-7 md:w-7 text-white" />,
        title: "Instalación y Configuración",
        description:
            "Instalamos y configuramos cualquier software que necesites para tu trabajo o uso personal.",
        detalles: [
            "Instalación de sistemas operativos Windows",
            "Configuración de programas y aplicaciones",
            "Instalación de paquetes de ofimática (Office, LibreOffice)",
            "Configuración de correo electrónico y servicios en la nube",
            "Instalación de drivers y controladores",
            "Migración de datos entre equipos"
        ],
        resumen: "Te ayudamos a instalar y configurar correctamente cualquier software que necesites, asegurándonos de que funcione perfectamente y optimizado para tu equipo. Desde sistemas operativos hasta programas específicos, nos encargamos de todo el proceso técnico."
    },
    {
        icon: <Shield className="h-6 w-6 md:h-7 md:w-7 text-white" />,
        title: "Eliminación de Virus y Malware",
        description:
            "Limpiamos tu equipo de amenazas y reforzamos su seguridad para prevenir futuras infecciones.",
        detalles: [
            "Detección y eliminación de virus, malware, spyware y ransomware",
            "Limpieza de software malicioso y adware",
            "Eliminación de extensiones y barras de herramientas no deseadas",
            "Configuración de protecciones anti-malware",
            "Implementación de medidas preventivas",
            "Evaluación de vulnerabilidades de seguridad"
        ],
        resumen: "Desinfectamos completamente tu equipo de cualquier tipo de amenaza digital, eliminando virus, malware, ransomware y software espía. Además, implementamos sistemas de protección para evitar futuras infecciones y te aconsejamos sobre mejores prácticas de seguridad."
    },
    {
        icon: <Zap className="h-6 w-6 md:h-7 md:w-7 text-white" />,
        title: "Optimización de Rendimiento",
        description:
            "Hacemos que tu PC funcione más rápido eliminando archivos innecesarios y optimizando el sistema.",
        detalles: [
            "Limpieza profunda del sistema para mejorar la velocidad",
            "Optimización del arranque y tiempo de respuesta",
            "Eliminación de programas innecesarios y archivos temporales",
            "Desfragmentación de discos duros",
            "Ajuste de la memoria virtual y gestión de recursos",
            "Diagnóstico de componentes con bajo rendimiento"
        ],
        resumen: "Devolvemos la velocidad a tu computador mediante una optimización profesional que elimina los cuellos de botella del sistema, libera espacio en disco, optimiza la memoria y mejora significativamente los tiempos de arranque y respuesta de tus aplicaciones."
    },
    {
        icon: <MessageSquare className="h-6 w-6 md:h-7 md:w-7 text-white" />,
        title: "Asesoramiento Tecnológico",
        description:
            "Te orientamos en la compra de equipos y te ayudamos a tomar las mejores decisiones tecnológicas.",
        detalles: [
            "Asesoría personalizada sobre hardware y componentes",
            "Recomendaciones sobre equipos según tus necesidades",
            "Evaluación de opciones de actualización vs. reemplazo",
            "Consultoría sobre soluciones de software específicas",
            "Orientación sobre servicios en la nube",
            "Planificación de infraestructura tecnológica básica"
        ],
        resumen: "Nuestros expertos te guían en la toma de decisiones tecnológicas, ayudándote a elegir los equipos y soluciones que mejor se adapten a tus necesidades reales y presupuesto, evitando gastos innecesarios en características que no necesitas."
    },
    {
        icon: <Database className="h-6 w-6 md:h-7 md:w-7 text-white" />,
        title: "Soporte para Windows",
        description:
            "Especialistas en todas las versiones de Windows, desde la instalación hasta la solución de problemas.",
        detalles: [
            "Resolución de problemas específicos de Windows",
            "Actualización entre versiones de Windows",
            "Recuperación de sistemas dañados",
            "Solución de errores de pantalla azul y fallos críticos",
            "Optimización del registro de Windows",
            "Gestión de actualizaciones y parches de seguridad"
        ],
        resumen: "Como especialistas en Windows, resolvemos cualquier problema relacionado con este sistema operativo: desde errores comunes hasta situaciones críticas como pantallas azules, problemas de inicio, o fallos tras actualizaciones. Recuperamos el acceso a tus datos y dejamos tu sistema funcionando correctamente."
    },
]

export default function Services() {
    const [servicioSeleccionado, setServicioSeleccionado] = useState<number | null>(null)
    
    const abrirModal = (index: number) => {
        setServicioSeleccionado(index)
    }
    
    const cerrarModal = () => {
        setServicioSeleccionado(null)
    }
    
    const servicioActual = servicioSeleccionado !== null ? serviciosDetallados[servicioSeleccionado] : null

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
                    {serviciosDetallados.map((servicio, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-primary/10 hover:shadow-md hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            <div className="p-6 md:p-8">
                                <div className="mb-6 rounded-xl w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary to-secondary group-hover:shadow-lg transition-all duration-300">
                                    {servicio.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                                    {servicio.title}
                                </h3>
                                <p className="text-dark/70 mb-6 text-sm md:text-base">{servicio.description}</p>
                                <button
                                    onClick={() => abrirModal(index)}
                                    className="inline-flex items-center text-primary font-medium hover:underline text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300"
                                >
                                    Saber más <ArrowUpRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Modal con información detallada */}
            <Dialog open={servicioSeleccionado !== null} onOpenChange={cerrarModal}>
                {servicioActual && (
                    <DialogContent className="max-w-3xl overflow-auto">
                        <DialogHeader>
                            <div className="flex items-center gap-3 mb-1">
                                <div className="rounded-lg w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                                    {servicioActual.icon}
                                </div>
                                <DialogTitle>{servicioActual.title}</DialogTitle>
                            </div>
                        </DialogHeader>
                        
                        <div className="mb-4">
                            <p className="text-dark/80 text-lg leading-relaxed mb-6">
                                {servicioActual.resumen}
                            </p>
                            
                            <h4 className="text-base font-semibold text-primary mb-3">Lo que incluye este servicio:</h4>
                            <ul className="space-y-2 mb-6">
                                {servicioActual.detalles.map((detalle, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-primary mr-2 mt-1">•</span>
                                        <span className="text-dark/70">{detalle}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <DialogFooter className="flex justify-center sm:justify-end">
                            <Button
                                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                                onClick={() => {
                                    window.open('https://www.remotedesktop.com/hd-app/help', '_blank', 'noopener,noreferrer')
                                    cerrarModal()
                                }}
                            >
                                Obtén Soporte Remoto Ahora
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                )}
            </Dialog>
        </section>
    )
}