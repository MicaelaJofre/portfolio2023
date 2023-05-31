'use client'

import { useEffect, useRef, useState } from 'react'
import Proyects from '../Proyects.json'

type UserData = {
  filter?: string
}

export const useFilter = ({ filter }: UserData) => {
  const listProyect = Proyects.slice(0, 6)
  const [proyects, setproyects] = useState(listProyect)
  const newProyects = useRef(listProyect)

  const getproyects = () => {
    switch (filter) {
      case 'Últimos proyectos':
        setproyects(listProyect)
        break

      case 'React / Next':
        newProyects.current = Proyects.filter((proyect) => proyect.category === 'react/next')
        setproyects(newProyects.current)
        break

      case 'Apis / Base de datos':
        newProyects.current = Proyects.filter((proyect) => proyect.category === 'api')
        setproyects(newProyects.current)
        break

      case 'Random':
        newProyects.current = Proyects.filter((proyect) => proyect.category === 'random')
        setproyects(newProyects.current)
        break
    }
  }

  useEffect(() => {
    getproyects()
  }, [filter])

  return {
    proyects
  }
}
