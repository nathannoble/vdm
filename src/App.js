import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Jumbotron, Button, Panel, ListGroup, ListGroupItem, Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Brand>
              Visualized Data Management
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/home">
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/acquire">
                <NavItem>Acquire</NavItem>
              </LinkContainer>
              <LinkContainer to="/explore">
                <NavItem>Explore</NavItem>
              </LinkContainer>
              <LinkContainer to="/govern">
                <NavItem>Govern</NavItem>
              </LinkContainer>

              <NavDropdown eventKey={3} title="Community" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Post</MenuItem>
                <MenuItem eventKey={3.2}>Vote</MenuItem>
                <MenuItem eventKey={3.3}>Art</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Retrieve PIN</MenuItem>
                <LinkContainer to="/matches">
                  <MenuItem eventKey={3.3}>Art</MenuItem>
                </LinkContainer>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="content">
          
        </div>
      </div>
    );
  }
}

export default App;
