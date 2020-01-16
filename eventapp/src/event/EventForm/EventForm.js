import React, { Component } from "react";
import { Card, Button, FormControl, InputGroup, Form } from "react-bootstrap";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent
      });
    }
  }

  handleFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <div>
        <Card>
          <Card.Body>
            <Form onSubmit={this.handleFormSubmit} autoComplete="off">
              <Form.Label>Event Title</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="title"
                  value={title}
                  onChange={this.handleInputChange}
                  placeholder="Event Title"
                  aria-label="Username"
                />
              </InputGroup>
              <Form.Label>Event Date</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="date"
                  value={date}
                  onChange={this.handleInputChange}
                  placeholder="Event Date"
                  aria-label="Username"
                  type="date"
                />
              </InputGroup>
              <Form.Label>City</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="city"
                  value={city}
                  onChange={this.handleInputChange}
                  placeholder="Enter the city for the event"
                  aria-label="Username"
                />
              </InputGroup>
              <Form.Label>Venue</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="venue"
                  value={venue}
                  onChange={this.handleInputChange}
                  placeholder="Enter the venue for the event"
                  aria-label="Username"
                />
              </InputGroup>
              <Form.Label>Hosted By</Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="hostedBy"
                  value={hostedBy}
                  onChange={this.handleInputChange}
                  placeholder="Enter the name of the person hosting"
                  aria-label="Username"
                />
              </InputGroup>
              <Button
                type="submit"
                variant="success"
              >
                Submit
              </Button>
              <Button
                onClick={cancelFormOpen}
                variant="secondary"
                className="ml-3"
              >
                Cancel
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default EventForm;
