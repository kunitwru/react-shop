import React, { Component } from 'react'
import Item from './Item';

export default class Home extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-lg-12">
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src="http://placehold.it/1140x350" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/1140x350" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://placehold.it/1140x350" alt="Third slide" />
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="row">
                <Item>iPhone X</Item>
                <Item col="3">Samsung Galaxy A6</Item>
                <Item col="3">Macbook Pro 2018</Item>
                <Item col="3">Oppo Find X</Item>
                <Item col="3">iPhone 8 plus Red</Item>
                <Item col="3">Samsung S8 plus</Item>
                <Item col="3">Xiaomi Find X</Item>
                <Item col="3">iPhone 5s</Item>
            </div>
            {/* /.row */}
            </div>
            {/* /.col-lg-9 */}
        </div>
      
    )
  }
}
