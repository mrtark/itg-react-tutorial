import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header(props) {
    return (

        <>
            <nav className="navbar navbar-expand navbar-light bg-light shadow">
                <div className="nav navbar-nav">
                    <NavLink className="nav-item nav-link mt-1"><Link to="/" className={props.icon}></Link></NavLink>
                    <NavLink className="nav-item nav-link"><Link to="/suppliers">Suppliers</Link></NavLink>
                    <NavLink className="nav-item nav-link"><Link to="/stateIntro">State</Link></NavLink>
                    <NavLink className="nav-item nav-link"><Link to="/odev1">Ödev_1</Link></NavLink>
                    <NavLink className="nav-item nav-link"><Link to="/categories">Categories</Link></NavLink>
                    <NavLink className="nav-item nav-link"><Link to="/grid">Grid</Link></NavLink>
                    <NavLink className="nav-item nav-link"><Link to="/odev2">Ödev_2</Link></NavLink>
                    <NavLink className="nav-item nav-link"><Link to="/about">ABOUT</Link></NavLink>
                </div>
            </nav>
        </>

    )
}

export default Header