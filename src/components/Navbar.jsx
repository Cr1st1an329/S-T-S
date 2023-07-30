import {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import {GoRows} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import {links} from '../data'

const Navbar = () => {

  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" className='rounder-img'/>
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
          {
            links.map(({name, path}, index) => {
              return(
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        
        <button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose/> : <GoRows/>
          }
        </button>

      </div>
    </nav>
  )
}

export default Navbar