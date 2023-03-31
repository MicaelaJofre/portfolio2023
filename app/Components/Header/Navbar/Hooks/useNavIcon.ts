import { useState } from 'react'

export const useNavIcon = () => {
  const [selectedIcon, setSelectedIcon] = useState('')
  const handleIcon = ({ name, index }: { index: number; name: string }) => {
    setSelectedIcon(name)
  }
  return {
    selectedIcon,
    handleIcon
  }
}
