import { IconProps } from '../IconNavbar/IconsTypes'

function Arrow({ color, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      version="1.1"
      viewBox="0 0 24 24"
    >
      <path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2m0 15l5-5h-3V8h-4v4H7l5 5z"></path>
    </svg>
  )
}

export default Arrow