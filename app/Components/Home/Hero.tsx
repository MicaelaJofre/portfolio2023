import Arrow from '../Icons/IconSocial/Arrow'
import Email from '../Icons/IconSocial/Email'
import GitHub from '../Icons/IconSocial/GitHub'
import Linkedin from '../Icons/IconSocial/Linkedin'
import WhatsApp from '../Icons/IconSocial/WhatsApp'
import Title from '../Title'

const Hero = () => {
  return (
    <section id="home" title="home" className="w-11/12 lg:w-10/12 mt-5 h-section-layout shadow-lg flex lg:flex-row flex-col justify-between bg-yellow-500">
      <article className="flex flex-col p-4 lg:pl-20 justify-center gap-10 lg:gap-7 w-full min-h-section">
        <Title>
          <span className="text-gray-100 text-5xl lg:text-8xl underline decoration-solid">M</span>icaela Jofre
        </Title>
        <p className="text-smleading-5 font-bold">
          ¡Gracias por visitar mi portafolio! Aquí encontrarás una selección de mis proyectos más recientes y una breve descripción de mi experiencia
          y habilidades.
        </p>
        <div className="flex gap-5 lg:gap-10 ">
          <a href="https://github.com/MicaelaJofre" target="_blank">
            <GitHub width={30} height={30} color={'#181616'} />
          </a>
          <a href="https://www.linkedin.com/in/micaela-analia-jofre/" target="_blank">
            <Linkedin width={30} height={30} color={'#181616'} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5492613041445&text=Hola, estoy interesado en " target="_blank">
            <WhatsApp width={30} height={30} color={'#181616'} />
          </a>
          <a href="mailto:mkjofre@gmail.com" target="_blank">
            <Email width={30} height={30} color={'#181616'} />
          </a>
        </div>
      </article>
      <article className="w-full h-16 lg:h-full lg:w-2/4 flex items-center justify-center lg:items-end lg:justify-end  p-8 ">
        <Arrow width={50} height={50} color={'#181616'} />
      </article>
    </section>
  )
}

export default Hero
