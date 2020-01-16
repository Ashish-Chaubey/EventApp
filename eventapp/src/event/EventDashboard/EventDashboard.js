import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventList from "../EventList/EventList";





  


class EventDashboard extends Component {

  state = {
    events: ""

  };

  componentDidMount() {
    fetch("http://localhost:2929/eventsFromDashboard")
      .then(response => response.json())
      .then(data => {
        data = Array.from(data);
        this.setState({
          events: data
        });
      });
  }
    render() {
const {events} = this.state;
        return (
          <div>
            <Container>
              <Row className="justify-content-center">
                <Col sm={8}>
                  <EventList events={events}
                  
                  />
                </Col>
                
              </Row>
            </Container>
          </div>
        );
      }
}
  


export default EventDashboard;
