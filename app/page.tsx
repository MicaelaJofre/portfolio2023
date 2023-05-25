import About from './Components/About/About'
import Certificates from './Components/Certificates/Certificates'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Home/Hero'
import Portfolio from './Components/Portfolio/Portfolio'

export default function Home() {
  return (
    <main id="home" className="w-full h-auto pb-16 flex flex-col justify-center items-center gap-20 pt-16">
      <div className='w-full flex justify-center items-center'>
        <Hero />
      </div>
      <div id="about" className='pt-14 w-full 2x1:w-9/12 flex justify-center items-center'>
        <About/>
      </div>
      <div id="portfolio" className='pt-14 w-full 2x1:w-9/12 flex justify-center items-center'>
        <Portfolio />
      </div>
      <div id="certificates" className='pt-14 w-full 2x1:w-9/12 flex justify-center items-center'>
        <Certificates/>
      </div>
      <div id="contact" className='pt-11 w-full 2x1:w-9/12 flex justify-center items-center'>
        <Contact/>
      </div>
    </main>
  )
}
