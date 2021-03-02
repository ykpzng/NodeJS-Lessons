import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Form from './Form';

export default class List extends Component {

  render() {
    return (
      <div>
        <Form postData={this.postData} />
        {this.props.customers.map((customer) => (
          <div
            key={customer.id}>
            <Link
              to={`details/${customer.id}`}
              onClick={() => this.props.getOneData(customer.id)}>
              {customer.name}
            </Link>
          </div>
        ))}
      </div>
    )
  }
}
