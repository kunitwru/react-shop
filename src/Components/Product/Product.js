import React, { Component } from 'react'
import Item from './Item'
import Sidebar from './Sidebar';
import myData from './data.json'

export default class Product extends Component {
    format_currency = (number) => {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  render() {
    return (
        <div className="row">
            <Sidebar>Shop Menu</Sidebar>
            {/* /.col-lg-3 */}
            <div className="col-lg-9 my-4">
                <div className="row">
                    {
                        myData.map((val, key) => {
                            return <Item key={key} pid={val.id} price={this.format_currency(val.price)} image = {val.image} summary = {val.summary} > {val.name} </Item>
                        })
                    }
                </div>
                {/* /.row */}
            </div>
            {/* /.col-lg-9 */}
        </div>
      
    )
  }
}
