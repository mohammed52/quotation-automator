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
    this.btnGenerateQuote = this.btnGenerateQuote.bind(this);
    this.btnCancel = this.btnCancel.bind(this);
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

  btnGenerateQuote(){
    console.log("Generate Quote...")
  }

  btnCancel(){
    console.log("cancel...")
  }
  render() {
    return (
          <div>   
          New Pallet Rack
          <form className="testbg-1">

          <div className="container-fluid row">
            <div className="col-sm-6 testbg-1">

              <h4>Project Settings</h4>
              <div className="well">
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Description</ControlLabel>
                <FormControl 
                type="textarea" 
                placeholder="description" 
                controlId="id-project-description"/>
              </FormGroup>
              
                <div className="row">
                  <div className="col-xs-6">
                    <ControlLabel>Project Cost (per kg)</ControlLabel>
                    <FormControl 
                      type="text" 
                      controlId="id-project-cost"
                      defaultValue="140" />

                  </div>
                  <div className="col-xs-6">
                    <ControlLabel>Project Rate (per kg)</ControlLabel>
                    <FormControl 
                      type="text" 
                      defaultValue="190"
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
                        <td><FormControl type="text" placeholder="15" controlId="id-frame1-height"/></td>
                        <td><FormControl type="text" placeholder="10" controlId="id-frame1-qty"/></td>
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
                        <td><FormControl type="text" placeholder="12" controlId="id-bay1-length"/></td>
                        <td><FormControl type="text" placeholder="10" controlId="id-bay1-qty"/></td>
                        <td><FormControl type="text" placeholder="5" controlId="id-bay1-levelsCount"/></td>
                        <td><FormControl type="text" placeholder="3000" controlId="id-bay1-loadPerLevel"/></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><FormControl type="text" placeholder="8.5" controlId="id-bay2-length"/></td>
                        <td><FormControl type="text" placeholder="4" controlId="id-bay2-qty"/></td>
                        <td><FormControl type="text" placeholder="4" controlId="id-bay2-levelsCount"/></td>
                        <td><FormControl type="text" placeholder="2000" controlId="id-bay2-loadPerLevel"/></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><FormControl type="text" placeholder="4" controlId="id-bay3-length"/></td>
                        <td><FormControl type="text" placeholder="2" controlId="id-bay3-count"/></td>
                        <td><FormControl type="text" placeholder="3" controlId="id-bay3-qty"/></td>
                        <td><FormControl type="text" placeholder="1000" controlId="id-bay3-loadPerLevel"/></td>
                      </tr>
                    </tbody>
                  </Table>
                  
              </div>

              <div className="well">
                <FormGroup>
                  <ControlLabel>Select Shelf Type: </ControlLabel>
                  <br/>
                  <Radio inline name="option">
                    No Shelf (Pallet Only)
                  </Radio>
                  {' '}
                  <Radio inline name="option">
                    Metal Shelf
                  </Radio>
                  {' '}
                  <Radio inline name="option">
                    Pallet Support Bars
                  </Radio>
                </FormGroup>

              </div>

            </div>
          </div>
          <div className="container-fluid testbg-1 text-center">
            <Button onClick={this.btnGenerateQuote} bsStyle="primary">Generate Quote</Button>
            <br/>
            <br/>
              <Button onClick={this.btnCancel} bsStyle="default" bsSize="small">Cancel</Button>
          </div>
          </form>
          </div>
    );
  }
}

NewPalletRack.propTypes = {
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
};