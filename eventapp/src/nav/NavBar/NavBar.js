import React, { Component } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import SignOut from "../Menus/SignOut";
import {NavLink, withRouter} from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
      <div>
        <Navbar fixed="top" className="color" bg="primary" expand="lg">
          <Container>
            <img
              src="images/logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top mr-3"
              alt="React Bootstrap logo"
            />

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} to='/events' className="text-white" href="#home">
                  Events
                </Nav.Link>
              </Nav>
              <SignOut />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);