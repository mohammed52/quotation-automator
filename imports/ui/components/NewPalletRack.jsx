import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import $ from "jquery"
import {connect} from 'react-redux'
import { insert } from '../../api/quotes/methods.js';
import { displayError } from '../helpers/errors.js';

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

class NewPalletRack extends Component {
  
  constructor(props) {
    super(props);
    this.btnGenerateQuote = this.btnGenerateQuote.bind(this);
    this.btnCancel = this.btnCancel.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

    this.state = {
        selectedShelfOption: "noShelf"
    }
  }


  componentWillMount(){
    // console.log("componentWillMount")
  }

  componentWillUpdate(){
    // console.log("componentWillUpdate");
    // const user = this.props.user;
    // console.log(user)    
  }

  componentWillReceiveProps(nextProps){
    // console.log("componentWillReceiveProps")

    const user = nextProps.user;
    // console.log(user)
    if(user!==null){

      // console.log("user EXISTS")
    } else {
      // console.log("user is null")
      browserHistory.push('/');
    }
  }
  
  componentDidUpdate(){
    // console.log("componentDidUpdate")
    //   const user = this.props.user;
    // console.log(user) 
  }

  btnGenerateQuote(){
    console.log("Generate Quote...")
    const companyProjectTitle = this.props.companyProjectTitle;

    const specs = {
                  projectSettings: {
                    description: $("#id-project-description").val(),
                    projectCost: Number($("#id-project-cost").val()),
                    projectRate: Number($("#id-project-rate").val()),
                    companyName: companyProjectTitle.companyName,
                    projectTitle: companyProjectTitle.projectTitle
                  },
                  frame: {
                    frameHeight: Number($("#id-frame1-height").val()),
                    frameDepth: Number($("#id-frame1-depth").val()),
                    frameQty: Number($("#id-frame1-qty").val())
                  },
                  bays: [
                    {
                      bay: 1,
                      length: Number($("#id-bay1-length").val()),
                      qty: Number($("#id-bay1-qty").val()),
                      levels: Number($("#id-bay1-levels").val()),
                      loadPerLevel: Number($("#id-bay1-loadPerLevel").val()),
                    },
                    {
                      bay: 2,
                      length: Number($("#id-bay2-length").val()),
                      qty: Number($("#id-bay2-qty").val()),
                      levels: Number($("#id-bay2-levels").val()),
                      loadPerLevel: Number($("#id-bay2-loadPerLevel").val())
                    },
                    {
                      bay: 3,
                      length: Number($("#id-bay3-length").val()),
                      qty: Number($("#id-bay3-qty").val()),
                      levels: Number($("#id-bay3-levels").val()),
                      loadPerLevel: Number($("#id-bay3-loadPerLevel").val())
                    },
                    {
                      bay: 4,
                      length: Number($("#id-bay4-length").val()),
                      qty: Number($("#id-bay4-qty").val()),
                      levels: Number($("#id-bay4-levels").val()),
                      loadPerLevel: Number($("#id-bay4-loadPerLevel").val())
                    }
                  ],
                  shelfType: this.state.selectedShelfOption,
                  userId: this.props.user._id,
                  createdAt: new Date()
                  };
    console.log(specs)

    insert.call(specs, displayError);
    
    // insert.call(specs, displayError);

  }

  btnCancel(){
    browserHistory.push('/');
  }

  handleOptionChange(changeEvent){
    console.log("changed");
    this.setState({
      selectedShelfOption: changeEvent.target.value
  });

  }
  render() {
    const companyProjectTitle = this.props.companyProjectTitle

    return (
          <div>   
          New Pallet Rack
          <form className="testbg-1">

          <div className="container-fluid row">
            <div className="col-sm-6 testbg-1">

              <h4>Project Settings</h4>
              <div className="well">
              <FormGroup controlId="formControlsTextarea">
              
              <div className="row">
                  <div className="col-xs-6">
                    <ControlLabel>Company Name</ControlLabel>
                    <FormControl 
                      type="text" 
                      id="id-company-name"
                      defaultValue={companyProjectTitle.companyName} />

                  </div>
                  <div className="col-xs-6">
                    <ControlLabel>Project</ControlLabel>
                    <FormControl 
                      type="text" 
                      defaultValue={companyProjectTitle.projectTitle}
                      id="id-project-title"/>
                      
                  </div>
                </div>

              <ControlLabel>Racks Description</ControlLabel>
                <FormControl 
                type="textarea" 
                placeholder="description" 
                id="id-project-description"
                defaultValue="test description-1"/>
              </FormGroup>
              
                <div className="row">
                  <div className="col-xs-6">
                    <ControlLabel>Project Cost (per kg)</ControlLabel>
                    <FormControl 
                      type="text" 
                      id="id-project-cost"
                      defaultValue="140" />

                  </div>
                  <div className="col-xs-6">
                    <ControlLabel>Project Rate (per kg)</ControlLabel>
                    <FormControl 
                      type="text" 
                      defaultValue="190"
                      id="id-project-rate"/>
                      
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
                        <th>Depth</th>
                        <th>Qty.</th>
                      </tr>

                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td><FormControl type="text" 
                              placeholder="15" 
                              id="id-frame1-height"
                              defaultValue="15"/></td>
                        <td><FormControl type="text" 
                              placeholder="3" 
                              id="id-frame1-depth"
                              defaultValue="3"/></td>
                        <td><FormControl type="text" 
                              placeholder="10" 
                              id="id-frame1-qty"
                              defaultValue="10"/></td>
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
                        <td><FormControl type="text" 
                                placeholder="12" 
                                id="id-bay1-length"
                                defaultValue="12"/></td>
                        <td><FormControl type="text" 
                                placeholder="10" 
                                id="id-bay1-qty"
                                defaultValue="10"/></td>
                        <td><FormControl type="text" placeholder="5" 
                        id="id-bay1-levels"
                        defaultValue="5"/></td>
                        <td><FormControl type="text" placeholder="3000" 
                        id="id-bay1-loadPerLevel"
                        defaultValue="3000"/></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><FormControl type="text" placeholder="8.5" 
                              id="id-bay2-length"
                              defaultValue="8.5"/></td>
                        <td><FormControl type="text" placeholder="4" 
                              id="id-bay2-qty"
                              defaultValue="4"/></td>
                        <td><FormControl type="text" placeholder="4" 
                              id="id-bay2-levels"
                              defaultValue="4"/></td>
                        <td><FormControl type="text" placeholder="2000" 
                              id="id-bay2-loadPerLevel"
                              defaultValue="2000"/></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><FormControl type="text" placeholder="4" 
                              id="id-bay3-length"
                              defaultValue="4"/></td>
                        <td><FormControl type="text" 
                              placeholder="2" 
                              id="id-bay3-qty"
                              defaultValue="2"/></td>
                        <td><FormControl type="text" placeholder="3" 
                              id="id-bay3-levels"
                              defaultValue="2"/></td>
                        <td><FormControl type="text" placeholder="1000" 
                              id="id-bay3-loadPerLevel"
                              defaultValue="1000"/></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td><FormControl type="text" placeholder="4" 
                              id="id-bay4-length"
                              defaultValue="4"/></td>
                        <td><FormControl type="text" 
                              placeholder="2" 
                              id="id-bay4-qty"
                              defaultValue="2"/></td>
                        <td><FormControl type="text" placeholder="3" 
                              id="id-bay4-levels"
                              defaultValue="2"/></td>
                        <td><FormControl type="text" placeholder="1000" 
                              id="id-bay4-loadPerLevel"
                              defaultValue="1000"/></td>
                      </tr>
                    </tbody>
                  </Table>
                  
              </div>

              <div className="well">
                <FormGroup>
                  <ControlLabel>Select Shelf Type: </ControlLabel>
                  <br/>
                  <Radio inline name="option" 
                      id="id-radio-noshelf" 
                      onChange={this.handleOptionChange}
                      value = "noShelf"
                      checked={this.state.selectedShelfOption === 'noShelf'}>
                    No Shelf (Pallet Only)
                  </Radio>
                  {' '}
                  <Radio 
                      inline name="option" 
                      onChange={this.handleOptionChange}
                      value = "metalShelf"
                      checked={this.state.selectedShelfOption === 'metalShelf'}>
                    Metal Shelf
                  </Radio>
                  {' '}
                  <Radio 
                      inline name="option" 
                      onChange={this.handleOptionChange}
                      value = "palletSupportBars"
                      checked={this.state.selectedShelfOption === 'palletSupportBars'}>
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
  companyProjectTitle: React.PropTypes.object

};

NewPalletRack.contextTyoes = {
  router: PropTypes.object
}

const mapStateToProp =(state, ownProps)=>{
  return {
    companyProjectTitle: state.companyProjectTitle
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // switchFlag(newVal){
    //   console.log("newVal")
    //   console.log(newVal)
    //   dispatch(updateModalFlag(newVal))
    // }
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(NewPalletRack)