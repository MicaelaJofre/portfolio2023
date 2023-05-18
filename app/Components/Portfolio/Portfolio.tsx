'use client'
import { useState } from 'react'
import Subtitle from '../Subtitle'
import Proyect from './Proyect'
import { useFilter } from './useFilter'

const Portfolio = () => {
  const [filter, setFilter] = useState('')
  const { proyects } = useFilter({ filter })

  const handleChange = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const value = e.currentTarget.textContent ?? ''
    setFilter(value.toString())
  }
  console.log(filter)

  return (
    <section className="w-11/12 lg:w-10/12 mt-5 h-section-layout shadow-lg flex justify-center items-center bg-white-bg">
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
            Apis
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
            />
          )
        })}
      </article>
    </section>
  )
}

export default Portfolio
