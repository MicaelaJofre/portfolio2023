import { IconProps } from '../Icons/IconsTypes'
import { useTech } from './useTech'

type Props = {
  name: string
  Svg: IconProps
}

const AboutIcon = ({ Svg, name }: Props) => {
  const { handleMouseEnter, handleMouseLeave, showTooltip } = useTech()
  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="shadow-md p-3 flex justify-center items-center arrow text-gray-1">
        <Svg width={20} height={20}/>
      </div>
      {showTooltip && (
        <div className="absolute -top-5 left-4 -translate-x-1/2 bg-yellow-select text-white py-1 px-2 z-10 rounded text-sm whitespace-nowrap">
          {name}
        </div>
      )}
    </div>
  )
}

export default AboutIcon
