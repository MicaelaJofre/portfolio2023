import Image from 'next/image'
import close from '../../../public/image/close.png'

type Props = {
  title: string
  description: string
  url: string
  github: string
  technologies: string
  gif: string
  handleModal: () => void
}

const Modal = ({ title, description, url, github, technologies, gif, handleModal }: Props) => {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black-bg blur-2xl">
      <div className="rounded-lg items-center shadow-2xl w-11/12 md:w-6/12 2xl:w-6/12 lg:pb-4 max-h-modal flex flex-col bg-white-bg relative">
        <Image width={30} height={30} src={close} alt='close' onClick={handleModal} className="absolute right-4 top-2 flex justify-end cursor-pointer font-extrabold text-yellow-select text-2xl"/>
        <Image className="w-full h-72 rounded-tl-lg rounded-tr-lg object-cover" width={400} height={400} src={gif} alt={title} />
        <div className="p-4 text-center sm:p-2 md:col-span-2 lg:p-4">
          <h2 className="mt-2 font-black text-sm uppercase">{title}</h2>
          <p className="md:mt-2 md:px-10 text-xs block">{description}</p>
          <p className="mt-2 block text-xs font-semibold">{technologies}</p>
          <a className="mt-3 inline-block w-10/12 bg-black py-1 text-sm font-bold uppercase tracking-widest text-white" href={github}>
            GitHub
          </a>
          {url ? (
            <a className="mt-2 inline-block w-10/12 bg-black py-1 text-sm font-bold uppercase tracking-widest text-white" href={url}>
              Sitio web
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Modal
