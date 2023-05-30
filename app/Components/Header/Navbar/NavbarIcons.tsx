'use client'
import { IconProps } from '@/app/Components/Icons/IconsTypes'

type Props = {
  name: string
  Svg: ({ color, width, height }: IconProps) => JSX.Element
  handleIcon: ({ name }: { name: string }) => void
  active: boolean
}

const NavbarIcons = ({ name, Svg, handleIcon, active }: Props) => {
  const handleClick = () => {
    handleIcon({ name })
  }

  return (
    <a
      href={`#${name}`}
      className={active ? 'rounded-full p-2 bg-yellow-500 shadow-xl z-20 arrow' : 'rounded-full p-2 bg-white-bg shadow-xl  z-20 arrow'}
      onClick={handleClick}
    >
      <Svg width={17} height={17} color={'#181616'} />
    </a>
  )
}

export default NavbarIcons
