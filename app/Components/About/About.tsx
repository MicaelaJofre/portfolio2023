import BootstrapIcon from '../Icons/IconsAbout/BootstrapIcon'
import CssIcon from '../Icons/IconsAbout/CssIcon'
import CypressIcon from '../Icons/IconsAbout/CypressIcon'
import ExpressIcon from '../Icons/IconsAbout/ExpressIcon'
import Firebase from '../Icons/IconsAbout/Firebase'
import GitIcon from '../Icons/IconsAbout/GitIcon'
import HtmlIcon from '../Icons/IconsAbout/HtmlIcon'
import JavaScriptIcon from '../Icons/IconsAbout/JavaScriptIcon'
import JestIcon from '../Icons/IconsAbout/JestIcon'
import JqueryIcon from '../Icons/IconsAbout/JqueryIcon'
import MongodbIcon from '../Icons/IconsAbout/MongodbIcon'
import NextIcon from '../Icons/IconsAbout/NextIcon'
import NodeIcon from '../Icons/IconsAbout/NodeIcon'
import ReactIcon from '../Icons/IconsAbout/ReactIcon'
import SassIcon from '../Icons/IconsAbout/SassIcon'
import tailwindicon from '../Icons/IconsAbout/TailwindIcon'
import TypeScriptIcon from '../Icons/IconsAbout/TypeScriptIcon'
/* import VisualIcon from '../Icons/IconsAbout/VisualIcon' */
/* import GitHub from '../Icons/IconSocial/GitHub' */
import WordpressIcon from '../Icons/IconsAbout/WordpressIcon'
import Subtitle from '../Subtitle'
import AboutIcon from './AboutIcon'
import { IconProps } from '../Icons/IconsTypes'

export type IconsAbout = {
  name: string
  Svg: IconProps
}

const icons : IconsAbout[] = [
  {
    name: 'html',
    Svg: HtmlIcon
  },
  {
    name: 'css',
    Svg: CssIcon
  },
  {
    name: 'bootstrap',
    Svg: BootstrapIcon
  },
  {
    name: 'sass',
    Svg: SassIcon
  },
  {
    name: 'tailwind',
    Svg: tailwindicon
  },
  {
    name: 'javaScript',
    Svg: JavaScriptIcon
  },
  {
    name: 'firebase',
    Svg: Firebase
  },
  {
    name: 'react',
    Svg: ReactIcon
  },
  {
    name: 'next',
    Svg: NextIcon
  },
  {
    name: 'jquery',
    Svg: JqueryIcon
  },
  {
    name: 'typeScript',
    Svg: TypeScriptIcon
  },
  {
    name: 'node',
    Svg: NodeIcon
  },
  {
    name: 'express',
    Svg: ExpressIcon
  },
  {
    name: 'mongoDB',
    Svg: MongodbIcon
  },
  {
    name: 'wordpress',
    Svg: WordpressIcon
  },
  {
    name: 'cypress',
    Svg: CypressIcon
  },
  {
    name: 'jest',
    Svg: JestIcon
  },
  /* {----borrar componente en caso de no utilizar
    name: 'visual studio code',
    svg: VisualIcon
  },
  {
    name: 'GitHub',
    svg: GitHub
  }, */
  {
    name: 'Git',
    Svg: GitIcon
  }
]

const About = () => {
  return (
    <section className="w-full sm:w-11/12 lg:w-10/12 2x1:w-section h-full flex justify-center items-center py-20 xs:py-3 md:py-0 lg:py-0 bg-white-bg">
      <article className="w-10/12 h-section-layout 2x1:h-lgSection flex lg:flex-row flex-col justify-center lg:justify-between">
        <div className="flex flex-col justify-center w-full lg:w-6/12 2x1:w-7/12 gap-1">
          <Subtitle>
            <span className="largerPrint">S</span>obre mi
          </Subtitle>
          <p className="text-xs font-normal text-gray-1 uppercase tracking-widest">Hola mundo!</p>
          <h3 className="font-bold text-gray-icon text-base sm:text-2xl">Soy Desarrolladora Fullstack.</h3>
          <p className="text-xs lg:text-sm text-gray-1 font-semibold leading-snug">
            Desde que completé mis estudios en Coderhouse en 2022, he estado trabajando en proyectos interesantes y desafiantes. Estoy comprometida
            con el aprendizaje constante y la mejora de mis habilidades en desarrollo web.
          </p>
          <p className="text-sm text-gray-1 font-semibold leading-snug">
            Si deseas saber más sobre mí, puedes consultar mi
            <a
              className="link text-yellow-select font-semibold"
              href="https://drive.google.com/file/d/1mCc6CEEJLlmWOJxynBCl2aUjfyQidnCi/view?usp=sharing"
              target="_blank"
            >
              {' '}
              Curriculum
            </a>{' '}
            o visitar mi perfil de
            <a className="link text-yellow-select font-semibold" href="https://www.linkedin.com/in/micaela-analia-jofre/" target="_blank">
              {' '}
              Linkedin
            </a>
            .
          </p>
        </div>
        <div className="w-full sm:w-10/12 lg:w-3/12 grid grid-cols-about-col gap-4 justify-center items-center py-5 2x1:p-10">
          {icons.map((icon) => {
            return <AboutIcon key={icon.name} Svg={icon.Svg} name={icon.name} />
          })}
        </div>
      </article>
    </section>
  )
}

export default About
