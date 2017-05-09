import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import { LinkContainer } from 'react-router-bootstrap';

var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var Nav = ReactBootstrap.Nav;

var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.NavItem;
var Button = ReactBootstrap.Button;
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
// var Nav = ReactBootstrap.Nav;

// Task component - represents a single todo item
export default class WrapperWithNavBar extends Component {

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classnames({
      // checked: this.props.task.checked,
      // private: this.props.task.private,
    });

    return (
          
          <Navbar inverse collapseOnSelect className="no-margin">
    <Navbar.Header>
      
      <LinkContainer to="/" style={{ cursor: 'pointer' }}>
      <Navbar.Brand>
          <div style={{ cursor: 'pointer' }}>React-Bootstrap</div>
      </Navbar.Brand>
      </LinkContainer>
      
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/wrapper/home">
    <NavItem eventKey={1}>Home</NavItem>
  </LinkContainer>

      </Nav>
      <Nav pullRight>
        <LinkContainer to="/wrapper/home">
    <NavItem eventKey={1}>New Quote</NavItem>
  </LinkContainer>

  <LinkContainer to="/wrapper/home">
    <NavItem eventKey={1}>View All</NavItem>
  </LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Navbar>

    );

  }
}
 
WrapperWithNavBar.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required


  // task: PropTypes.object.isRequired,
  // showPrivateButton: React.PropTypes.bool.isRequired,
};
