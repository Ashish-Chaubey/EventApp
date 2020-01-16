import React, { Component } from "react";
import { Card, Col, Image, ListGroup, Row, Button } from "react-bootstrap";
import EventListAttendee from "./EventListAttendee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapMarker } from "@fortawesome/free-solid-svg-icons";

class EventListItem extends Component {
  render() {
    const { event, selectEvent, deleteEvent } = this.props;
    return (
      <div>
        <Card className="mb-5">
          <ListGroup variant="flush">
            <Card.Body>
              <Row className="justify-content-start">
                <Col md="auto">
                  <Image
                    style={{ height: "80px", width: "80px" }}
                    src={event.hostPhotoURL}
                    roundedCircle
                  />
                </Col>
                <Col className="p-0">
                  <h4>{event.title}</h4>
                  <p>Hosted by {event.hostedBy}</p>
                </Col>
              </Row>
            </Card.Body>
            <ListGroup.Item>
              <Row>
                <Col xs="auto">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  <span>{event.date} |</span>
                </Col>

                <Col xs="auto">
                  <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
                  <span>{event.venue}</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <Card.Header className="d-flex">
              {event.attendees && event.attendees.map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <p>{event.description}</p>
                </Col>
                {this.props.button && 
                <Col md="auto align-self-center">
                <Button 
                variant="info"
                onClick={() => selectEvent(event)}
                >View</Button>
                <Button  
                onClick={() => deleteEvent(event.id)}
                variant="danger ml-2">Delete</Button>
              </Col>
                }
              </Row>
            </Card.Body>
          </ListGroup>
        </Card>
      </div>
    );
  }
}
export default EventListItem;
