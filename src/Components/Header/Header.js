import React, { Component } from 'react'
import {Link, NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
            <Link className="navbar-brand" to="/">Shop</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <NavLink activeClassName="active" className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/san-pham">
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/lien-he">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
  }
}
