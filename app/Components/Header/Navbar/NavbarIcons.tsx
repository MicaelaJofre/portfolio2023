import { IconProps } from '@/app/Components/Icons/IconsTypes'

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
    <li className={active ? 'rounded-full p-2 bg-yellow-500 shadow-xl arrow' : 'rounded-full p-2 bg-white-bg shadow-xl arrow'} onClick={handleClick}>
      <Svg width={17} height={17} color={'#181616'} />
    </li>
  )
}

export default NavbarIcons
