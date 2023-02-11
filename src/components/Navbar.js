import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bhishmalogo.jpg'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-secondary">
            <div className="container-fluid">
                <img src={logo} alt="logo" width="40" height="40" />
                <Link className="navbar-brand mx-2" to="/" style={{'font-weight':'bold'}} >Raudra</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{'color':'black' }} className="nav-link" aria-current="page" to="/wwa">Who we are</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link style={{'color':'black' }} className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Buisness
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link style={{'font-weight':'bold' }} className="dropdown-item" to="/defence">Defence</Link></li>
                                <li><Link style={{'font-weight':'bold' }} className="dropdown-item" to="/aviation">Aviation</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link style={{'font-weight':'bold' }} className="dropdown-item" to="/sub">Sub Components</Link></li>
                            </ul>
                        </li>
                        <li className="nav-contact">
                            <Link style={{'font-weight':'bold', 'color':'black' }} className="nav-link " aria-current="page" to="/connect">Connect with us</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="out of service" aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
