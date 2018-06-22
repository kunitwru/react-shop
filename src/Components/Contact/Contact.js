import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'

export default class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isBlocking : false,
      error_flg : 0
    }
  }

  isInputChange = (event) => {
    var flg = event.target.value.length > 0;
    this.setState({
      isBlocking: flg
    });
  }
  
submitForm = (event) => {
    event.preventDefault();
    event.target.reset();
    this.setState({
      isBlocking: false
    });
}

  render() {
    return (
      <div className="row my-4">
        <Prompt
            when={this.state.isBlocking}
            message={location =>
              'Are you sure you want to go to ' + location.pathname
            }
        />


      <div className="col-lg-8 col-md-10 mx-auto">
      <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>

      <form onSubmit={(e) => this.submitForm(e)}>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Vui lòng nhập đầy đủ tên" onChange={(e) => this.isInputChange(e)} />
            <p className="help-block text-danger" />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="Email Address" id="email"  onChange={(e) => this.isInputChange(e)}  />
            <p className="help-block text-danger" />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group col-xs-12 floating-label-form-group controls">
            <label>Phone Number</label>
            <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required datta onChange={(e) => this.isInputChange(e)} />
            <p className="help-block text-danger" />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Message</label>
            <textarea rows={5} className="form-control" placeholder="Message" id="message" required onChange={(e) => this.isInputChange(e)} />
            <p className="help-block text-danger" />
          </div>
        </div>
        <br />
        <div id="success" />
        <div className="form-group">
          <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
        </div>
      </form>
    </div>
    
      </div>
    )
  }
}
