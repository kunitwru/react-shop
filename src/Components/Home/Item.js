import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Item extends Component {
  render() {
    return (
        <div className="col-lg-3 col-md-6 my-4">
            <div className="card h-100">
                <Link to="/">
                    <img className="card-img-top" src="http://placehold.it/700x400/000" alt={this.props.children} />
                </Link>
                <div className="card-body">
                <h4 className="card-title">
                    <Link to="/">{this.props.children}</Link>
                </h4>
                <h5>$24.99</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                <small className="text-muted">★ ★ ★ ★ ☆</small>
                </div>
            </div>
        </div>
    )
  }
}
