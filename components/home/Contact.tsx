"use client"

import { Button } from "../ui/button"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { useState } from 'react'

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                alert('Mensaje enviado correctamente')
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            } else {
                const data = await response.json()
                throw new Error(data.error || 'Error al enviar el mensaje')
            }
        } catch (error) {
            alert('Error al enviar el mensaje. Por favor, intenta nuevamente.')
            console.error('Error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return(
        <section id="contacto" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        Estamos para ayudarte
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Contáctanos
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Estamos disponibles para resolver todas tus dudas y ayudarte con cualquier problema informático.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Información de contacto */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <div className="space-y-6">
                            {[
                                {
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    ),
                                    title: "Teléfono",
                                    content: "+56 9 3442 4489",
                                    href: "tel:+56934424489"
                                },
                                {
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    ),
                                    title: "Email",
                                    content: "soporte@digitalstronglocking.com",
                                    href: "mailto:soporte@digitalstronglocking.com"
                                },
                                {
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    title: "Horario",
                                    content: (
                                        <>
                                            <p className="text-gray-600">Lunes a Viernes: 9:00 - 19:00</p>
                                            <p className="text-gray-600">Sábado: 10:00 - 14:00</p>
                                        </>
                                    ),
                                },
                            ].map((contact, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                                        {contact.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            {contact.title}
                                        </h3>
                                        {typeof contact.content === "string" ? (
                                            contact.href ? (
                                                <a
                                                    href={contact.href}
                                                    className="text-gray-600 hover:text-primary transition-colors duration-200"
                                                >
                                                    {contact.content}
                                                </a>
                                            ) : (
                                                <p className="text-gray-600">{contact.content}</p>
                                            )
                                        ) : (
                                            contact.content
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-4">Síguenos en redes sociales</h3>
                            <div className="flex space-x-4">
                                {[
                                    {
                                        icon: <Facebook className="h-5 w-5" />,
                                        name: "Facebook",
                                        href: "#"
                                    },
                                    {
                                        icon: <Instagram className="h-5 w-5" />,
                                        name: "Instagram",
                                        href: "#"
                                    },
                                    {
                                        icon: <Twitter className="h-5 w-5" />,
                                        name: "Twitter",
                                        href: "#"
                                    },
                                    {
                                        icon: <Linkedin className="h-5 w-5" />,
                                        name: "LinkedIn",
                                        href: "#"
                                    }
                                ].map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-gray-600 hover:text-gray-900"
                                    >
                                        {social.icon}
                                        <span className="sr-only">{social.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Envíanos un mensaje
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                        placeholder="Tu nombre"
                                        minLength={3}
                                        pattern="[A-Za-zÀ-ÿ\s]+"
                                        title="Por favor ingresa un nombre válido (solo letras)"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                        placeholder="tu@email.com"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        title="Por favor ingresa un email válido"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Asunto
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    placeholder="¿En qué podemos ayudarte?"
                                    minLength={5}
                                    maxLength={100}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    placeholder="Describe tu problema o consulta"
                                    minLength={20}
                                    maxLength={1000}
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg hover:opacity-90 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}