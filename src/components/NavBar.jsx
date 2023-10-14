import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
  const [active, setActive] = useState(false);

  const click = () => setActive(!active)

  return (
    <>
      <nav className='navbar'>
        <button
          onClick={click}
          className={active ? 'navbar__button navbar__button-active' : 'navbar__button'}
        >=</button>
        <ul className={active ? 'navbar__list navbar__list-active' :'navbar__list' }>
          <li className='navbar__list-item'>Projects</li>
          <li className='navbar__list-item navbar__list-item-deco'>About Me</li>
          <li className='navbar__list-item'>Contact</li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar