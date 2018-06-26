import React, { Component } from 'react'
import UserInfo from './UserInfo';

export default class Detail extends Component {
  constructor (props) {
      super(props)
      this.state = {
          user : null
      }
  }
  componentDidMount () {
    var login = this.props.match.params.id;
    fetch('https://api.github.com/users/' + login)
        .then(response => response.json())
        .then(json => {
          console.log(json);
            this.setState({
                user : json
            })
        }).catch((e) => {
            console.log(e);
        })
  }
  render() {
    const {user} = this.state
    return (
      <div>
        { user ? (
            <div>
                <UserInfo data={user}></UserInfo>
            </div>
            ) : (
                    <div>Loading ...</div>
                )
            }
      </div>
    )
  }
}
