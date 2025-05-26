import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function NavBar() {
    const location = useLocation();

    const pathClass = location.pathname.replace('/', '') || 'home';
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className={`nav-bar ${pathClass}`}>
            <ul className="desk-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">our work</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">career</a></li>
            </ul>
            <NavLink to="/"><h1 className="logo"></h1></NavLink>
            <ul className="desk-nav extras">
                <li id="cont"><a href="#">contact us</a></li>
                <li id="en">en</li>
                <button>let's collaborate</button>
            <div className={`toggle ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
                <span className={`first ${pathClass}`}></span>
                <span className={`second ${pathClass}`}></span>
            </div>
            </ul>
            <ul className={`mobile-nav ${showMenu ? "show" : ""}`}>
                <li onClick={toggleMenu}><NavLink to="/">Home</NavLink></li>
                <li onClick={toggleMenu}><a href="#">about us</a></li>
                <li onClick={toggleMenu}><a href="#">our work</a></li>
                <li onClick={toggleMenu}><a href="#">services</a></li>
                <li onClick={toggleMenu}><a href="#">career</a></li>
            </ul>
        </div>
    )
}