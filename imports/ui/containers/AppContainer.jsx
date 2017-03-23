import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import WrapperWithNavBar from '../components/WrapperWithNavBar'
import App from '../components/App'
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import Footer from '../components/Footer'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import { Polls } from '../../api/polls/polls.js'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// App component - represents the whole app

export default createContainer(() => {
  return {
    user: Meteor.user(),
    connected: Meteor.status().connected,
  };
}, App);

