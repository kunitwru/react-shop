import React, { Component } from 'react'
import Item from './Item'
import Sidebar from './Sidebar';

export default class Product extends Component {
    constructor (props) {
        super(props)
        this.state = {
            users : null
        }
    }
    format_currency = (number) => {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
    componentDidMount () {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    users : json
                })
            }).catch((e) => {
                console.log(e);
            })
        
    }

  render() {
     const {users} = this.state
    return (
        <div className="row">
            <Sidebar>Shop Menu</Sidebar>
            {/* /.col-lg-3 */}
            <div className="col-lg-9 my-4">
                <div className="row">
                   { users ? (
                    users.map(user => (
                           <Item data= {user} key={user.id} >
                            {user.login || '[No account]'}
                           </Item>
                       ))
                   ) : (
                           <div>Loading </div>
                       )
                   }
                </div>
                {/* /.row */}
            </div>
            {/* /.col-lg-9 */}
        </div>
      
    )
  }
}
