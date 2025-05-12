"use client"

import Link from "next/link"
import { Cpu } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "../ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { serviciosDetallados } from "../home/Services"

// Contenido de los modales
const legalContent = {
  terms: {
    title: "Términos y condiciones del servicio",
    content: (
      <>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
          <p>
            Bienvenido a los términos y condiciones de Digital Strong Locking S.A. Al acceder y utilizar nuestros servicios 
            de soporte técnico remoto, usted acepta estos términos en su totalidad.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Descripción del servicio</h2>
          <p>
            Proporcionamos servicios de soporte técnico remoto que incluyen, pero no se limitan a:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Asistencia técnica remota para computadores y dispositivos</li>
            <li>Eliminación de virus y malware</li>
            <li>Optimización de sistemas</li>
            <li>Configuración de software y hardware</li>
            <li>Asesoramiento tecnológico general</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Responsabilidades del cliente</h2>
          <p>
            Al utilizar nuestros servicios, el cliente se compromete a:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Proporcionar información precisa sobre los problemas técnicos</li>
            <li>Mantener copias de seguridad de sus datos importantes</li>
            <li>Cooperar con nuestros técnicos durante las sesiones de soporte</li>
            <li>No utilizar nuestros servicios para actividades ilegales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitación de responsabilidad</h2>
          <p>
            Digital Strong Locking S.A. no se hace responsable de:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Pérdida de datos durante el servicio</li>
            <li>Daños indirectos o consecuentes</li>
            <li>Problemas causados por hardware defectuoso</li>
            <li>Interrupciones del servicio por causas ajenas a nuestra voluntad</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Pagos y reembolsos</h2>
          <p>
            Nuestras políticas de pago y reembolso establecen que:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Los pagos deben realizarse antes de iniciar el servicio</li>
            <li>Los reembolsos se evaluarán caso por caso</li>
            <li>No se garantizan reembolsos por servicios ya prestados</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. 
            Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contacto</h2>
          <p>
            Para cualquier consulta sobre estos términos y condiciones, puede contactarnos en:
            <br />
            Email: soporte@digitalstronglocking.cl
            <br />
            Teléfono: +56 9 3442 4489
          </p>
        </section>
      </>
    )
  },
  privacy: {
    title: "Política de privacidad",
    content: (
      <>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Recopilación de información</h2>
          <p>
            Digital Strong Locking S.A. recopila la siguiente información durante la prestación de servicios de soporte técnico remoto:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Datos de contacto (nombre, correo electrónico, teléfono)</li>
            <li>Información técnica del dispositivo</li>
            <li>Registros de sesiones de soporte</li>
            <li>Información de diagnóstico del sistema</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Uso de la información</h2>
          <p>
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Proporcionar servicios de soporte técnico</li>
            <li>Mejorar nuestros servicios</li>
            <li>Comunicarnos con nuestros clientes</li>
            <li>Resolver problemas técnicos</li>
            <li>Generar estadísticas de servicio</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Protección de datos</h2>
          <p>
            Implementamos medidas de seguridad para proteger su información:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Encriptación de datos sensibles</li>
            <li>Acceso restringido a información personal</li>
            <li>Monitoreo de seguridad continuo</li>
            <li>Actualizaciones regulares de sistemas de seguridad</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Compartir información</h2>
          <p>
            No compartimos su información personal con terceros, excepto:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Cuando sea requerido por ley</li>
            <li>Con su consentimiento explícito</li>
            <li>Para proteger nuestros derechos legales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Derechos del usuario</h2>
          <p>
            Usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Acceder a sus datos personales</li>
            <li>Solicitar la rectificación de datos incorrectos</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Oponerse al procesamiento de sus datos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Retención de datos</h2>
          <p>
            Mantenemos sus datos personales solo durante el tiempo necesario para:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Cumplir con nuestras obligaciones legales</li>
            <li>Resolver disputas</li>
            <li>Hacer cumplir nuestros acuerdos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contacto</h2>
          <p>
            Para ejercer sus derechos o realizar consultas sobre privacidad, contáctenos en:
            <br />
            Email: soporte@digitalstronglocking.cl
            <br />
            Teléfono: +56 9 3442 4489
          </p>
        </section>
      </>
    )
  },
  cookies: {
    title: "Política de cookies",
    content: (
      <>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. 
            Estas nos ayudan a brindar una mejor experiencia de usuario y entender cómo se utiliza nuestro sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Tipos de cookies que utilizamos</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Cookies esenciales</h3>
              <p>Necesarias para el funcionamiento básico del sitio web y la prestación de servicios de soporte técnico remoto.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Cookies de rendimiento</h3>
              <p>Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web, permitiéndonos mejorar su funcionamiento.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Cookies de funcionalidad</h3>
              <p>Permiten recordar sus preferencias y personalizar su experiencia en nuestro sitio.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. ¿Cómo utilizamos las cookies?</h2>
          <p>Utilizamos cookies para:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Mantener su sesión activa durante el soporte técnico</li>
            <li>Recordar sus preferencias de idioma y región</li>
            <li>Analizar el tráfico y el comportamiento de los usuarios</li>
            <li>Mejorar la seguridad de nuestros servicios</li>
            <li>Personalizar el contenido según sus necesidades</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Control de cookies</h2>
          <p>
            Usted puede controlar y/o eliminar las cookies según lo desee. Puede eliminar todas las cookies 
            que ya están en su dispositivo y configurar la mayoría de los navegadores para que no las acepten. 
            Sin embargo, si lo hace, es posible que deba ajustar manualmente algunas preferencias cada vez que 
            visite nuestro sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies de terceros</h2>
          <p>
            En algunos casos, utilizamos servicios de terceros que también pueden establecer cookies en su dispositivo. 
            Estos servicios incluyen:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Herramientas de análisis web</li>
            <li>Servicios de chat en vivo</li>
            <li>Botones de redes sociales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Más información</h2>
          <p>
            Si tiene preguntas sobre nuestra política de cookies, contáctenos en:
            <br />
            Email: soporte@digitalstronglocking.cl
            <br />
            Teléfono: +56 9 3442 4489
          </p>
        </section>
      </>
    )
  }
}

// Mapeo de los servicios del footer a los índices en serviciosDetallados
const serviciosMap = {
  "soporte-informatico": 0, // Soporte Informático General
  "instalacion-config": 1,  // Instalación y Configuración
  "eliminacion-virus": 2,   // Eliminación de Virus y Malware
  "optimizacion-pc": 3,     // Optimización de Rendimiento
  "soporte-windows": 5,     // Soporte para Windows
  "asesoramiento": 4        // Asesoramiento Tecnológico
}

export default function Footer() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState<number | null>(null)
    
  const abrirModal = (index: number) => {
    setServicioSeleccionado(index)
  }
  
  const cerrarModal = () => {
    setServicioSeleccionado(null)
  }
  
  const servicioActual = servicioSeleccionado !== null ? serviciosDetallados[servicioSeleccionado] : null

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
            <div className="flex gap-3 md:gap-4 flex-col">
              <a href="mailto:soporte@digitalstronglocking.cl" className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base flex items-center group">
                <span className="w-0 h-0.5 bg-secondary group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                soporte@digitalstronglocking.cl
              </a>
              <a href="tel:+56934424489" className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base flex items-center group">
                <span className="w-0 h-0.5 bg-secondary group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                +56 9 3442 4489
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 relative inline-block">
              Enlaces Rápidos
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Inicio", href: "/" },
                { name: "Servicios", href: "/#servicios" },
                { name: "Precios", href: "/#precios" },
                { name: "Blog", href: "/blog" },
                { name: "FAQ", href: "/#faq" },
                { name: "Contacto", href: "/#contacto" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
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
                { name: "Soporte Informático", serviceId: "soporte-informatico" },
                { name: "Instalación y Configuración", serviceId: "instalacion-config" },
                { name: "Eliminación de Virus", serviceId: "eliminacion-virus" },
                { name: "Optimización de PC", serviceId: "optimizacion-pc" },
                { name: "Soporte para Windows", serviceId: "soporte-windows" },
                { name: "Asesoramiento Tecnológico", serviceId: "asesoramiento" }
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => abrirModal(serviciosMap[item.serviceId as keyof typeof serviciosMap])}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base flex items-center group text-left w-full"
                  >
                    <span className="w-0 h-0.5 bg-secondary group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </button>
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
              {[
                { name: "Términos y condiciones", type: "terms" },
                { name: "Política de privacidad", type: "privacy" },
                { name: "Política de cookies", type: "cookies" }
              ].map((item, index) => (
                <li key={index}>
                  <Dialog>
                    <DialogTrigger className="text-white/70 hover:text-white transition-colors duration-300 text-sm md:text-base flex items-center group w-full text-left">
                      <span className="w-0 h-0.5 bg-white/50 group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item.name}
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          {legalContent[item.type as keyof typeof legalContent].title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="policy-content text-gray-700">
                        {legalContent[item.type as keyof typeof legalContent].content}
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Digital Strong Locking S.A. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* Modal con información de servicios detallados */}
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
    </footer>
  )
} 