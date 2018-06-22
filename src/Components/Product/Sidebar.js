import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Sidebar extends Component {
  render() {
    return (
        <div className="col-lg-3">
            <h1 className="my-4">{this.props.children}</h1>
            <div className="list-group">
                <Link to="#" className="list-group-item">Category 1</Link>
                <Link to="#" className="list-group-item">Category 2</Link>
                <Link to="#" className="list-group-item">Category 3</Link>
            </div>
        </div>
    )
  }
}
