"use client"

import { Container } from "../../../components/ui/container"

export default function PoliticaCookies() {
  return (
    <Container className="py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de cookies</h1>
        
        <div className="prose prose-lg max-w-none">
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
        </div>
      </div>
    </Container>
  )
} 