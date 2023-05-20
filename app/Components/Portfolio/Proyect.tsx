'use client'
import React, { useState } from 'react'
import Image from 'next/image'

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

  const handleModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setModal(!modal)
  }

  return (
    <article>
      <div onClick={handleModal} className="shadow-md px-3 py-1 flex justify-center arrow cursor-pointer flex-col gap-2">
        <Image width={400} height={400} src={img ?? ''} alt={title} />
        <p className="text-xs font-semibold text-gray-400 hover:text-yellow-select ">Ver más</p>
      </div>
      {modal ? (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black-bg blur-2xl">
          <div className="rounded-lg items-center shadow-2xl w-11/12 md:w-8/12 2xl:w-6/12 lg:pb-4 max-h-modal flex flex-col bg-white-bg relative">
            <p onClick={handleModal} className='absolute right-4 top-2 flex justify-end cursor-pointer font-extrabold text-yellow-select text-2xl'>X</p>
            <Image className='w-full max-h-80 rounded-tl-lg rounded-tr-lg object-cover' width={400} height={400} src={gif} alt={title} />
            <div className="p-4 text-center sm:p-2 md:col-span-2 lg:p-4">
              <h2 className="mt-2 font-black uppercase">{title}</h2>
              <p className="md:mt-2 md:px-10 text-xs block md:text-sm">{description}</p>
              <p className="mt-2 block text-xs md:text-sm font-semibold">{technologies}</p>
              <a className="mt-3 inline-block w-10/12 bg-black py-2 text-sm font-bold uppercase tracking-widest text-white" href={github}>
                GitHub
              </a>
              {url ? (
                <a className="mt-2 inline-block w-10/12 bg-black py-2 text-sm font-bold uppercase tracking-widest text-white" href={url}>
                  Sitio web
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </article>
  )
}

export default Proyect
