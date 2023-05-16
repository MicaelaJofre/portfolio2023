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
    href: 'www.linkedin.com/in/micaela-analia-jofre'
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
    <section className="w-11/12 lg:w-10/12 mt-5 h-section-layout shadow-lg flex justify-center items-center bg-white-bg">
      <article className="flex w-10/12 items-center gap-10">
        <Subtitle>
          <span className="largerPrint">C</span>ontacto
        </Subtitle>
        <div className='grid grid-cols-contact-col w-1/2 gap-8'>
          {data.map((d) => {
            return <ContactIcon key={d.name} Svg={d.svg} name={d.name} link={d.link} href={d.href} />
          })}
        </div>
      </article>
    </section>
  )
}

export default Contact
