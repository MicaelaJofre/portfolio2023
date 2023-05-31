import AboutIcon from '@/app/Components/Icons/IconNavbar/AboutIcon'
import CertificatesIcon from '@/app/Components/Icons/IconNavbar/CertificatesIcon'
import ContactIcon from '@/app/Components/Icons/IconNavbar/ContactIcon'
import HomeIcon from '@/app/Components/Icons/IconNavbar/HomeIcon'
import PortfolioIcon from '@/app/Components/Icons/IconNavbar/PortfolioIcon'
import NavbarIcons from './NavbarIcons'

const iconsnav = [
  {
    name: 'home',
    svg: HomeIcon,
    target: 'tohome'
  },
  {
    name: 'about',
    svg: AboutIcon,
    target: 'toabout'
  },
  {
    name: 'portfolio',
    svg: PortfolioIcon,
    target: 'toportfolio'
  },
  {
    name: 'certificates',
    svg: CertificatesIcon,
    target: 'tocertificates'
  },
  {
    name: 'contact',
    svg: ContactIcon,
    target: 'tocontact'
  }
]

const Navbar = () => {
  return (
    <nav id="navbar" className="fixed w-full px-2 md:p-0">
      <ul className="flex md:gap-8 gap-5  justify-center p-4">
        {iconsnav.map(({ name, svg, target }) => {
          return <NavbarIcons key={'navbar-' + name} name={name} Svg={svg} target={target} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar
