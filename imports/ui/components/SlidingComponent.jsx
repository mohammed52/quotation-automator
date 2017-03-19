import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { LinkContainer } from 'react-router-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

class SlidingComponent extends Component {

  componentDidMount(){

  }

  render() {
    const style = {
      position: 'fixed',
      top: 0,
      zIndex: -1000,
      backgroundColor: '#FFFEF4',
      width: '100%'
    };

    return (
      <div className={style}> Hello Wordl 2</div>   
    );
  }
}

export default SlidingComponent