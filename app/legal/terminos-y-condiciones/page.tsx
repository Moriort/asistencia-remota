"use client"

import { Container } from "../../../components/ui/container"

export default function TerminosCondiciones() {
  return (
    <Container className="py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Términos y condiciones del servicio</h1>
        
        <div className="prose prose-lg max-w-none">
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
        </div>
      </div>
    </Container>
  )
} 