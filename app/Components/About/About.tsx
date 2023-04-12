import GitHub from '../Icons/IconSocial/GitHub'
import BootstrapIcon from '../Icons/IconsAbout/BootstrapIcon'
import CssIcon from '../Icons/IconsAbout/CssIcon'
import ExpressIcon from '../Icons/IconsAbout/ExpressIcon'
import GitIcon from '../Icons/IconsAbout/GitIcon'
import HtmlIcon from '../Icons/IconsAbout/HtmlIcon'
import JavaScriptIcon from '../Icons/IconsAbout/JavaScriptIcon'
import JqueryIcon from '../Icons/IconsAbout/JqueryIcon'
import MongodbIcon from '../Icons/IconsAbout/MongodbIcon'
import NodeIcon from '../Icons/IconsAbout/NodeIcon'
import ReactIcon from '../Icons/IconsAbout/ReactIcon'
import SassIcon from '../Icons/IconsAbout/SassIcon'
import AboutIcon from './AboutIcon'

const icons = [
  {
    name: 'html',
    svg: HtmlIcon
  },
  {
    name: 'css',
    svg: CssIcon
  },
  {
    name: 'Bootstrap',
    svg: BootstrapIcon
  },
  {
    name: 'Sass',
    svg: SassIcon
  },
  {
    name: 'Tailwind',
    svg: JavaScriptIcon
  },
  {
    name: 'javaScript',
    svg: JavaScriptIcon
  },
  {
    name: 'React',
    svg: ReactIcon
  },
  {
    name: 'JQuery',
    svg: JqueryIcon
  },
  {
    name: 'TypeScript',
    svg: JavaScriptIcon
  },
  {
    name: 'Node',
    svg: NodeIcon
  },
  {
    name: 'Express',
    svg: ExpressIcon
  },
  {
    name: 'MongoDB',
    svg: MongodbIcon
  },
  {
    name: 'javaScript',
    svg: JavaScriptIcon
  },
  {
    name: 'otro',
    svg: JavaScriptIcon
  },
  {
    name: 'javaScript',
    svg: JavaScriptIcon
  },
  {
    name: 'otro',
    svg: JavaScriptIcon
  },
  {
    name: 'GitHub',
    svg: GitHub
  },
  {
    name: 'Git',
    svg: GitIcon
  }
]

const About = () => {
  return (
    <section className="w-11/12 lg:w-10/12 mt-5 h-section-layout shadow-lg flex justify-center items-center bg-white-bg">
      <article className="flex justify-center items-center w-full lg:w-11/12 gap-20">
        <div className="flex flex-col justify-center w-7/12 gap-1">
          <h2>
            <span className="largerPrint">S</span>obre mi
          </h2>
          <p className="text-xs font-normal text-gray-500 uppercase tracking-widest">Hola mundo!</p>
          <h3 className="font-bold text-[#181616] text-2xl">Soy Desarrolladora Fullstack.</h3>
          <p className="text-xs font-semibold leading-snug">
            Desde que completé mis estudios en Coderhouse en 2022, he estado trabajando en proyectos interesantes y desafiantes. Estoy comprometida
            con el aprendizaje constante y la mejora de mis habilidades en desarrollo web.
          </p>
          <p className="text-xs font-semibold leading-snug">
            Si deseas saber más sobre mí, puedes consultar mi
            <a href="#"> Curriculum</a> o visitar mi perfil de
            <a href="#"> Linkedin</a>.
          </p>
        </div>
        <div className="w-full lg:w-3/12 grid grid-cols-about-col gap-4 justify-center items-center p-10">
          {icons.map((icon) => {
            return <AboutIcon key={icon.name} Svg={icon.svg} name={icon.name} />
          })}
        </div>
      </article>
    </section>
  )
}

export default About
