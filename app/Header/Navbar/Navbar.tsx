'use client'
import AboutIcon from '@/app/Components/Icons/AboutIcon'
import CertificatesIcon from '@/app/Components/Icons/CertificatesIcon'
import ContactIcon from '@/app/Components/Icons/ContactIcon'
import HomeIcon from '@/app/Components/Icons/HomeIcon'
import PortfolioIcon from '@/app/Components/Icons/PortfolioIcon'
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
  const { handleIcon, selectedIcon } = useNavIcon()
  return (
    <nav className="fixed w-full">
      <ul className="flex gap-8 justify-center p-4">
        {iconsnav.map(({ name, svg }, index) => {
          return <NavbarIcons key={'navbar-' + name} name={name} Svg={svg} index={index} active={name === selectedIcon} handleIcon={handleIcon} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar
