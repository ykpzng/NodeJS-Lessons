import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from './List';
import Details from './Details';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customers: [],
      selectCustomer: {}
    }
  }
  componentDidMount() {
    this.getAllData();
  }

  getAllData = () => {
    fetch('http://localhost:3001/api/customers')
      .then(response => response.json())
      .then(data => this.setState({ customers: data }));
  }


  postData = (reqData) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqData)
    };
    fetch('http://localhost:3001/api/customers', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ customers: [...this.state.customers, data] }));
  }

  getOneData = (id) => {
    fetch(`http://localhost:3001/api/customers/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ selectCustomer: data }));
  }

  updateCustomer = (data, id) => {
    console.log(data);
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(`http://localhost:3001/api/customers/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error.message))
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact render={(props) => (
              <List {...props} customers={this.state.customers} getOneData={this.getOneData} />
            )}>


            </Route>
            <Route path="/details/:id"
              render={(props) => (<Details {...props}
                customer={this.state.selectCustomer}
                updateCustomer={this.updateCustomer}
                getOneData={this.getOneData}
              />)}>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}








//Link verebilmek için react-router-dom kurulmalı 
// npm install react-router-dom