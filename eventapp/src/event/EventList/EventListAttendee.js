import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";

class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    return (
      <div>
        <Col className="p-0 mr-3" xs={4} md={2}>
          <Image
            style={{ height: "40px", width: "40px" }}
            src={attendee.photoURL}
            roundedCircle
          />
        </Col>
      </div>
    );
  }
}
export default EventListAttendee;
