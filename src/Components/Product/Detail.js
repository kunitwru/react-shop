import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
      var pid = this.props.match.params.id;
      var slug = this.props.match.params.slug;
    return (
      <div>
        <h2>{pid}</h2>
        <h3>{slug}</h3>
      </div>
    )
  }
}
