import Image from 'next/image'
import perfil from '../../../public/image/avatar1.png'

const Hero = () => {
  return (
    <section className="w-11/12 h-section-layout shadow-lg flex">
      <div className="flex flex-col pl-28 justify-center w-full">
        <h1>
          <span className="largerPrint">M</span>icaela Jofre
        </h1>
        <p className="font-bold text-black opacity-70 text-xl">Soy Desarrolladora Fullstack</p>
        <p className="text-xs font-light p-2 pl-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
          since.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image width={220} height={220} className="" src={perfil} alt="" />
      </div>
    </section>
  )
}

export default Hero
