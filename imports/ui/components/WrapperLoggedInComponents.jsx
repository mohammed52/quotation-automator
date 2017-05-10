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
export default class WrapperLogginInComponents extends Component {

  constructor(props) {
    super(props);
    this.state = this.getMeteorData();
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }


  getChildContext() {
    return {user: this.props.user};
  }
  
componentWillMount(){
  const MAPLOG=true
  if(MAPLOG)console.log("componentWillMount");
  // debugger
    // if (!this.state.isAuthenticated) {
    //   browserHistory.push('/signin');
    // }
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

  componentDidUpdate(prevProps, prevState){
    // if (!this.state.isAuthenticated) {
    //   browserHistory.push('/signin');
    // }
  }

  render() {
    const MAPLOG = false
    // const {user, connected} = this.props;
    // console.log("render()");
    // console.log(this.context.location.pathname);
    // if(MAPLOG)console.log("this.props.quotes",this.props.quotes);
    // debugger
    return (
      <div>
      <div>wrapper for logged in components</div>
        {this.props.children}
      </div>
    );
  }
}
 
WrapperLogginInComponents.propTypes = {
  children: PropTypes.object,
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
  // quotes: React.PropTypes.array
};

WrapperLogginInComponents.contextTypes = {
  // router: React.PropTypes.object.isRequired
  // location: React.PropTypes.object,
  // user: React.PropTypes.object
};

WrapperLogginInComponents.childContextTypes = {
  user: React.PropTypes.object
}