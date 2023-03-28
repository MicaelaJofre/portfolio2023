import AboutIcon from '@/app/Components/Icons/AboutIcon'
import CertificatesIcon from '@/app/Components/Icons/CertificatesIcon'
import ContactIcon from '@/app/Components/Icons/ContactIcon'
import HomeIcon from '@/app/Components/Icons/HomeIcon'
import PortfolioIcon from '@/app/Components/Icons/PortfolioIcon'

const iconsnav = [
  {
    name: 'home',
    svg: <HomeIcon />
  },
  {
    name: 'about',
    svg: <AboutIcon />
  },
  {
    name: 'portfolio',
    svg: <PortfolioIcon />
  },
  {
    name: 'certificates',
    svg: <CertificatesIcon />
  },
  {
    name: 'contact',
    svg: <ContactIcon />
  }
]

const Navbar = () => {
  return (
    <nav className="fixed w-full">
      <ul className="flex gap-8 justify-center p-4">
        {iconsnav.map((icon) => {
          return (
            <li key={icon.name} className="rounded-full p-2 bg-gray-300">
              {icon.svg}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
