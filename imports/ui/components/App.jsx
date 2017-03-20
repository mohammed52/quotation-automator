import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import WrapperWithNavBar from '../components/WrapperWithNavBar'
import LoggedOutWrapperWithNavBar from '../components/LoggedOutWrapperWithNavBar'
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import Footer from '../components/Footer'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import { Polls } from '../../api/polls/polls.js'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// App component - represents the whole app
export default class App extends Component {
    
  render() {
    const {user, connected} = this.props;
    console.log("will render accounts ui wrapper");
    return (
      <div className="testbg-1">
      {user===null? <LoggedOutWrapperWithNavBar /> : <WrapperWithNavBar />} 
      <AccountsUIWrapper />

        {this.props.children}
        <Footer />
      </div>
    );
  }
}
 
App.propTypes = {
  children: PropTypes.object,
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
};

App.contextTypes = {
  router: React.PropTypes.object,
};