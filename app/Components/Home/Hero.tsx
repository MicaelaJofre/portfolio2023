import Image from 'next/image'
import perfil from '../../../public/image/avatar1.png'

const Hero = () => {
  return (
    <section className="w-11/12 h-section-layout shadow-2xl flex">
      <div className="flex flex-col pl-28 justify-center w-full">
        <p className="text-2xl font-bold text-gray-icon pb-2">
          <span className="text-7xl font-extrabold text-yellow-select underline">H</span>ola,
        </p>
        <h1 className="pb-2 font-semibold text-gray-icon">
          mi nombre es <span className="text-2xl font-extrabold text-black opacity-70">Micaela Jofre</span>
        </h1>
        <h2 className="font-bold text-black opacity-70 text-2xl">Soy Desarrolladora Fullstack</h2>
        <p className="text-xs p-2 pl-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image width={220} height={220} className="" src={perfil} alt="" />
      </div>
    </section>
  )
}

export default Hero
