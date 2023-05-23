import { IconProps } from '../Icons/IconsTypes'

type Props = {
  name: string
  Svg: ({ color, width, height }: IconProps) => JSX.Element
  link: string
  href: string
}

const ContactIcon = ({ Svg, name, link, href }: Props) => {
  return (
      <a className='link shadow-md p-2 cursor-pointer h-36 flex flex-col justify-center items-center text-sm text-center text-yellow-select' target='_blank' href={href}>
        <Svg width={30} height={30} color={'#181616'} />
        <p className='capitalize font-medium mt-2 text-gray-icon'>{name}</p>
        <p className='truncate w-11/12'>{link}</p>
      </a>
  )
}

export default ContactIcon
