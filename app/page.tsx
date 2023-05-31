'use client'
import About from './Components/About/About'
import Certificates from './Components/Certificates/Certificates'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Home/Hero'
import Portfolio from './Components/Portfolio/Portfolio'
import Waypoints from './Components/utils/Waypoints'

export default function Home() {
  return (
    <main className="w-full h-auto pb-16 flex flex-col justify-center items-center gap-40">
      <Waypoints target={'tohome'}>
        <div id="home" className='w-screen flex justify-center items-center pt-20'>
          <Hero />
        </div>
      </Waypoints>
      <Waypoints target={'toabout'}>
        <div id="about" className='w-screen flex justify-center items-center pt-10'>
          <About/>
        </div>
      </Waypoints>
      <Waypoints target={'toportfolio'}>
        <div id="portfolio" className='w-screen flex justify-center items-center pt-10'>
          <Portfolio />
        </div>
      </Waypoints>
      <Waypoints target={'tocertificates'}>
        <div id="certificates" className='w-screen flex justify-center items-center pt-10'>
          <Certificates/>
        </div>
      </Waypoints>
      <Waypoints target={'tocontact'}>
        <div id="contact" className='w-screen flex justify-center items-center'>
          <Contact/>
        </div>
      </Waypoints>
    </main>
  )
}
