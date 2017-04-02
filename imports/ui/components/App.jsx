import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import WrapperWithNavBar from '../components/WrapperWithNavBar'
import LoggedOutWrapperWithNavBar from '../components/LoggedOutWrapperWithNavBar'
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import Footer from '../components/Footer'

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
// import { Polls } from '../../api/polls/polls.js'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// App component - represents the whole app
export default class App extends Component {

  getChildContext() {
    // console.log("getChildContext()")
    // console.log(this.props.user)
    // console.log("Meteor.user()")
    // console.log(Meteor.user())

    return {user: this.props.user};
  }
  
  componentWillMount(){
    // console.log("componentWillMount")
    // console.log("")
  }

  render() {
    const {user, connected} = this.props;
    // console.log("render()");
    // console.log(this.context.location.pathname);

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
  // router: React.PropTypes.object.isRequired
  // location: React.PropTypes.object,
  // user: React.PropTypes.object
};

App.childContextTypes = {
  user: React.PropTypes.object
}