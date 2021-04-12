import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from '../../actions/auth'
import { Provider } from 'react-redux';
import store from '../../store';
import { loadUser } from "../../actions/auth";


export class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }


    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <div id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <form className="form-inline">
                        <span className="navbar-brand mb-0">
                            {user ? `Hi, ${user.username}!` : ""}
                        </span>
                        <button className="btn btn-sm btn-outline-secondary" type="button" onClick={this.props.logout}>Logout</button>
                    </form>
                </div>
            </div>
        );

        const guestLinks = (
            <div id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <form className="form-inline">
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </form>
                </div>
            </div>
        );

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Goal Tracker</span>
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
