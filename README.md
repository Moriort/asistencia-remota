# Asistencia Remota - Digital Strong Locking S.A.

Plataforma web de soporte técnico remoto para particulares y pequeñas empresas en todo Chile. Desarrollada con Next.js 14, React y Tailwind CSS.

## Características principales

- **Diseño moderno y responsivo**
- **Interfaz intuitiva y profesional**
- **Formulario de contacto integrado**
- **Secciones informativas detalladas**
- **Optimizado para SEO**
- **Integración con soporte remoto**

## Tecnologías utilizadas

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Lucide Icons
- Radix UI
- Shadcn/ui

## Requisitos previos

- Node.js 18.17 o superior
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Moriort/asistencia-remota.git
cd asistencia-remota
```

2. Instalar dependencias:
```bash
npm install
# o
yarn install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del proyecto

```
asistencia-remota/
├── app/                    # Directorio principal de la aplicación
│   ├── api/               # API routes
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes reutilizables
│   ├── home/             # Componentes específicos de la página principal
│   ├── layout/           # Componentes de layout (Header, Footer)
│   └── ui/               # Componentes de UI reutilizables
├── public/               # Archivos estáticos
└── styles/              # Estilos globales
```

## Características detalladas

- **Header interactivo**: Menú responsivo con detección de sección activa
- **Formulario de contacto**: Validación de campos y manejo de errores
- **Diseño adaptativo**: Optimizado para móviles y escritorio
- **Animaciones suaves**: Transiciones y efectos visuales profesionales
- **Integración de soporte**: Conexión directa con herramientas de soporte remoto

## Despliegue

El proyecto está configurado para ser desplegado en Vercel:

1. Crear una cuenta en [Vercel](https://vercel.com)
2. Conectar el repositorio de GitHub
3. Configurar las variables de entorno necesarias
4. Desplegar

## Contribuir

1. Fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit de tus cambios (`git commit -am 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crear un Pull Request

## Licencia

Este proyecto es propiedad de Digital Strong Locking S.A. Todos los derechos reservados.

## Contacto

- **Email**: soporte@digitalstronglocking.com
- **Teléfono**: +56 9 3442 4489
- **Sitio web**: [Digital Strong Locking](https://www.digitalstronglocking.com) 