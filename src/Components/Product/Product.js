import React, { Component } from 'react'
import Item from './Item'

export default class Product extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-lg-3">
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
            </div>
            {/* /.col-lg-3 */}
            <div className="col-lg-9 my-4">
            <div className="row">
                <Item>iPhone X</Item>
                <Item>Samsung Galaxy A6</Item>
                <Item>Macbook Pro 2018</Item>
                <Item>Oppo Find X</Item>
                <Item>iPhone 8 plus Red</Item>
                <Item>Samsung S8 plus</Item>
                <Item>Xiaomi Find X</Item>
                <Item>iPhone 5s</Item>
            </div>
            {/* /.row */}
            </div>
            {/* /.col-lg-9 */}
        </div>
      
    )
  }
}
