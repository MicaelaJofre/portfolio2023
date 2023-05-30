'use client'
import AboutIcon from '@/app/Components/Icons/IconNavbar/AboutIcon'
import CertificatesIcon from '@/app/Components/Icons/IconNavbar/CertificatesIcon'
import ContactIcon from '@/app/Components/Icons/IconNavbar/ContactIcon'
import HomeIcon from '@/app/Components/Icons/IconNavbar/HomeIcon'
import PortfolioIcon from '@/app/Components/Icons/IconNavbar/PortfolioIcon'
import NavbarIcons from './NavbarIcons'
import { useNavIcon } from './Hooks/useNavIcon'

const iconsnav = [
  {
    name: 'home',
    svg: HomeIcon
  },
  {
    name: 'about',
    svg: AboutIcon
  },
  {
    name: 'portfolio',
    svg: PortfolioIcon
  },
  {
    name: 'certificates',
    svg: CertificatesIcon
  },
  {
    name: 'contact',
    svg: ContactIcon
  }
]

const Navbar = () => {
  const { selectedIcon, handleIcon } = useNavIcon()
  console.log(selectedIcon)

  return (
    <nav id="navbar" className="fixed w-full px-2 md:p-0">
      <ul className="flex md:gap-8 gap-5  justify-center p-4">
        {iconsnav.map(({ name, svg }) => {
          return <NavbarIcons key={'navbar-' + name} name={name} Svg={svg} active={name === selectedIcon} handleIcon={handleIcon}/>
        })}
      </ul>
    </nav>
  )
}

export default Navbar
