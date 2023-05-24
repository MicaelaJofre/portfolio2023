'use client'
import Image from 'next/image'
import arrow from '../../../public/image/arrowDown.png'
import { useState } from 'react'

type Props = {
  title: string
  school: string
  description: string
  link: string
  date: string
}
const Certificate = ({ title, description, school, link, date }: Props) => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div className='w-full'>
      <div className="shadow-md p-2 w-full flex justify-between items-center text-sm font-semibold text-gray-600">
        <h2>{title}</h2>
        <Image onClick={handleShow} className={`cursor-pointer transition-all duration-1000 ${show ? 'rotate-180' : ''}`} width={20} height={20} alt="arrow" src={arrow} />
      </div>
      <div className={`overflow-hidden transition-all duration-1000 ease-in-out p-2 w-full flex justify-between items-center ${show ? 'max-h-96' : 'max-h-0'}`}>
        {show ? (
          <div className='flex flex-col gap-1 w-full'>
            <p className='text-sm font-semibold'>{school}</p>
            <p className='text-xs font-medium text-yellow-select'>{date}</p>
            <p className='text-xs'>{description}</p>
            <a href={link} target='_blank' className='text-xs cursor-pointer text-gray-600'><span className='font-medium'>Certificado: </span>{link}</a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Certificate
