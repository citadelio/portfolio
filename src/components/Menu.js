import React, {useState} from 'react'
import {Link} from 'react-router-dom'
const Menu = ({page}) => {
    const [menuClick, setMenuClick] = useState(false)
    const [collapse, setCollapse] = useState(false)
   const toggleMenu = () => {
    setMenuClick(!menuClick);
    setCollapse(!collapse);
   }
    return (
        <React.Fragment>
            <button onClick={toggleMenu} className={`navbar-toggler d-block ${menuClick ? "active" : ''}`} type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <svg className="ham hamRotate hams" viewBox="0 0 100 100" width="60">
                                <path className="line top"
                                        d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                                <path className="line middle"
                                        d="m 70,50 h -40" />
                                <path className="line bottom"
                                        d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                                </svg>
                            </button>
                            <div onClick={toggleMenu} className={`collapse navbar-collapse d-block ${collapse ? "collapse-open collapse-show" : ''} `} id="navbarText">
                                <ul className="navbar-nav ml-auto">
                                    <li className={`nav-item ${page === "home"? "active": ""}`}>
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    
                                    <li className={`nav-item ${page === "portfolio"? "active": ""}`}>
                                        <Link to="/portfolio" className="nav-link">Portfolio</Link>
                                    </li>
                                    <li className={`nav-item ${page === "blog"? "active": ""}`}>
                                        <Link to="/blog" className="nav-link">My Blog</Link>
                                    </li>
                                    <li className={`nav-item ${page === "about"? "active": ""}`}>
                                        <Link to="/about" className="nav-link">About Me</Link>
                                    </li>
                                    <li className={`nav-item ${page === "contact"? "active": ""}`}>
                                        <Link to="/contact" className="nav-link">Contact</Link>
                                    </li>
                                </ul>
                            </div>
        </React.Fragment>
    )
}
export default Menu;