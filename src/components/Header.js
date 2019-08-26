import React from 'react'
import Menu from './Menu'
import {Link} from 'react-router-dom'
const Header = ({stroke, page}) => {
    return (
        <React.Fragment>
              <header className={stroke}>
                    <div className="custom-container">
                        <nav className="navbar navbar-expand-lg navbar-light">

                            <Link className="navbar-brand" to="/">Hussein Warrake.
                                {/* <img src="assets/images/logo.jpg" alt="Logo"> */}
                            </Link>
                            
                            <Menu page={page}/>
                        </nav>
                    </div>
                </header>
        </React.Fragment>
    )
}

export default Header; 