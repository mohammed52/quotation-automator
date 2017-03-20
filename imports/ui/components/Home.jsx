import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { LinkContainer } from 'react-router-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SlidingWrapperComponent from './SlidingWrapperComponent'
import HomeLoggedIn from './HomeLoggedin'
import HomeLoggedOut from './HomeLoggedOut'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

export default class Home extends Component {
  constructor(props) {

    super(props);
    this.state = {
      showdiv: true
    };

    this.btnClicked = this.btnClicked.bind(this)
  } 

  componentDidMount(){
    Meteor.call("logStringToConsole", "test");
    console.log("componentDidMount");
  }

  btnClicked(){
    this.setState({showdiv: !this.state.showdiv});
  }

  render() {
    const {user, connected} = this.props;

    return (
          <div>   
          {user===null ?  <HomeLoggedOut />: <HomeLoggedIn />}         
          </div>
    );
  }
}

Home.propTypes = {
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
};