import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Item extends Component {

    convert_name_to_slug = (str) => {
        str = str.toString().toLowerCase();     
     
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
     
        str = str.replace(/([^0-9a-z-\s])/g, '');
     
        str = str.replace(/(\s+)/g, '-');
     
        str = str.replace(/^-+/g, '');
     
        str = str.replace(/-+$/g, '');
  
        return str;
    }
    
  render() {
      
    return (
        <div className="col-lg-4 col-md-6 my-4">
            <div className="card h-100">
                <Link to={"/chi-tiet/"+ this.props.data.login +"/" + this.convert_name_to_slug(this.props.children) + ".html"} alt={this.props.children}>
                    <img className="card-img-top" src={ this.props.data.avatar_url } alt={this.props.children}  />
                </Link>
                <div className="card-body">
                    <h4 className="card-title">
                        <Link to={"/chi-tiet/"+ this.props.data.login +"/" + this.convert_name_to_slug(this.props.children) + ".html"}>{ this.props.children }</Link>
                    </h4>
                    <h5>{ this.props.data.node_id }</h5>
                    <p className="card-text">
                        { this.props.data.body }
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">★ ★ ★ ★ ☆</small>
                </div>
            </div>
        </div>
    )
  }
}
