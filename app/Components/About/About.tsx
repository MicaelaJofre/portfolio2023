'use client'

/* import GitHub from '../Icons/IconSocial/GitHub' */
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
import WordpressIcon from '../Icons/IconsAbout/WordpressIcon'
import Subtitle from '../Subtitle'
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
    name: 'bootstrap',
    svg: BootstrapIcon
  },
  {
    name: 'sass',
    svg: SassIcon
  },
  {
    name: 'tailwind',
    svg: tailwindicon
  },
  {
    name: 'javaScript',
    svg: JavaScriptIcon
  },
  {
    name: 'firebase',
    svg: Firebase
  },
  {
    name: 'react',
    svg: ReactIcon
  },
  {
    name: 'next',
    svg: NextIcon
  },
  {
    name: 'jquery',
    svg: JqueryIcon
  },
  {
    name: 'typeScript',
    svg: TypeScriptIcon
  },
  {
    name: 'node',
    svg: NodeIcon
  },
  {
    name: 'express',
    svg: ExpressIcon
  },
  {
    name: 'mongoDB',
    svg: MongodbIcon
  },
  {
    name: 'wordpress',
    svg: WordpressIcon
  },
  {
    name: 'cypress',
    svg: CypressIcon
  },
  {
    name: 'jest',
    svg: JestIcon
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
    svg: GitIcon
  }
]

const About = () => {
  return (
    <section id="about" title="about" className="w-11/12 lg:w-10/12 mt-5 h-section-layout shadow-lg flex justify-center items-center bg-white-bg">
      <article className="flex justify-center items-center w-full lg:w-11/12 gap-20">
        <div className="flex flex-col justify-center w-7/12 gap-1">
          <Subtitle>
            <span className="largerPrint">S</span>obre mi
          </Subtitle>
          <p className="text-xs font-normal text-gray-500 uppercase tracking-widest">Hola mundo!</p>
          <h3 className="font-bold text-[#181616] text-2xl">Soy Desarrolladora Fullstack.</h3>
          <p className="text-sm text-gray-600 font-semibold leading-snug">
            Desde que completé mis estudios en Coderhouse en 2022, he estado trabajando en proyectos interesantes y desafiantes. Estoy comprometida
            con el aprendizaje constante y la mejora de mis habilidades en desarrollo web.
          </p>
          <p className="text-sm text-gray-600 font-semibold leading-snug">
            Si deseas saber más sobre mí, puedes consultar mi
            <a href="https://drive.google.com/file/d/1mCc6CEEJLlmWOJxynBCl2aUjfyQidnCi/view?usp=sharing" target='_blank'> Curriculum</a> o visitar mi perfil de
            <a href="https://www.linkedin.com/in/micaela-analia-jofre/" target='_blank'> Linkedin</a>.
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
