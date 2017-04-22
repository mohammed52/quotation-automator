import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import $ from "jquery"
import {UprightWeightTable, BeamConnectorTable} from '../helpers/WeightCapacityTables'
// import FrameTable from './FrameTable'
// import BaysTable from './BaysTable'

// var ReactBootstrap = require('react-bootstrap');
// var Button = ReactBootstrap.Button;
// var Modal = ReactBootstrap.Modal;
// var FormGroup = ReactBootstrap.FormGroup;
// var ControlLabel = ReactBootstrap.ControlLabel;
// var FormControl = ReactBootstrap.FormControl;
// var Radio = ReactBootstrap.Radio;
// var Table = ReactBootstrap.Table;
// var FieldGroup = ReactBootstrap.FieldGroup;
// var Input = ReactBootstrap.Input;

export default class ShowQuote extends Component {
  
  // constructor(props) {
    // super(props);
    // this.btnGenerateQuote = this.btnGenerateQuote.bind(this);
    // this.btnCancel = this.btnCancel.bind(this);
    // this.handleOptionChange = this.handleOptionChange.bind(this);

    // this.state = {
    // }
  // }


  componentWillMount(){
    // console.log("componentWillMount")
  }

  componentWillUpdate(){
    // console.log("componentWillUpdate");
    // const user = this.props.user;
    // console.log(user)    
  }

  componentWillReceiveProps(nextProps, nextContext){

    const user = nextContext.user;
    if(user==null){
      browserHistory.push('/');
    }
  }
  
  componentDidUpdate(){
    // console.log("componentDidUpdate")
    //   const user = this.props.user;
    // console.log(user) 
  }

  btnGenerateQuote(){

  }

  btnCancel(){
    // console.log("cancel...")
  }

  render() {
    console.log(this.context.user)
    console.log(this.props.location.state)
    console.log(UprightWeightTable)
    console.log(BeamConnectorTable)

    return (
          <div> Show Quote
          </div>
    );
  }
}

ShowQuote.propTypes = {
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
  location: React.PropTypes.object
};

ShowQuote.contextTypes = {
  user: React.PropTypes.object
}