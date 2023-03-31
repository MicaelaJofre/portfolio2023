import { IconProps } from '@/app/Components/Icons/IconNavbar/IconsTypes'

type Props = {
  name: string
  Svg: ({ color, width, height }: IconProps) => JSX.Element
  index: number
  handleIcon: ({ index, name }: { index: number; name: string }) => void
  active: boolean
}

const NavbarIcons = ({ name, Svg, index, handleIcon, active }: Props) => {
  const handleClick = () => {
    handleIcon({ name, index })
  }
  return (
    <li className={active ? 'rounded-full p-2 bg-yellow-select shadow-xl' : 'rounded-full p-2 bg-white-bg shadow-xl'} onClick={handleClick}>
      <Svg width={17} height={17} color={'#918e8e'} />
    </li>
  )
}

export default NavbarIcons
