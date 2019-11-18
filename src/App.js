import React from "react";
import "./App.css";
import { Segment, Header, Input, Grid, Divider, Icon } from "semantic-ui-react";
import NavBar from "./components/navbar";

// import logo from "./logo.png";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>

      <div className="outer-container">
        <Divider hidden></Divider>
        <Divider hidden></Divider>
        <Divider hidden></Divider>
        <Segment basic textAlign="center">
          <div className="centre-font inline">
            betterr&nbsp;
            <i class="fas fa-chevron-circle-up "></i>
          </div>
        </Segment>
        <Header as="h1" textAlign="center">
          Explore Apps, Courses and Books that help you get Better
        </Header>
        <Divider hidden></Divider>
        <div class="main-container">
          <Grid>
            <Grid.Column>
              <Input
                icon="search"
                iconPosition="left"
                placeholder="Search for a topic or a resource..."
                fluid
                focus
              />
            </Grid.Column>
          </Grid>
          <Divider hidden></Divider>
          <Icon name="chart line" color="grey" size="large"></Icon>
          Popular Topics
          <br></br>
          <br></br>
          <Grid columns={3} stackable>
            <Grid.Column>
              <Segment className="pointer" raised>
                <div className="inline fs20">Productivity </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="pointer" raised>
                <div className="inline fs20">Personal Finance</div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="pointer" raised>
                <div className="inline fs20">Fitness</div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="pointer" raised>
                <div className="inline fs20">Time Management</div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="pointer" raised>
                <div className="inline fs20">Procastination</div>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>

      <Segment basic textAlign="center">
        <span className="footer-menu">Home</span>
        <span className="footer-menu">About us</span>
        <span className="footer-menu">Feedback</span>
        <span className="footer-menu">Contact us</span>
      </Segment>
    </React.Fragment>
  );
}

export default App;
