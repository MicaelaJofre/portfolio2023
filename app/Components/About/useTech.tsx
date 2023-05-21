'use client'

import { useState } from 'react'

export const useTech = () => {
  const [showTooltip, setShowTooltip] = useState(false)
  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }
  return {
    showTooltip,
    handleMouseEnter,
    handleMouseLeave
  }
}
