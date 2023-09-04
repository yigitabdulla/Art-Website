import "../styles/navbar.css"
import logo from "/Images/logo.png"
import { useRef } from "react"

function Navbar() {

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("dropdown-menu")
  }

  return (
    <>
      <nav className="navbar">
        <a href="/"><img className="logo" src={logo}/></a>
        <ul>
          <li><a href="/">Ana Sayfa</a></li>
          <li><a href="/About">Hakkımda</a></li>
          <li><a href="/Art">Galeri</a></li>
          <li><a href="/Contact">İletişim</a></li>
        </ul>
        <div className="toggle-button" onClick={showNavbar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      </nav>

      <div className="dropdown-close" ref={navRef}>
          <ul>
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/About">Hakkımda</a></li>
            <li><a href="/Art">Galeri</a></li>
            <li><a href="/Contact">İletişim</a></li>
          </ul>
      </div>
    </>
  )
}

export default Navbar