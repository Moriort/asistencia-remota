"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

export default function Faq() {
    return(
        <section id="faq" className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/10 rounded-full filter blur-3xl opacity-30"></div>

        <div className="container relative">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block mb-3 md:mb-4 relative">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium">
                Preguntas Frecuentes
              </span>
              <div className="absolute -bottom-1 -right-1 w-full h-full border border-primary/30 rounded-md"></div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-dark">
              Respuestas a tus dudas
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-dark/70 max-w-3xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestro servicio de soporte técnico remoto.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-lg border border-primary/10">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-2 md:p-3">
                <HelpCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-dark">Preguntas sobre nuestro servicio</h3>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {[
                {
                  question: "¿Cómo funciona exactamente el soporte técnico remoto?",
                  answer:
                    "El soporte técnico remoto funciona mediante una conexión segura a tu computador. Primero, nos contactas y describimos el problema. Luego, te enviamos un enlace para descargar una pequeña aplicación que nos permite conectarnos a tu equipo. Una vez establecida la conexión, nuestros técnicos pueden ver tu pantalla y tomar el control del mouse y teclado para solucionar el problema mientras tú observas todo el proceso. Puedes interrumpir la conexión en cualquier momento.",
                },
                {
                  question: "¿Es segura la conexión remota a mi computador?",
                  answer:
                    "Sí, la conexión es completamente segura. Utilizamos protocolos de encriptación avanzados para proteger tu información. La conexión solo se establece con tu autorización y puedes terminarla en cualquier momento. Además, nuestros técnicos están sujetos a estrictas políticas de confidencialidad y no tienen acceso a tus archivos personales sin tu permiso explícito.",
                },
                {
                  question: "¿Qué tipos de problemas pueden solucionar remotamente?",
                  answer:
                    "Podemos solucionar remotamente la mayoría de los problemas de software, como: lentitud del sistema, virus y malware, problemas con Windows o aplicaciones, configuración de correo electrónico y programas, actualizaciones de software, problemas de conexión a internet, recuperación de datos, y optimización del rendimiento. Los problemas de hardware que requieren intervención física (como cambio de piezas) no pueden resolverse remotamente, pero podemos diagnosticarlos y asesorarte sobre los pasos a seguir.",
                },
                {
                  question: "¿Cuánto tiempo toma resolver un problema?",
                  answer:
                    "El tiempo de resolución varía según la complejidad del problema. Los problemas sencillos como configuraciones o errores comunes suelen resolverse en 15-30 minutos. Problemas más complejos como limpieza de virus o optimización completa pueden tomar entre 1-2 horas. Siempre te informamos del tiempo estimado antes de comenzar el servicio.",
                },
                {
                  question: "¿Qué pasa si no pueden resolver mi problema?",
                  answer:
                    'Si por alguna razón no podemos resolver tu problema remotamente, no te cobraremos por el servicio. Nuestra política es "si no lo solucionamos, no pagas". En estos casos, te ofreceremos alternativas o te recomendaremos los siguientes pasos a seguir para solucionar tu problema.',
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border border-primary/10 rounded-lg px-4 md:px-6 overflow-hidden group"
                >
                  <AccordionTrigger className="text-dark group-hover:text-primary hover:no-underline py-3 md:py-4 text-left font-medium text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-dark/70 pb-3 md:pb-4 text-sm md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 md:mt-10 text-center">
              <p className="text-dark/70 mb-3 md:mb-4 text-sm md:text-base">
                ¿No encuentras respuesta a tu pregunta?
              </p>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full">
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}