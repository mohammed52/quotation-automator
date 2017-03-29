import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import FrameTable from './FrameTable'
import BaysTable from './BaysTable'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Radio = ReactBootstrap.Radio;

export default class NewPalletRack extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }


  componentWillMount(){
    console.log("componentWillMount");
  }

  componentWillUpdate(){
    console.log("componentWillUpdate");
    const user = this.props.user;
    console.log(user)    
  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps")

      const user = nextProps.user;
      console.log(user)
        if(user!==null){

      console.log("user EXISTS")
    } else {
      console.log("user is null")
      browserHistory.push('/');
    }
  }
  
  componentDidUpdate(){
    console.log("componentDidUpdate")
      const user = this.props.user;
    console.log(user) 
  }

  handleSubmit(){
    console.log("submit form")
  }

  handleSubmit2(){
    console.log("submit form 2")
  }
  render() {
    return (
          <div>   
          New Pallet Rack
          <FormGroup className="testbg-1">
          
        
          <div className="container-fluid row">
            <div className="col-sm-6 testbg-1">

              <br/>
              <div className="well">
                <div className="container-fluid frame-wrapper center-text testbg-1">  
                  <h4>Frame</h4>
                  <FrameTable />
                </div>

                <div className="container-fluid frame-wrapper center-text testbg-1">  
                  <h4>Bays</h4>
                  <BaysTable />
                </div>
              </div>
            </div>
            <div className="col-sm-6 testbg-2">
              <br/>
              <div className="well">
                
                <FormControl type="text" placeholder="Search" />
                      <FormGroup>
      <Radio inline name="option">
        1
      </Radio>
      {' '}
      <Radio inline name="option">
        2
      </Radio>
      {' '}
      <Radio inline name="option">
        3
      </Radio>
    </FormGroup>

              </div>

            </div>
          </div>
          <Button type="submit" onClick={this.handleSubmit2}>Submit</Button>
          </FormGroup>
          </div>
    );
  }
}

NewPalletRack.propTypes = {
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
};