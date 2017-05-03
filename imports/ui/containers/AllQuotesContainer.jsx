import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import WrapperWithNavBar from '../components/WrapperWithNavBar'
import AllQuotes from '../components/AllQuotes'
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import Footer from '../components/Footer'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import { Quotes } from '../../api/quotes/quotes.js';
// import { Polls } from '../../api/polls/polls.js'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// App component - represents the whole app

export default createContainer(() => {
	const privateHandle = Meteor.subscribe('lists.private');
	const MAPLOG = true
	if(MAPLOG)console.log("Quotes.find({userId: Meteor.userId()}).fetch()",Quotes.find({userId: Meteor.userId()}).fetch());
	Meteor.call("logStringToConsole", "Quotes.find({userId: Meteor.userId()}).fetch()")
	Meteor.call("logStringToConsole", Quotes.find({userId: Meteor.userId()}).fetch())
	debugger
  return {
    user: Meteor.user(),
    connected: Meteor.status().connected,
    quotes: Quotes.find({userId: Meteor.userId()}).fetch()
  };
}, AllQuotes);

