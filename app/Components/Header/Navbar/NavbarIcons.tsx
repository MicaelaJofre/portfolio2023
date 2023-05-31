import { IconProps } from '@/app/Components/Icons/IconsTypes'

type Props = {
  name: string
  Svg: ({ color, width, height }: IconProps) => JSX.Element
  target: string
}

const NavbarIcons = ({ name, Svg, target }: Props) => {
  return (
    <a
      href={`#${name}`}
      id={target}
      className='rounded-full p-2 shadow-xl z-20 arrow bg-gray-50'
    >
      <Svg width={17} height={17} color={'#181616'} />
    </a>
  )
}

export default NavbarIcons
