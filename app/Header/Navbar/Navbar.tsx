const iconsnav = [
  {
    name: 'home'
  },
  {
    name: 'about'
  },
  {
    name: 'portfolio'
  },
  {
    name: 'certification'
  },
  {
    name: 'contact'
  }
]

const Navbar = () => {
  return (
    <nav>
      <ul>
        {iconsnav.map((icon) => {
          return <li key={icon.name}>{icon.name}</li>
        })}
      </ul>
    </nav>
  )
}

export default Navbar
