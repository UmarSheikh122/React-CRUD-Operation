import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink className="navbar-brand" to ="#">React User</NavLink>


                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Login">Login</NavLink>
                    </li>

                </ul>

            
                <Link  className="btn btn-outline-light" exact to="/users/add">Add User</Link>

            </div>
            
        </nav>
    )
}

export default Navbar
