import { IconProps } from '../Icons/IconsTypes'

type Props = {
  name: string
  Svg: ({ color, width, height }: IconProps) => JSX.Element
}

const AboutIcon = ({ Svg, name }: Props) => {
  return (
    <div className="shadow-md p-3 flex justify-center items-center arrow">
      <Svg width={20} height={20} color={'#181616'} />
    </div>
  )
}

export default AboutIcon
