import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'

const subjectAll = [
  "PHP", 
  "IOS", 
  "ASP",
  "Swift",
  "Reactjs"
];

export default class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isBlocking : false,
      txtName : '',
      txtEmail : '',
      txtPhone : '',
      txtMessage : '',
      slcity : 'hn',
      chkSubject : new Set(),
      rdgioitinh : 2,
      file: ''
    }
  }


  checkSubjectList = () => {
    const checkList = subjectAll.map((val, key) => {
        return <label key={key} className="form-group"><input onChange={() => this.checkSubject(val) } type="checkbox" value={val} checked={this.state.chkSubject.has(val)} /> { val }</label>
    })
    return checkList;
  }
  checkSubject = (monhoc) => {
      if(this.checkedCheckbox.has(monhoc)) {
        this.checkedCheckbox.delete(monhoc)
      }else {
        this.checkedCheckbox.add(monhoc)
      }
      this.setState({
        chkSubject : this.checkedCheckbox
      });
  }
  componentWillMount () {
    this.checkedCheckbox = new Set(); 
  }
  // onChange input name
  isInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked.value : target.value;
    const name = target.name;
    this.setState({
      isBlocking: target.value.length > 0,
      [name] : value
    });
  }
  isInputFileChange = (event) => {
    this.setState({
      file : event.target.files[0].name
    })
  }

submitForm = (event) => {
    event.preventDefault();
    event.target.reset();
    this.setState({
      isBlocking: false
    });
    var mhoc = '';
    for(const mh of this.state.chkSubject) {
      mhoc += mh + ',';
    }
    console.log(mhoc);
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
            <input type="text" name="txtName" value={this.state.txtName} className="form-control" placeholder="Name" id="name" onChange={(e) => this.isInputChange(e)} />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Email Address</label>
            <input type="email" name="txtEmail" value={this.state.txtEmail} className="form-control" placeholder="Email Address" id="email" onChange={(e) => this.isInputChange(e)}  />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group col-xs-12 floating-label-form-group controls">
            <label>Phone Number</label>
            <input type="tel" name="txtPhone" value={this.state.txtPhone} className="form-control" placeholder="Phone Number" id="phone" onChange={(e) => this.isInputChange(e)} />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Message</label>
            <textarea rows={5} name="txtMessage" className="form-control" placeholder="Message" id="message" onChange={(e) => this.isInputChange(e)} value={this.state.txtMessage} />
          </div>
        </div>
        <div className="control-group">
          <select name="slcity" value={this.state.slcity} onChange={this.isInputChange} className="form-control">
              <option value="">Lựa chọn thành phố</option>
              <option value="hn">Hà Nội</option>
              <option value="hue">Huế</option>
              <option value="dn">Đà nẵng</option>
              <option value="sg">Sài Gòn</option>
          </select>
        </div>
        <div className="control-group">
          <label htmlFor="listCheck"> Check </label>
          <br />
        { this.checkSubjectList() }
        </div>
        <div className="control-group">
          <label className="radio-inline">
            <input name="rdgioitinh" type="radio" checked={ parseInt(this.state.rdgioitinh, 10) === 1}  onChange={(e) => this.isInputChange(e)} value="1" /> Nam 
          </label>
          <label className="radio-inline">
            <input name="rdgioitinh" type="radio" checked={ parseInt(this.state.rdgioitinh, 10) === 2}  onChange={(e) => this.isInputChange(e)} value="2" /> Nữ 
          </label>
        </div> 
        <div className="control-group">
            <input type="file" name="avatar" onChange={(e) => this.isInputFileChange(e)} />
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
