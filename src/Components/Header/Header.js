import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
            <a className="navbar-brand" href="/">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" to="/">
                        Home <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" to="/about">
                    About
                    </a>
                </li>	
                <li className="nav-item">
                    <a className="nav-link" to="/about">
                    Services
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" to="/about">
                    Contact
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
  }
}
