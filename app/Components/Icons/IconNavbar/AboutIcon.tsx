import React from 'react'
import { IconProps } from '../IconsTypes'

const AboutIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox="0 0 1792 1792">
      <path d="M1536 1399q0 109-62.5 187t-150.5 78H469q-88 0-150.5-78T256 1399q0-85 8.5-160.5t31.5-152 58.5-131 94-89T583 832q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zm-256-887q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z"></path>
    </svg>
  )
}

export default AboutIcon
