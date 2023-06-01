import Arrow from '../Icons/IconSocial/Arrow'
import Email from '../Icons/IconSocial/Email'
import GitHub from '../Icons/IconSocial/GitHub'
import Linkedin from '../Icons/IconSocial/Linkedin'
import WhatsApp from '../Icons/IconSocial/WhatsApp'
import Title from '../Title'

const Hero = () => {
  return (
    <section className='w-full sm:w-11/12 lg:w-10/12 2x1:w-section pt-6 pb-20 sm:pb-0 lg:pt-10 h-full flex justify-center items-center hero'>
      <article className="w-full  h-section-layout 2x1:h-lgSection flex lg:flex-row flex-col justify-between">
      <div className="flex flex-col p-12 lg:pl-20 justify-center items-center md:items-start w-full gap-6 lg:gap-4 md:w-8/12 min-h-section">
        <Title>
          <span className="text-gray-icon text-6xl lg:text-8xl decoration-solid">M</span>icaela Jofré
        </Title>
        <p className="md:text-gray-600 text-gray-icon font-bold text-xs md:text-sm text-center md:text-left">
          ¡Gracias por visitar mi portafolio! Aquí encontrarás una selección de mis proyectos más recientes y una breve descripción de mi experiencia
          y habilidades.
        </p>
        <div className="flex gap-5 lg:gap-10 ">
          <a className='link hover:bg-yellow-select rounded-full' href="https://github.com/MicaelaJofre" target="_blank">
            <GitHub width={30} height={30} color={'#181616'} />
          </a>
          <a className='link hover:bg-yellow-select rounded-lg' href="https://www.linkedin.com/in/micaela-analia-jofre/" target="_blank">
            <Linkedin width={30} height={30} color={'#181616'} />
          </a>
          <a className='link hover:bg-yellow-select rounded-full' href="https://api.whatsapp.com/send?phone=5492613041445" target="_blank">
            <WhatsApp width={30} height={30} color={'#181616'} />
          </a>
          <a className='link hover:bg-yellow-select rounded-full' href="mailto:mkjofre@gmail.com" target="_blank">
            <Email width={30} height={30} color={'#181616'} />
          </a>
        </div>
      </div>
      <a href='#about' className="w-full h-16 lg:h-full lg:w-2/4 flex items-center justify-center md:items-end md:justify-end p-8">
        <Arrow width={50} height={50} color={'#181616'} />
      </a>
      </article>
    </section>
  )
}

export default Hero
