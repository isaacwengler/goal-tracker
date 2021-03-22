import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Goal Tracker</span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
