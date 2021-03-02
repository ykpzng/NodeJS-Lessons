
import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      phone: "",
      city: "",
      jobProfile: "",
      country: "",
      additionalInfo: "",
    }

    this.initialState = this.state;
  }


  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.postData(this.state);
    this.setState(this.initialState)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Name        :</label>
          <input onChange={this.handleChange} type="text" name="name"></input><br />
          <label>Email       :</label>
          <input onChange={this.handleChange} type="text" name="email"></input><br />
          <label>Phone       :</label>
          <input onChange={this.handleChange} type="Number" name="phone"></input><br />
          <label>City        :</label>
          <input onChange={this.handleChange} type="text" name="city"></input><br />
          <label>Job Profile :</label>
          <input onChange={this.handleChange} type="text" name="jobProfile"></input><br />
          <label>Country     :</label>
          <input onChange={this.handleChange} type="text" name="country"></input><br />
          <label>Info        :</label>
          <input onChange={this.handleChange} type="text" name="additionalInfo"></input><br />
          <button type="submit">SEND</button>
        </form>
      </div>
    )
  }
}


