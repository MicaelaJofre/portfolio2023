import Subtitle from '../Subtitle'
import Certificate from './Certificate'

const data = [
  {
    title: 'Carrera de desarrollo Frontend React.',
    school: 'Coderhouse',
    description:
      'La carrera de Frontend se enfoca en el diseño y desarrollo web, y se compone de cinco áreas principales: HTML, CSS, Javascript, JQuery y React Js. Este curso brinda una base sólida en el diseño y desarrollo web, lo que permite construir aplicaciones web avanzadas de manera rápida y sencilla.',
    link: 'https://drive.google.com/file/d/1CH2nZkFf047zsFsHe-k8tmsvfpV_MWsg/view?usp=sharing',
    date: '20 de marzo 2022'
  },
  {
    title: 'Desarrollador Fullstack',
    school: 'University of Helsinki',
    description:
      'Curso de introducción al desarrollo de aplicaciones web modernas con JavaScript. El enfoque principal es crear aplicaciones de una sola página con ReactJS que utilizan API REST creadas con Node.js. El curso también contiene una sección sobre GraphQL, una alternativa moderna a REST API.',
    link: 'https://drive.google.com/file/d/1iiMS0G4jTTw2fZlvJhYc3dxM46k78Lo2/view?usp=sharing',
    date: '15 de febrero 2023'
  },
  {
    title: 'Fundamentos de Node js.',
    school: 'Platzi',
    description:
      'El curso abarca los conceptos fundamentales de Node.js, incluyendo la gestión de la asincronía y el entendimiento de los módulos del core. También se enseña a utilizar módulos y paquetes externos para ampliar las capacidades de Node.js.',
    link: 'https://drive.google.com/file/d/1O2OYWm1r3lNHDZxNSA3E7sHup8RU5zF0/view?usp=sharing',
    date: '25 de enero 2023'
  },
  {
    title: 'Asincronismo con JavaScript.',
    school: 'Platzi',
    description:
      'El curso te brinda la oportunidad de aprender los conceptos fundamentales del asincronismo en JavaScript. Además, se enfoca en el entendimiento del Event Loop, los Callbacks y las promesas. A través de esto, podrás aplicar funciones asíncronas en tus proyectos y aprender a interactuar con APIs de manera efectiva.',
    link: 'https://drive.google.com/file/d/1qwN2HE_EFAvMrIPiAHLDUbE9ZxiRc3-j/view?usp=sharing',
    date: '11 de enero 2023'
  }
]

const Certificates = () => {
  return (
    <section id='certificates' className="w-full sm:w-11/12 lg:w-10/12 2x1:w-section mt-6 overflow-hidden h-auto md:h-section-layout py-12 md:py-0 shadow-lg flex justify-center items-center bg-white-bg">
      <article className="flex flex-col md:flex-row w-10/12 items-center justify-between gap-10">
        <div className="flex flex-col justify-center w-full md:w-4/12 gap-1">
          <Subtitle>
            <span className="largerPrint">C</span>ertificados
          </Subtitle>
          <p className="text-sm font-medium text-gray-500">En esta sección, encontrarás los cursos más importantes que he realizado desde que comencé en la programación. Si deseas ver más puedes ver mi curriculum o ir a mi perfil de Linkedin.</p>
        </div>
        <div className="w-full md:w-6/12 flex flex-col gap-4 justify-center items-center p-2">
          {data.map((d) => {
            return <Certificate key={d.title} title={d.title} school={d.school} description={d.description} link={d.link} date={d.date}/>
          })}
        </div>
      </article>
    </section>
  )
}

export default Certificates
