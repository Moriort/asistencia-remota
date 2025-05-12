"use cliente"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Pricing() {
    return(
        <section id="precios" className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 rounded-full filter blur-3xl opacity-30"></div>

        <div className="container relative">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block mb-3 md:mb-4 relative">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium">
                Precios Transparentes
              </span>
              <div className="absolute -bottom-1 -right-1 w-full h-full border border-primary/30 rounded-md"></div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-dark">Planes y Precios</h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-dark/70 max-w-3xl mx-auto">
              Ofrecemos tarifas transparentes y competitivas para todos nuestros servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Plan Básico",
                subtitle: "Para problemas puntuales y rápidos",
                price: "$15.000",
                period: "/ sesión",
                features: ["Sesión de hasta 1 hora", "Solución de problemas básicos", "Soporte por chat posterior"],
                buttonText: "Contratar Ahora",
                borderColor: "border-t-secondary",
                buttonColor: "bg-secondary hover:bg-secondary/90",
                iconColor: "text-secondary",
                popular: false,
              },
              {
                title: "Plan Estándar",
                subtitle: "Para problemas más complejos",
                price: "$25.000",
                period: "/ sesión",
                features: [
                  "Sesión de hasta 2 horas",
                  "Limpieza de virus y malware",
                  "Optimización del sistema",
                  "Seguimiento por 7 días",
                ],
                buttonText: "Contratar Ahora",
                borderColor: "border-t-primary",
                buttonColor: "bg-primary hover:bg-primary/90",
                iconColor: "text-primary",
                popular: true,
              },
              {
                title: "Plan Empresas",
                subtitle: "Para negocios y equipos de trabajo",
                price: "Consultar",
                period: "",
                features: [
                  "Soporte para múltiples equipos",
                  "Tiempo de respuesta prioritario",
                  "Mantenimiento preventivo",
                  "Asesoramiento tecnológico",
                ],
                buttonText: "Solicitar Cotización",
                borderColor: "border-t-dark",
                buttonColor: "border-dark/20 text-dark hover:bg-dark/5",
                iconColor: "text-dark",
                popular: false,
                variant: "outline" as "outline" | "default",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 md:p-8 shadow-md border-t-4 ${plan.borderColor} flex flex-col relative ${plan.popular ? "md:scale-105 z-10 shadow-xl" : ""} hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 right-8 bg-gradient-to-r from-primary to-secondary text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full shadow-md">
                    Más Popular
                  </div>
                )}
                <div className="mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-dark">{plan.title}</h3>
                  <p className="text-dark/70 mt-1 md:mt-2 text-sm md:text-base">{plan.subtitle}</p>
                </div>
                <div className="mb-4 md:mb-6 flex items-end">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">{plan.price}</span>
                  <span className="text-dark/70 text-sm md:text-base ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`h-5 w-5 ${plan.iconColor} flex-shrink-0`} />
                      <span className="text-dark/80 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.variant === "outline" ? "variant-outline " + plan.buttonColor : plan.buttonColor + " text-white"} rounded-lg`}
                  variant={plan.variant || "default"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
