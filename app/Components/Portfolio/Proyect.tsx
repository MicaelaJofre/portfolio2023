import React from 'react'
import Image from 'next/image'

type Props = {
  title: string,
  description: string,
  url: string,
  github: string,
  img?: string
}

const Proyect = ({ img, title, description, url, github }: Props) => {
  return (
    <div className="shadow-md p-3 flex justify-center items-center arrow cursor-pointer">
      <Image width={400} height={400} src={img ?? ''} alt={title} />
    </div>
  )
}

export default Proyect
