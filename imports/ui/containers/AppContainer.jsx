import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import WrapperWithNavBar from '../components/WrapperWithNavBar'
import App from '../components/App'
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import Footer from '../components/Footer'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import { Quotes } from '../../api/quotes/quotes.js';
// import { Polls } from '../../api/polls/polls.js'

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../../font-awesome-4.7.0/css/font-awesome.min.css'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// App component - represents the whole app

export default createContainer(() => {
  // const privateHandle = Meteor.subscribe('lists.private');
  // Meteor.subscribe('quotes')

  return {
    user: Meteor.user(),
    connected: Meteor.status().connected
  };
}, App);

