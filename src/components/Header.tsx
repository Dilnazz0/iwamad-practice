import { NavLink } from 'react-router'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <img src={logo} alt="" width={32} height={32} className="logo-icon" />
        <h1>Dilnaz - Personal Profile</h1>
      </div>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  )
}

export default Header