import React, { Component } from 'react'
import {Button, Form } from "react-bootstrap";

class RegisterForm extends Component {

state = {
    fullname: "",
    username: "",
    email:"",
    password:""
}

handleRegisterFormSubmit = evt => {
  
    evt.preventDefault();
    fetch("http://localhost:2929/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json()); 
    this.props.closeOpenForm();   
  };


    handleRegisterFormChange = ({ target: { name, value } }) => {
        this.setState({
          [name]: value
        });
      };




    render() {
        const {fullname, username, email, password} =this.state;
        
        return (
            <div>
                <h1 className="text-light">Please Register</h1>
          <Form onSubmit={this.handleRegisterFormSubmit} 
          autoComplete="off"
          className="text-light w-50">
            <Form.Group controlId="formGridEmail">
              <Form.Label>Fullname</Form.Label>
              <Form.Control 
              name="fullname"
              value={fullname}
              onChange={this.handleRegisterFormChange}
              placeholder="Enter your full name"
              aria-label="Username"
               />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control 
              name="username"
              value={username}
              onChange={this.handleRegisterFormChange}
              placeholder="Username" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              name="email"
              value={email}
              onChange={this.handleRegisterFormChange}
              type="email"
              placeholder="Enter email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control 
              name="password"
              value={password}
              onChange={this.handleRegisterFormChange}
              type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            </div>
        )
    }
  }

export default RegisterForm
