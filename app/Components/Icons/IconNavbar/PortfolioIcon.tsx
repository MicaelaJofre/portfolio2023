import React from 'react'
import { svgProps } from '../IconsTypes'

const PortfolioIcon = ({ width, height }: svgProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill='currentColor' className="octicon octicon-file-directory" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"
      ></path>
    </svg>
  )
}

export default PortfolioIcon
