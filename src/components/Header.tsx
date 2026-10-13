import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg'

type HeaderProps = {
  title: string
  subtitle: string
}

function Header({ title, subtitle }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header className="header">
      <div className="header-inner">
        <img src={logo} alt="" width={32} height={32} className="logo-icon" />
        <h1>{title}</h1>
      </div>
      <p>{subtitle}</p>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/register">Register</NavLink>
        <span className="likes-count">💜 {likes}</span>
      </nav>
    </header>
  )
}

export default Header