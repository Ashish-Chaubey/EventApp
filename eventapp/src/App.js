import React, { Fragment } from "react";
import "./App.css";
import EventDashboard from "./event/EventDashboard/EventDashboard";
import NavBar from "./nav/NavBar/NavBar";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage/HomePage";
import MyEvents from "./event/MyEvents/MyEvents";


function App() {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <div>
            <NavBar />
            <Container style={{ marginTop: "100px" }}>
              <Route path="/events" component={EventDashboard} />
              <Route path="/myevents" component={MyEvents} />
            </Container>
          </div>
        )}
      />
    </Fragment>
  );
}

export default App;

