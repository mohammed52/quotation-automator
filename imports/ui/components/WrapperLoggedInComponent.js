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
export default class WrapperLoggedInContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: Meteor.user()!==null
    }
  }
  
  componentDidMount() {
    browserHistory.push("/signin")
  }


  render() {
    if (this.state.isLoggedIn) {
      return this.props.children
    } else {
      return null
  }

  }
}
 
WrapperLoggedInContainer.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required


  children: PropTypes.object
  // showPrivateButton: React.PropTypes.bool.isRequired,
};
