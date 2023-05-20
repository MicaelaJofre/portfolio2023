import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Home/Hero'
import Portfolio from './Components/Portfolio/Portfolio'

export default function Home() {
  return (
    <main className="w-full h-auto pb-16 flex flex-col justify-center items-center gap-20 pt-16 relative">
      <Hero />
      <About />
      <Portfolio />
      <Contact/>
    </main>
  )
}
