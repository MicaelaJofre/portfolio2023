import { IconProps } from '../Icons/IconsTypes'
import { useTech } from './useTech'

type Props = {
  name: string
  Svg: ({ color, width, height }: IconProps) => JSX.Element
}

const AboutIcon = ({ Svg, name }: Props) => {
  const { handleMouseEnter, handleMouseLeave, showTooltip } = useTech()
  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="shadow-md p-3 flex justify-center items-center arrow">
        <Svg width={20} height={20} color={'#181616'} />
      </div>
      {showTooltip && (
        <div className="absolute -top-5 -left-7 -translate-x-1/2 bg-yellow-select text-white py-1 px-2 z-10 rounded text-sm whitespace-nowrap">
          {name}
        </div>
      )}
    </div>
  )
}

export default AboutIcon
