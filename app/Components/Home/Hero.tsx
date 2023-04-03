import Image from 'next/image'
import perfil from '../../../public/image/perfil.jpg'
import AboutIcon from '../Icons/IconsAbout/CssIcon'

const Hero = () => {
  return (
    <section className="w-11/12 h-section-layout shadow-lg flex bg-white-bg">
      <div className="flex flex-col pl-28 justify-center w-7/12">
        <h1 className="text-4xl">
          <span className="largerPrint">M</span>icaela Jofre
        </h1>
        <p className="font-bold text-gray-400 text-sm">Developer Fullstack</p>
        <div className="flex gap-10 pt-4">
          <AboutIcon width={30} height={30} color={'#A6A6A6'} />
          <AboutIcon width={30} height={30} color={'#A6A6A6'} />
          <AboutIcon width={30} height={30} color={'#A6A6A6'} />
          <AboutIcon width={30} height={30} color={'#A6A6A6'} />
        </div>
      </div>
      <div className="w-3/12 flex justify-center items-center">
        <Image width={220} height={220} className="rounded-full border-4 border-gray-600" src={perfil} alt="avatar" />
      </div>
    </section>
  )
}

export default Hero
