import Image from 'next/image'
import close from '../../../public/image/close.png'

type Props = {
  title: string
  description: string
  url: string
  github: string
  technologies: string
  gif: string
  handleModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  loader: boolean
}

const Modal = ({ title, description, url, github, technologies, gif, handleModal, loader }: Props) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }
  return (
    <div className="modal fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black-bg cursor-pointer" onClick={handleModal}>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        {loader ? (
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        ) : (
          <div
            className="rounded-lg items-center shadow-2xl max-h-[95%] sm:h-section-layout md:h-auto w-11/12 md:w-6/12 2xl:w-6/12 pb-2 lg:pb-4 max-h-modal flex flex-col bg-white-bg relative overflow-y-auto"
            onClick={stopPropagation}
          >
            <Image
              id="img-modal"
              width={30}
              height={30}
              src={close}
              alt="close"
              onClick={handleModal}
              className="img-lazy absolute z-10 right-4 top-2 flex justify-end cursor-pointer font-extrabold text-yellow-select text-2xl"
            />
            <video loop autoPlay muted width={400} height={400} className="w-full h-72 rounded-tl-lg rounded-tr-lg object-cover aspect-video">
              <source src={gif} type="video/mp4" />
            </video>
            <div className="p-4 text-center sm:p-2 md:col-span-2 lg:p-4">
              <h2 className="mt-2 font-black text-sm uppercase text-gray-icon">{title}</h2>
              <p className="md:mt-2 md:px-10 text-xs block text-gray-2">{description}</p>
              <p className="mt-2 block text-xs font-semibold text-gray-icon">{technologies}</p>
              <a
                className="link mt-3 inline-block w-10/12 bg-gray-icon py-1 text-sm font-bold uppercase tracking-widest text-white"
                href={github}
                target="_blank"
              >
                { github === 'https://productos-ai.com/' ? 'Landing Page' : 'GitHub' ]
              </a>
              {url ? (
                <a
                  className="link mt-2 inline-block w-10/12 bg-gray-icon py-1 text-sm font-bold uppercase tracking-widest text-white"
                  href={url}
                  target="_blank"
                >
                  Sitio web
                </a>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
