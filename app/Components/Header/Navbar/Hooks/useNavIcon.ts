import React, { useEffect, useState } from 'react'

export const useNavIcon = () => {
  const [selectedIcon, setSelectedIcon] = useState('')
  const sectionRef = React.useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('El elemento está visible')
          const name = entry.target.parentElement?.id
          console.log(name)
          if (name) setSelectedIcon(name)
        }
      })
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    const currentSectionRef = sectionRef.current

    if (currentSectionRef) {
      observer.observe(currentSectionRef)
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef)
      }
    }
  }, [])

  const handleIcon = ({ name, index }: { index?: number; name: string }) => {
    setSelectedIcon(name)
  }
  return {
    selectedIcon,
    handleIcon,
    sectionRef
  }
}
