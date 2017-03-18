import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';


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
          <div className="container-fluid testbg-1 test-anim">
              Hello World 1 2
          </div>
    );
  }
}