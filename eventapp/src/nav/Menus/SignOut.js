import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignOut = ({ signOut }) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          <Image
            style={{ height: "30px", width: "30px" }}
            src="images/user.png"
            roundedCircle
            className="mr-3"
          />
          {userData.username}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/myevents" href="#/action-1">
            My Events
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/" href="#/action-2">
            SignOut
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SignOut;
