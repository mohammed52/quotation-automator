import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import $ from "jquery"
import {connect} from 'react-redux'
import { insert } from '../../api/quotes/methods.js';
import { displayError } from '../helpers/errors.js';
import {removeZeroValueBays} from '../helpers/removeZeroValueBays'

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
    const defaultProjectSpecs = this.props.defaultProjectSpecs 
    this.state = {
        selectedShelfOption: defaultProjectSpecs.shelfType
    }
  }


  componentWillMount(){
    const MAPLOG = false
    if(MAPLOG)console.log("componentWillMount");
  }

  componentWillUpdate(){
    const MAPLOG = false
    if(MAPLOG)console.log("componentWillUpdate");
  }

  componentWillReceiveProps(nextProps){
    const MAPLOG = false
    if(MAPLOG)console.log("componentWillReceiveProps");
    const user = nextProps.user;
    if(user!==null){
// 
    } else {
      browserHistory.push('/');
    }
  }
  
  componentDidUpdate(){
    const MAPLOG = false
    if(MAPLOG)console.log("componentDidUpdate");

  }

  btnGenerateQuote(){
  
    var bays = [
                    {
                      
                      length: Number($("#id-bay0-length").val()),
                      qty: Number($("#id-bay0-qty").val()),
                      levels: Number($("#id-bay0-levels").val()),
                      loadPerLevel: Number($("#id-bay0-loadPerLevel").val())
                    },
                    {
                      
                      length: Number($("#id-bay1-length").val()),
                      qty: Number($("#id-bay1-qty").val()),
                      levels: Number($("#id-bay1-levels").val()),
                      loadPerLevel: Number($("#id-bay1-loadPerLevel").val()),
                    },
                    {
                      
                      length: Number($("#id-bay2-length").val()),
                      qty: Number($("#id-bay2-qty").val()),
                      levels: Number($("#id-bay2-levels").val()),
                      loadPerLevel: Number($("#id-bay2-loadPerLevel").val())
                    },
                    {
                      
                      length: Number($("#id-bay3-length").val()),
                      qty: Number($("#id-bay3-qty").val()),
                      levels: Number($("#id-bay3-levels").val()),
                      loadPerLevel: Number($("#id-bay3-loadPerLevel").val())
                    }
                  ];

    bays = removeZeroValueBays(bays)

    const rackingRequirements = {
                  projectSettings: {
                    description: $("#id-project-description").val(),
                    racksDescription: $("#id-racks-description").val(),
                    currentMetalPrices: $("#id-current-metal-prices").val(),
                    companyName: $("#id-company-name").val(),
                    projectTitle: $("#id-project-title").val()
                  },
                  frame: {
                    frameHeight: Number($("#id-frame1-height").val()),
                    frameDepth: Number($("#id-frame1-depth").val()),
                    frameQty: Number($("#id-frame1-qty").val())
                  },
                  bays: bays,
                  shelfType: this.state.selectedShelfOption,
                  userId: this.props.user._id,
                  createdAt: new Date()
                  };

    browserHistory.push({
      pathname: '/showquote',
      state: {rackingRequirements: rackingRequirements}});
    // insert.call(specs, displayError);

  }

  btnCancel(){
    browserHistory.push({pathname: '/',state: { some: 'state' }});
  }

  handleOptionChange(changeEvent){
    // console.log("changed");
    this.setState({
      selectedShelfOption: changeEvent.target.value
  });

  }
  render() {
    const MAPLOG=false
    const defaultProjectSpecs = this.props.defaultProjectSpecs
    if(MAPLOG)console.log("defaultProjectSpecs",defaultProjectSpecs)

    var trBays = []
    trBays = null
    trBays=[]
  trBays.length=0
    if(trBays.length>0) trBays=[]
      if(MAPLOG)console.log("trBays.length",trBays.length);

    if(MAPLOG)console.log("trBays",trBays);
    for (var i = 0; i < defaultProjectSpecs.bays.length; i++) {
      trBays.push(
        <tr key={"trBaysWithValues"+"tr"+i}>
        <td>{i}</td>
        <td><FormControl type="text" 
                                // placeholder="12" 
                          id={"id-bay"+i+"-length"}
                          defaultValue={defaultProjectSpecs.bays[i].length}/></td>
        <td><FormControl type="text" 
                                // placeholder="10" 
                          id={"id-bay"+i+"-qty"}
                          defaultValue={defaultProjectSpecs.bays[i].qty}/></td>
        <td><FormControl type="text" 
                        // placeholder="5" 
                        id={"id-bay"+i+"-levels"}
                        defaultValue={defaultProjectSpecs.bays[i].levels}/></td>
        <td><FormControl type="text" 
                        // placeholder="3000" 
                        id={"id-bay"+i+"-loadPerLevel"}
                        defaultValue={defaultProjectSpecs.bays[i].loadPerLevel}/></td>
                      </tr>           
        )
      
    }

    if(MAPLOG)console.log("trBays",trBays);

    if(trBays.length<4){
      for (var j = trBays.length; j <4 ; j++) {
        trBays.push(
                  <tr key={"trBays"+"tr"+j}>
        <td>{j}</td>
        <td><FormControl type="text" 
                                // placeholder="12" 
                          id={"id-bay"+j+"-length"}
                          defaultValue=""/></td>
        <td><FormControl type="text" 
                                // placeholder="10" 
                          id={"id-bay"+j+"-qty"}
                          defaultValue=""/></td>
        <td><FormControl type="text" 
                        // placeholder="5" 
                          id={"id-bay"+j+"-levels"}
                          defaultValue=""/></td>
        <td><FormControl type="text" 
                        // placeholder="3000" 
                          id={"id-bay"+j+"-loadPerLevel"}
                          defaultValue=""/></td>
                      </tr>
          )
      }
    }

    if(MAPLOG)console.log("trBays",trBays);


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
                      defaultValue={defaultProjectSpecs.projectSettings.companyName} />

                  </div>
                  <div className="col-xs-6">
                    <ControlLabel>Project</ControlLabel>
                    <FormControl 
                      type="text" 
                      defaultValue={defaultProjectSpecs.projectSettings.projectTitle}
                      id="id-project-title"/>
                      
                  </div>
                </div>
              </FormGroup>
              
                <div className="row">
                  <div className="col-xs-6">
                    <ControlLabel>Racks Description</ControlLabel>
                    <FormControl 
                      type="text" 
                      id="id-racks-description"
                      defaultValue={defaultProjectSpecs.projectSettings.racksDescription} />

                  </div>
                  <div className="col-xs-6">
                    <ControlLabel>Current Metal Price</ControlLabel>
                    <FormControl 
                      type="text" 
                      defaultValue={defaultProjectSpecs.projectSettings.currentMetalPrices}
                      id="id-current-metal-prices"/>
                      
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
                              // placeholder="15" 
                              id="id-frame1-height"
                              defaultValue={defaultProjectSpecs.frame.frameHeight}/></td>
                        <td><FormControl type="text" 
                              // placeholder="3" 
                              id="id-frame1-depth"
                              defaultValue={defaultProjectSpecs.frame.frameDepth}/></td>
                        <td><FormControl type="text" 
                              // placeholder="10" 
                              id="id-frame1-qty"
                              defaultValue={defaultProjectSpecs.frame.frameQty}/></td>
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
                      {trBays}
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
                      value = "metalShelf1.2mm"
                      checked={this.state.selectedShelfOption === 'metalShelf1.2mm'}>
                    Metal Shelf 1.2mm
                  </Radio>
                  {' '}
                  <Radio 
                      inline name="option" 
                      onChange={this.handleOptionChange}
                      value = "metalShelf1.5mm"
                      checked={this.state.selectedShelfOption === 'metalShelf1.5mm'}>
                    Metal Shelf 1.5mm
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
  defaultProjectSpecs: React.PropTypes.object

};

NewPalletRack.contextTyoes = {
  router: PropTypes.object
}

const mapStateToProp =(state, ownProps)=>{
  return {
    defaultProjectSpecs: state.defaultProjectSpecs
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