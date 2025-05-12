import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, subject, message } = body

        // Validaciones básicas
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            )
        }

        if (name.length < 3) {
            return NextResponse.json(
                { error: 'El nombre debe tener al menos 3 caracteres' },
                { status: 400 }
            )
        }

        if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            return NextResponse.json(
                { error: 'El email no es válido' },
                { status: 400 }
            )
        }

        if (message.length < 20) {
            return NextResponse.json(
                { error: 'El mensaje debe tener al menos 20 caracteres' },
                { status: 400 }
            )
        }

        // Aquí puedes implementar el envío del email
        // Por ejemplo, usando nodemailer, SendGrid, etc.
        
        // Por ahora, solo simulamos un envío exitoso
        console.log('Mensaje recibido:', { name, email, subject, message })

        return NextResponse.json(
            { message: 'Mensaje enviado correctamente' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error al procesar el mensaje:', error)
        return NextResponse.json(
            { error: 'Error al procesar el mensaje' },
            { status: 500 }
        )
    }
} 