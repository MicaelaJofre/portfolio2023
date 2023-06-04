'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Modal from './Modal'

type Props = {
  title: string
  description: string
  url: string
  github: string
  img?: string
  technologies: string
  gif: string
}

const Proyect = ({ img, title, description, url, github, technologies, gif }: Props) => {
  const [modal, setModal] = useState(false)
  const [loader, setLoader] = useState(false)

  const handleLoader = () => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }

  const handleModal = () => {
    handleLoader()
    setModal(!modal)
  }

  return (
    <article>
      <div onClick={handleModal} className="shadow-md px-3 py-1 flex justify-center arrow cursor-pointer flex-col gap-1  transition-all duration-1000">
        <Image width={400} height={400} src={img ?? ''} alt={title} />
        <p className="text-xs font-semibold text-gray-1 hover:text-yellow-select bg-white">Ver más</p>
      </div>
      {modal ? (
        <Modal
          title={title}
          description={description}
          github={github}
          url={url}
          technologies={technologies}
          gif={gif}
          handleModal={handleModal}
          loader={loader}
        />
      ) : null}
    </article>
  )
}

export default Proyect
