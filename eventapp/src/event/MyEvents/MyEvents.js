import React, { Component } from "react";
import cuid from "cuid";
import EventForm from "../EventForm/EventForm";
import EventList from "../EventList/EventList";
import { Container, Row, Col, Button } from "react-bootstrap";

class MyEvents extends Component {
  state = {
    events: "",
    isOpen: false,
    selectedEvent: null
  };

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    fetch(`http://localhost:2929/eventsFromDashboard?userEmail=${userData.email}`)
      .then(response => response.json())
      .then(data => {
        // data = Array(data);
        console.log(data)
        this.setState({
          events: data
        });
      });
  }

  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = newEvent => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    newEvent.userEmail = userData.email;
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "images/user.png";
    this.setState(({ events }) => ({
      events: [...events, newEvent],
      isOpen: false
    }));

    fetch("http://localhost:2929/eventsFromDashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEvent)
    }).then(response => response.json());    
  };

  handleSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handleUpdateEvent = updatedEvent => {
    // console.log(updatedEvent);
    this.setState(({ events }) => ({
      events: events.map(event => {
        if (event.id === updatedEvent.id) {          
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    }));

    fetch(`http://localhost:2929/eventsFromDashboard/${updatedEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedEvent)
    })
    .then(response => response.json()); 

    
  };

  handleDeleteEvent = id => {
    this.setState(({ events }) => ({
      events: events.filter(e => e.id !== id)
    }));
    fetch(`http://localhost:2929/eventsFromDashboard/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
      
    })
    .then(response => response.json());
  };

  render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <Container>
        <Row>
          <Col sm={8}>
            <EventList
              events={events}
              button="yes"
              selectEvent={this.handleSelectEvent}
              deleteEvent={this.handleDeleteEvent}
            />
          </Col>
          <Col sm={4}>
            <Button
              onClick={this.handleFormOpen}
              variant="success"
              className="mb-3"
            >
              Create Event
            </Button>
            {isOpen && (
              <EventForm
                key={selectedEvent ? selectedEvent.id : 0}
                updateEvent={this.handleUpdateEvent}
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvent}
                cancelFormOpen={this.handleFormCancel}
              />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyEvents;
