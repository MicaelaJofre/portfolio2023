import About from './Components/About/About'
import Hero from './Components/Home/Hero'
import Portfolio from './Components/Portfolio/Portfolio'

export default function Home() {
  return (
    <main className="w-full h-auto pb-16 flex flex-col justify-center items-center gap-20 pt-16">
      <Hero />
      <About />
      <Portfolio />
    </main>
  )
}
