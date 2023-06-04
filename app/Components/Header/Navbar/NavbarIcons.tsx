import { IconProps } from '../../Icons/IconsTypes'

type Props = {
  name: string
  Svg: IconProps
  target: string
}

const NavbarIcons = ({ name, Svg, target }: Props) => {
  return (
    <li className="rounded-full p-2 shadow-xl z-20 arrow bg-gray-50 text-gray-icon" id={target}>
    <a href={`#${name}`} >
      <Svg width={17} height={17} />
    </a>
    </li>
  )
}

export default NavbarIcons
