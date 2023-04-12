import artistImg from '../../../public/image/portfolio/coder1.jpg'
import Proyect from './Proyect'

const proyects = [
  {
    name: 'cristina',
    img: {
      src: artistImg
    }
  },
  {
    name: 'cristina',
    img: {
      src: artistImg
    }
  },
  {
    name: 'cristina',
    img: {
      src: artistImg
    }
  },
  {
    name: 'cristina',
    img: {
      src: artistImg
    }
  },
  {
    name: 'cristina',
    img: {
      src: artistImg
    }
  },
  {
    name: 'cristina',
    img: {
      src: artistImg
    }
  }
]

const Portfolio = () => {
  return (
    <section className="w-11/12 lg:w-10/12 mt-5 h-section-layout shadow-lg flex justify-center items-center bg-white-bg">
      <article className="grid grid-cols-portfolio-col justify-center w-10/12 items-center gap-5">
        <h2>
          <span className="largerPrint">P</span>royectos
        </h2>
        <ul className="text-xs text-gray-400 leading-snug flex flex-col gap-3 cursor-pointer">
          <li className="hover:text-yellow-select">Lorem </li>
          <li className="hover:text-yellow-select">Lorem ipsum </li>
          <li className="hover:text-yellow-select">Lorem </li>
          <li className="hover:text-yellow-select">Lorem ipsum</li>
        </ul>
        {proyects.map((proyect) => {
          return <Proyect key={proyect.name} name={`proyect-${proyect.name}`} img={proyect.img} />
        })}
      </article>
    </section>
  )
}

export default Portfolio
