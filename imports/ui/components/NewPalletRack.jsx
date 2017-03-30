import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
// import FrameTable from './FrameTable'
// import BaysTable from './BaysTable'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Radio = ReactBootstrap.Radio;
var Table = ReactBootstrap.Table;
var FieldGroup = ReactBootstrap.FieldGroup;
var Input = ReactBootstrap.Input;

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
          <form className="testbg-1">

          <div className="container-fluid row">
            <div className="col-sm-6 testbg-1">

              <h4>Settings</h4>
              <div className="well">

              <ControlLabel>Rack Details</ControlLabel>
              <Input
                type="text"
                defaultValue="My Name"
                label="Name"
                placeholder="Full name"
                />
              <FormControl 
                type="textarea" 
                placeholder="add details" 
                controlId="id-rack-details"/>
              <br />
                <div className="row">
                  <div className="col-xs-6">
                    <ControlLabel>Cost</ControlLabel>
                    <FormControl 
                      componentClass="text" 
                      defaultValue="140"
                      controlId="id-cost"/>
                  </div>
                  <div className="col-xs-6">
                    <ControlLabel>Project Rate</ControlLabel>
                    <FormControl 
                      componentClass="text" 
                      defaultValue="180"
                      controlId="id-project-rate"/>
                  </div>
                </div>
              </div>

              <h4>Frame</h4>
              <div className="well">
                <Table className="borderless table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Height (ft)</th>
                        <th>Qty.</th>
                      </tr>

                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td><FormControl type="text" placeholder="15" /></td>
                        <td><FormControl type="text" placeholder="10" /></td>
                      </tr>
                    </tbody>
                  </Table>
                  </div>
            </div>
            <div className="col-sm-6 testbg-2">
                                <h4>Bays</h4>
                  <div className="well">
                  <Table className="borderless table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Length (ft)</th>
                        <th>Qty.</th>
                        <th>Levels</th>
                        <th>Load per Level (kgs)</th>
                      </tr>

                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td><FormControl type="text" placeholder="15" /></td>
                        <td><FormControl type="text" placeholder="10" /></td>
                        <td><FormControl type="text" placeholder="5" /></td>
                        <td><FormControl type="text" placeholder="3000" /></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><FormControl type="text" placeholder="15" /></td>
                        <td><FormControl type="text" placeholder="10" /></td>
                        <td><FormControl type="text" placeholder="4" /></td>
                        <td><FormControl type="text" placeholder="3000" /></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><FormControl type="text" placeholder="15" /></td>
                        <td><FormControl type="text" placeholder="10" /></td>
                        <td><FormControl type="text" placeholder="3" /></td>
                        <td><FormControl type="text" placeholder="3000" /></td>
                      </tr>
                    </tbody>
                  </Table>
                  
              </div>

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
          </form>
          </div>
    );
  }
}

NewPalletRack.propTypes = {
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
};