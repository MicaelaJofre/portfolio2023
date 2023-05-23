import Subtitle from '../Subtitle'
import Email from '../Icons/IconSocial/Email'
import GitHub from '../Icons/IconSocial/GitHub'
import WhatsApp from '../Icons/IconSocial/WhatsApp'
import Linkedin from '../Icons/IconSocial/Linkedin'
import ContactIcon from './ContactIcon'

const data = [
  {
    name: 'email',
    svg: Email,
    link: 'mkjofre@gmail.com',
    href: 'mailto:mkjofre@gmail.com'
  },
  {
    name: 'whatsApp',
    svg: WhatsApp,
    link: '261-3041445',
    href: 'https://api.whatsapp.com/send?phone=5492613041445&text=Hola, estoy interesado en '
  },
  {
    name: 'linkedin',
    svg: Linkedin,
    link: 'www.linkedin.com/in/micaela-analia-jofre',
    href: 'https://www.linkedin.com/in/micaela-analia-jofre/'
  },
  {
    name: 'gitHub',
    svg: GitHub,
    link: 'https://github.com/MicaelaJofre',
    href: 'https://github.com/MicaelaJofre'
  }
]

const Contact = () => {
  return (
    <section className="w-full sm:w-11/12 lg:w-10/12 2x1:w-section mt-6 h-auto md:h-section-layout py-12 md:py-0 shadow-lg flex justify-center items-center bg-white-bg">
      <article className="flex flex-col md:flex-row w-10/12 items-center justify-between gap-10">
        <div className='flex flex-col justify-center w-full md:w-4/12 gap-1'>
          <Subtitle>
            <span className="largerPrint">C</span>ontacto
          </Subtitle>
          <p className='text-sm font-medium text-gray-500'>Escribime por cualquiera de los medios de contacto.</p>
          <p className='text-sm font-medium text-gray-500'>Voy a estar esperando tu mensaje!</p>
        </div>
        <div className='w-full md:w-6/12 grid grid-cols-contact-md lg:grid-cols-contact-lg 2x1:grid-cols-contact-2x1 gap-4 justify-center items-center p-2'>
          {data.map((d) => {
            return <ContactIcon key={d.name} Svg={d.svg} name={d.name} link={d.link} href={d.href} />
          })}
        </div>
      </article>
    </section>
  )
}

export default Contact
