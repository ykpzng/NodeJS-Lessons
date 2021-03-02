import React, { Component } from 'react'

export default class Details extends Component {
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = (event) => {
    const id = this.props.match.params.id;
    event.preventDefault();
    console.log(this.state);
    this.props.updateCustomer(this.state, id);
    this.setState(this.initialState);
  };


  render() {
    console.log(this.props.customer.id)
    const { name, email, city, phone, jobProfile, country, additionalInfo } = this.props.customer;
    return (
      <div className="container" style={{ width: "22rem" }}>
        <p>Update Staff</p>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="name">Customer</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={name}
            onChange={this.handleChange}
          /><br />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            defaultValue={email}
            onChange={this.handleChange}
          /><br />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={this.handleChange}
          />
          {/* <small>Format: 123-456-7890</small> */}
          <br />
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            defaultValue={city}
            onChange={this.handleChange}
          /><br />
          <label htmlFor="jobProfile">Job Profile :</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="jobProfile"
            defaultValue={jobProfile}
          /><br />
          <label htmlFor="country">Country     :</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="country"
            defaultValue={country}
          /><br />
          <label htmlFor="additionalInfo">Info        :</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="additionalInfo"
            defaultValue={additionalInfo}
          /><br />

          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}
