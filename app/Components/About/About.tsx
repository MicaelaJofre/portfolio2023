import CssIcon from '../Icons/IconsAbout/CssIcon'
import HtmlIcon from '../Icons/IconsAbout/HtmlIcon'
import JavaScriptIcon from '../Icons/IconsAbout/JavaScriptIcon'
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
  }
]

const About = () => {
  return (
    <section className="w-11/12 h-section-layout shadow-lg flex justify-center items-center bg-white-bg">
      <article className="flex justify-center items-center w-10/12 gap-20">
        <div className="flex flex-col justify-center w-7/12 gap-1">
          <h2>
            <span className="largerPrint">S</span>obre mi
          </h2>
          <p className="text-sm font-normal text-gray-400 uppercase tracking-widest">Hola mundo!</p>
          <h3 className="font-bold text-black text-2xl">Soy Desarrolladora Fullstack.</h3>
          <p className="text-xs leading-snug">
            Desde que completé mis estudios en Coderhouse en 2022, he estado trabajando en proyectos interesantes y desafiantes. Estoy comprometida
            con el aprendizaje constante y la mejora de mis habilidades en desarrollo web.
          </p>
          <p className="text-xs leading-snug">
            Si deseas saber más sobre mí, puedes consultar mi
            <a href="#"> Curriculum</a> o visitar mi perfil de
            <a href="#"> Linkedin</a>.
          </p>
        </div>
        <div className="w-3/12 grid grid-cols-about-col gap-4 justify-center items-center p-10">
          {icons.map((icon) => {
            return <AboutIcon key={icon.name} Svg={icon.svg} name={icon.name} />
          })}
        </div>
      </article>
    </section>
  )
}

export default About
