import { IconProps } from '../IconNavbar/IconsTypes'

function WhatsApp({ color, width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 1792 1792"
    >
      <path d="M1113 974q13 0 97.5 44t89.5 53q2 5 2 15 0 33-17 76-16 39-71 65.5t-102 26.5q-57 0-190-62-98-45-170-118T604 889q-72-107-71-194v-8q3-91 74-158 24-22 52-22 6 0 18 1.5t19 1.5q19 0 26.5 6.5T738 544q8 20 33 88t25 75q0 21-34.5 57.5T727 811q0 7 5 15 34 73 102 137 56 53 151 101 12 7 22 7 15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134 134-200.5 50-243.5-50-243.5T1354 432t-200.5-134T910 248t-243.5 50T466 432 332 632.5 282 876q0 203 120 368l-79 233 242-77q158 104 345 104zm0-1382q153 0 292.5 60T1443 343t161 240.5 60 292.5-60 292.5-161 240.5-240.5 161-292.5 60q-195 0-365-94l-417 134 136-405q-108-178-108-389 0-153 60-292.5T377 343t240.5-161T910 122z"></path>
    </svg>
  )
}

export default WhatsApp