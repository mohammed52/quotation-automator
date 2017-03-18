import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { LinkContainer } from 'react-router-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SlidingWrapperComponent from './SlidingWrapperComponent'

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
    
    return (
          <div>            
        <ReactCSSTransitionGroup transitionName="background" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
              {this.state.showdiv == true &&
                <SlidingWrapperComponent page="slidingWrapper" key="1" />   
              }
            </ReactCSSTransitionGroup>
            <Button onClick={this.btnClicked}>Click Me</Button>
          </div>
    );
  }
}