import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-scroll';

const NavBar = () => {
  const [active, setActive] = useState(false);

  const click = () => setActive(!active)

  return (
    <>
      <button
        onClick={click}
        className={active ? 'navbar__button navbar__button active' : 'navbar__button'}
      >
        <span className={active ? 'active' : ''}></span>
        <span className={active ? 'active' : ''}></span>
        <span className={active ? 'active' : ''}></span>
      </button>
      <nav className={active ? 'navbar active' : 'navbar'}>
        <ul className={active ? 'navbar__list active' : 'navbar__list'}>
          <li className='navbar__list-item'><Link smooth={false} to='projects' onClick={click}>Projects</Link></li>
          <li className='navbar__list-item navbar__list-item-deco' onClick={click}><Link smooth={false} to='bio'>About Me</Link></li>
          <li className='navbar__list-item'><Link smooth={false} to='contact' onClick={click}>Contact</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar