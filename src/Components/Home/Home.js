import React, { Component } from 'react'
import Course from '../Home/Course';

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
                <Course>iPhone X</Course>
                <Course>Samsung Galaxy A6</Course>
                <Course>Macbook Pro 2018</Course>
                <Course>Oppo Find X</Course>
                <Course>iPhone 8 plus Red</Course>
                <Course>Samsung S8 plus</Course>
                <Course>Xiaomi Find X</Course>
                <Course>iPhone 5s</Course>
            </div>
            {/* /.row */}
            </div>
            {/* /.col-lg-9 */}
        </div>
      
    )
  }
}
