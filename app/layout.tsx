import './globals.css'
import React from 'react'
import { Poppins } from 'next/font/google'
import Navbar from './Header/Navbar/Navbar'

export const metadata = {
  title: 'Micaela Jofre',
  description:
    'Como desarrolladora fullstack, ofrezco soluciones digitales de alta calidad para empresas de cualquier tamaño. Tengo experiencia en el desarrollo de aplicaciones web y móviles utilizando tecnologías como ReactJS, Node.js, MongoDB y Firebase. Soy apasionada por la tecnología y la innovación, y siempre busco nuevas formas de mejorar la eficiencia y la productividad de mis clientes. Visita mi portafolio para ver algunos de mis proyectos más destacados.'
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={poppins.className + ' h-full'}>
      <body className="h-full w-full">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
