import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import WrapperWithNavBar from '../components/WrapperWithNavBar'
import ShowAllQuotes from '../components/ShowAllQuotes'
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
	Meteor.subscribe('quotes');

	const MAPLOG = true
  const quotes = Quotes.find({userId: Meteor.userId()}).fetch()
	if(MAPLOG)console.log("quotes",quotes);
	
  // debugger
  return {
    user: Meteor.user(),
    connected: Meteor.status().connected,
    quotes: quotes
  };
}, ShowAllQuotes);

