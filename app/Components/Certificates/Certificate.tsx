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
  openDropdown: string
  setOpenDropdown: (title: string)=> void;
}
const Certificate = ({ title, description, school, link, date, setOpenDropdown, openDropdown }: Props) => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setOpenDropdown(title)
    setShow(!show)
  }
  return (
    <div className='w-full cursor-pointer' onClick={handleShow}>
      <div className="shadow-md p-2 w-full flex justify-between items-center text-sm font-semibold text-gray-1">
        <h2>{title}</h2>
        <Image className={`cursor-pointer transition-all duration-500 ${openDropdown === title && show ? 'rotate-180' : ''}`} width={20} height={20} alt="arrow" src={arrow} />
      </div>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out p-2 w-full flex justify-between items-center ${openDropdown === title && show ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className='flex flex-col gap-1 w-full'>
            <p className='text-sm font-semibold text-gray-icon'>{school}</p>
            <p className='text-xs font-medium text-yellow-select text-gray-2'>{date}</p>
            <p className='text-xs'>{description}</p>
            <a href={link} target='_blank' className='text-xs cursor-pointer text-gray-1'><span className='font-medium text-gray-2'>Certificado: </span>{link}</a>
          </div>
      </div>
    </div>
  )
}

export default Certificate
