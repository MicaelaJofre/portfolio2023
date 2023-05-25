'use client'
import { useState } from 'react'
import Subtitle from '../Subtitle'
import Proyect from './Proyect'
import { useFilter } from './Hooks/useFilter'

const Portfolio = () => {
  const [filter, setFilter] = useState('')
  const { proyects } = useFilter({ filter })

  const handleChange = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const value = e.currentTarget.textContent ?? ''
    setFilter(value.toString())
  }

  return (
    <section className="w-full sm:w-11/12 lg:w-10/12 2x1:w-section mt-6 h-full py-12 lg:py-0 lg:h-section-layout shadow-lg flex justify-center items-center bg-white-bg">
      <article className="grid grid-cols-portfolio-col justify-center w-10/12 items-center gap-5">
        <Subtitle>
          <span className="largerPrint">P</span>royectos
        </Subtitle>
        <ul className="text-xs text-gray-400 leading-snug flex flex-col gap-3 cursor-pointer">
          <li className="hover:text-yellow-select" onClick={handleChange}>
            Últimos proyectos
          </li>
          <li className="hover:text-yellow-select" onClick={handleChange}>
            React / Next
          </li>
          <li className="hover:text-yellow-select" onClick={handleChange}>
            Apis / Base de datos
          </li>
          <li className="hover:text-yellow-select" onClick={handleChange}>
            Random
          </li>
        </ul>
        {proyects.map((proyect) => {
          return (
            <Proyect
              key={proyect.title}
              title={proyect.title}
              img={proyect.img}
              description={proyect.description}
              github={proyect.github}
              url={proyect.url}
              technologies={proyect.technologies}
              gif={proyect.gif}
            />
          )
        })}
      </article>
    </section>
  )
}

export default Portfolio
