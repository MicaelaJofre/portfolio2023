import AboutIcon from '@/app/Components/Icons/IconNavbar/AboutIcon'
import CertificatesIcon from '@/app/Components/Icons/IconNavbar/CertificatesIcon'
import ContactIcon from '@/app/Components/Icons/IconNavbar/ContactIcon'
import HomeIcon from '@/app/Components/Icons/IconNavbar/HomeIcon'
import PortfolioIcon from '@/app/Components/Icons/IconNavbar/PortfolioIcon'
import NavbarIcons from './NavbarIcons'
import { IconProps } from '@/app/Components/Icons/IconsTypes'

export type IconsNav = {
  name: string
  Svg: IconProps
  target: string
}

const iconsnav : IconsNav[] = [
  {
    name: 'home',
    Svg: HomeIcon,
    target: 'tohome'
  },
  {
    name: 'about',
    Svg: AboutIcon,
    target: 'toabout'
  },
  {
    name: 'portfolio',
    Svg: PortfolioIcon,
    target: 'toportfolio'
  },
  {
    name: 'certificates',
    Svg: CertificatesIcon,
    target: 'tocertificates'
  },
  {
    name: 'contact',
    Svg: ContactIcon,
    target: 'tocontact'
  }
]

const Navbar = () => {
  return (
    <nav id="navbar" className="fixed w-full px-2 md:p-0">
      <ul className="flex md:gap-8 gap-5  justify-center p-4">
        {iconsnav.map(({ name, Svg, target }) => {
          return <NavbarIcons key={'navbar-' + name} name={name} Svg={Svg} target={target} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar
