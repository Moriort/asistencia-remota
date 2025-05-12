"use client"

import { Container } from "../../../components/ui/container"

export default function PoliticaPrivacidad() {
  return (
    <Container className="py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de privacidad</h1>
        
        <div className="prose prose-lg max-w-none">
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
        </div>
      </div>
    </Container>
  )
} 