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
        <div id="home" className='w-screen min-h-screen flex justify-center items-center pt-10'>
          <Hero />
        </div>
      </Waypoints>
      <Waypoints target={'toabout'}>
        <div id="about" className='w-screen min-h-screen flex justify-center items-center pt-10 mt-20'>
          <About/>
        </div>
      </Waypoints>
      <Waypoints target={'toportfolio'}>
        <div id="portfolio" className='w-screen min-h-screen flex justify-center items-center pt-10 mt-20'>
          <Portfolio />
        </div>
      </Waypoints>
      <Waypoints target={'tocertificates'}>
        <div id="certificates" className='w-screen min-h-screen flex justify-center items-center pt-10 mt-20'>
          <Certificates/>
        </div>
      </Waypoints>
      <Waypoints target={'tocontact'}>
        <div id="contact" className='w-screen min-h-screen flex justify-center items-center mt-20'>
          <Contact/>
        </div>
      </Waypoints>
    </main>
  )
}
