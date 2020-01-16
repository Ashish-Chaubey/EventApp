import React, { Component } from "react";
import { Col, Row} from "react-bootstrap";

import RegisterForm from "../Forms/RegisterForm";
import SignInForm from "../Forms/SignInForm";

class HomePage extends Component {
state = {
  isOpen: true
}
handleCloseForm = () => {
  this.setState({
    isOpen: false
  })
}
  render() {
    const { history } = this.props;
    const {isOpen} = this.state;
    return (
      <Row className="h-100 color">
        <Col sm={8}>
        <SignInForm history={history}/>
        </Col>
        
        <Col sm={4}>
          {isOpen && <RegisterForm 
          closeOpenForm ={this.handleCloseForm}
          />}
          
        </Col>
      </Row>
    );
  }
}

export default HomePage;
