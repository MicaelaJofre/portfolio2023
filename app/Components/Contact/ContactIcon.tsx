import { IconProps } from '../Icons/IconsTypes'

type Props = {
  name: string
  Svg: ({ color, width, height }: IconProps) => JSX.Element
  link: string
  href: string
}

const ContactIcon = ({ Svg, name, link, href }: Props) => {
  return (
    <div className="shadow-md p-3 flex flex-col justify-center items-center cursor-pointer">
      <Svg width={20} height={20} color={'#181616'} />
      <p>{name}</p>
      <a className='text-sm w-36 text-center truncate' href={href}>{link}</a>
    </div>
  )
}

export default ContactIcon
