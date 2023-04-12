import Arrow from '../Icons/IconSocial/Arrow'
import Email from '../Icons/IconSocial/Email'
import GitHub from '../Icons/IconSocial/GitHub'
import Linkedin from '../Icons/IconSocial/Linkedin'
import WhatsApp from '../Icons/IconSocial/WhatsApp'

const Hero = () => {
  return (
    <section className="w-11/12 lg:w-10/12 mt-5 h-section-layout shadow-lg flex bg-yellow-500">
      <div className="flex flex-col pl-20 justify-center w-full">
        <h1 className="title">
          <span className="text-gray-100 text-8xl underline decoration-solid">M</span>icaela Jofre
        </h1>
        <p className='text-xs pt-4 tracking-wide leading-4 font-bold'>¡Gracias por visitar mi portafolio! Aquí encontrarás una selección de mis proyectos más recientes y una breve descripción de mi experiencia y habilidades. Abajo podrás ver un poco más acerca de mi historia y cómo he llegado a donde estoy hoy. ¡Bienvenidos!</p>
        <div className="flex gap-10 pt-5">
          <a href='#'><GitHub width={30} height={30} color={'#181616'} /></a>
          <a href='#'><Linkedin width={30} height={30} color={'#181616'} /></a>
          <a href='#'><WhatsApp width={30} height={30} color={'#181616'} /></a>
          <a href='#'><Email width={30} height={30} color={'#181616'} /></a>
        </div>
      </div>
      <div className='w-2/4 flex justify-end items-end p-8'>
        <Arrow width={50} height={50} color={'#181616'}/>
      </div>
    </section>
  )
}

export default Hero
