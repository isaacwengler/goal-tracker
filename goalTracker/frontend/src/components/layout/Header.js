import React, { Component } from 'react'
import { Link } from "react-router-dom"

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Goal Tracker</span>
                        <div id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                            </div>
                        </div>



                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
