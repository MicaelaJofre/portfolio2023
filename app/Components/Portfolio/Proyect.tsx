import React from 'react'
import Image from 'next/image'

type StaticImageData = {
  src: string
}
type Props = {
  name: string
  img: StaticImageData
}

const Proyect = ({ img, name }: Props) => {
  const imageProps = typeof img === 'string' ? { src: img } : img
  return (
    <div className="shadow-md p-3 flex justify-center items-center">
      <Image width={400} height={400} src={imageProps.src} alt={name} />
    </div>
  )
}

export default Proyect
