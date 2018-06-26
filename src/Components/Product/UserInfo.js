import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-6 col-6 left">
                    <img src={this.props.data.avatar_url} className="img-responsive" alt={this.props.data.name} />
                </div>
                <div className="col-sm-6 col-6 right">
                    {this.props.data.name}
                </div>
                
            </div>
        );
    }
}

export default UserInfo;