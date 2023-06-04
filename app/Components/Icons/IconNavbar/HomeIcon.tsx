import React from 'react'
import { svgProps } from '../IconsTypes'

const HomeIcon = ({ width, height }: svgProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill='currentColor' className="octicon octicon-home-fill" viewBox="0 0 24 24">
      <path d="M12.97 2.59a1.5 1.5 0 00-1.94 0l-7.5 6.363A1.5 1.5 0 003 10.097V19.5A1.5 1.5 0 004.5 21h4.75a.75.75 0 00.75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 001.5-1.5v-9.403a1.5 1.5 0 00-.53-1.144l-7.5-6.363z"></path>
    </svg>
  )
}

export default HomeIcon
