"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface HelpDialogMessageProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function HelpDialogMessage({ isOpen, onOpenChange }: HelpDialogMessageProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-center">¿Cómo recibir soporte técnico?</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <p className="text-center text-gray-600">
                Siga estos pasos simples para recibir asistencia remota de nuestro equipo técnico
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Iniciar sesión remota</h3>
                    <p className="text-sm text-gray-600">
                      Haga clic en el botón "Obtén soporte ahora". Se abrirá una nueva ventana del sistema RemotePC.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Ingresar código de sesión</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      En la nueva ventana, ingrese el código de sesión proporcionado por nuestro equipo técnico.
                    </p>
                    <div className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-lg p-4">
                      <div className="bg-white border border-gray-200 rounded p-4 text-center">
                        <span className="font-mono text-2xl font-semibold text-gray-800">109-311-387</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Identificarse</h3>
                    <p className="text-sm text-gray-600">
                      Ingrese su nombre para que nuestro equipo pueda identificarlo durante la sesión de soporte.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F9FA] border border-[#E9ECEF] rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Nota de seguridad:</strong> Por su seguridad, solo acepte conexiones de nuestro equipo técnico oficial y nunca comparta información sensible durante la sesión.
                </p>
              </div>

              <div className="flex justify-center">
                <Button
                  className="bg-gradient-to-r from-[#E94E51] to-[#6C63FF] hover:opacity-90 text-white px-6"
                  onClick={() => {
                    onOpenChange(false)
                    window.open('https://remotepc.com/hd-app/help', '_blank', 'noopener,noreferrer')
                  }}
                >
                  Iniciar soporte remoto
                </Button>
                <Button 
                variant="link"
                onClick={() => {
                    onOpenChange(false)
                    window.open('https://www.remotedesktop.com/remote-desktop-helpdesk/faq-web#allow_rm_access', '_blank', 'noopener,noreferrer')
                }}
              >
                Más información
              </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
    )
}