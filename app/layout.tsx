import './globals.css'
import React from 'react'
import { Poppins } from 'next/font/google'
import Navbar from './Components/Header/Navbar/Navbar'

export const metadata = {
  title: 'Micaela Jofre',
  description:
    'Como desarrolladora fullstack, ofrezco soluciones digitales de alta calidad para empresas de cualquier tamaño. Tengo experiencia en el desarrollo de aplicaciones web y móviles utilizando tecnologías como ReactJS, Node.js, MongoDB y Firebase. Soy apasionada por la tecnología y la innovación, y siempre busco nuevas formas de mejorar la eficiencia y la productividad de mis clientes. Visita mi portafolio para ver algunos de mis proyectos más destacados.',
  keywords: ['Micaela Jofre', 'React', 'JavaScript', 'Next js', 'MongoDB', 'Node js', 'Express', 'Developer', 'frontend', 'backend', 'fullstack'],
  creator: 'Micaela Jofré',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', type: 'image/png' },
      { url: '/favicon-32x32.png', type: 'image/png' }
    ],
    apple: [{ url: '/apple-icon-x3.png', sizes: '180x180', type: '/apple-touch-icon.png' }]
  },
  themeColor: [{ media: '(prefers-color-scheme: light)', color: 'ffffff' }]
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={poppins.className + ' h-full'}>
      <body className="h-full w-full bg-black opacity-70">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
