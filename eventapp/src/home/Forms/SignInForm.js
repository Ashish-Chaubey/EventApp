import React, { Component } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


class SignInForm extends Component {
  state = {
    email: "",
    password: ""

  };



  handleSignIn = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleLogIn = (evt, formdata) => {
    evt.preventDefault();
    // console.log(formdata);
    fetch(`http://localhost:2929/users?email=${formdata.email}`)
      .then(response => response.json())
      .then(data => {
        if(data.length && data[0].password===formdata.password){
          localStorage.setItem('userData', JSON.stringify(data[0]));
          this.props.history.push('/events')
        }else{
          alert('new user please register')
        }
      });
      
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <Row className="text-center">
          <Col>
            <img
              src="images/logo.png"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h1 className="text-light mb-5">ReEvents Login</h1>
            <Form onSubmit={(evt) => this.handleLogIn(evt, this.state)}
              
              className="text-light w-50 mx-auto text-left"
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="h3">Email address</Form.Label>
                <Form.Control
                  name="email"
                  value={email}
                  onChange={this.handleSignIn}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Label className="h3">Password</Form.Label>
                <Form.Control
                  name="password"
                  value={password}
                  onChange={this.handleSignIn}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                
                type="submit"
                className="text-center"
                variant="primary"
                size="lg"
                active
              >
                Login
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2"
                ></FontAwesomeIcon>
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignInForm;
