import {Outlet} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul className='navbar--item-wraper'>
          <li className='narbar--item'>Projects</li>
          <li className='narbar--item'>About Me</li>
          <li className='narbar--item'>Contact</li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar