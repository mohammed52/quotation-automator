import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import $ from "jquery"
import {UprightWeightTable, BeamConnectorTable} from '../helpers/WeightCapacityTables'
import { getFrameSpecsAndCost } from '../helpers/getFrameSpecsAndCost'
import {getUprightSpecsAndCost} from '../helpers/getUprightSpecsAndCost'
import {getBeamSpecsAndCost} from '../helpers/getBeamSpecsAndCost'
import {getBracingSpecsAndCost} from '../helpers/getBracingSpecsAndCost'
import {getBeamConnectorSpecsAndCost} from '../helpers/getBeamConnectorSpecsAndCost'
import {getBasePlateSpecsAndCost} from '../helpers/getBasePlateSpecsAndCost'
import {getNutBoltSpecsAndCost} from '../helpers/getNutBoltSpecsAndCost'

// import FrameTable from './FrameTable'
// import BaysTable from './BaysTable'

var ReactBootstrap = require('react-bootstrap');
// var Button = ReactBootstrap.Button;
// var Modal = ReactBootstrap.Modal;
// var FormGroup = ReactBootstrap.FormGroup;
// var ControlLabel = ReactBootstrap.ControlLabel;
// var FormControl = ReactBootstrap.FormControl;
// var Radio = ReactBootstrap.Radio;
var Table = ReactBootstrap.Table;
// var FieldGroup = ReactBootstrap.FieldGroup
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
    //   const user = this.props.user
    // console.log(user) 
  }

  btnGenerateQuote(){

  }

  btnCancel(){
    // console.log("cancel...")
  }

  render() {
    // console.log(this.context.user)
    
    const MAPLOG=true
    
    if(MAPLOG)console.log("this.props.location.state",this.props.location.state);
    var arrayCostObjects = []
    const bays = this.props.location.state.rackingRequirements.bays

    //1. upright object
    arrayCostObjects.push(getUprightSpecsAndCost(this.props.location.state.rackingRequirements))
    
    //2. bays objects
    for (var i=0; i<bays.length; i++) {
      arrayCostObjects.push(getBeamSpecsAndCost(bays[i]))   
    }

    //3. Bracing Object
    arrayCostObjects.push(getBracingSpecsAndCost(this.props.location.state.rackingRequirements))

    //4. Beam Connector Object:
    for (var j=0; j<bays.length; j++) {
      arrayCostObjects.push(getBeamConnectorSpecsAndCost(bays[j]))   
    }

    //5.Base Plates Object
    arrayCostObjects.push(getBasePlateSpecsAndCost(this.props.location.state.rackingRequirements))
    
    //6. Nut Bolts
    arrayCostObjects.push(getNutBoltSpecsAndCost(this.props.location.state.rackingRequirements))

    if(MAPLOG)console.log("arrayCostObjects",arrayCostObjects);
    var trArr = []

    for (var k = 0; k < arrayCostObjects.length; k++) {
          trArr.push(
            <tr>
                        <td>{k+1}</td>
                        <td>{arrayCostObjects[k].description}</td>
                        <td>{arrayCostObjects[k].unitWeight.toFixed(2)}</td>
                        <td>{arrayCostObjects[k].qty}</td>
                        <td>{(arrayCostObjects[k].unitWeight*arrayCostObjects[k].qty).toFixed(2)}</td>
                      </tr>
            
            )
        }

    var totalProjectWeight=0;

    for (var l = 0; l < arrayCostObjects.length; l++) {
          totalProjectWeight+=arrayCostObjects[l].unitWeight*arrayCostObjects[l].qty
    }

    trArr.push(
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Sub Total:</td>
              <td>{totalProjectWeight.toFixed(2)}</td>
            </tr>
            )

    return (
          <div> Show Quote
          <div className='row testbg-1'>
            <div className="container-fluid row">
            <div className="col-sm-6 testbg-1">

              <h4>Project Settings</h4>
              <div className="well">
              
              
              <div className="row">
                  <div className="col-xs-6">
                    Hello
                  </div>
                  <div className="col-xs-6">
                      Hello
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-6">
              Hello
                  </div>
                  <div className="col-xs-6">
                      Hello
                  </div>
                </div>
              </div>

              <h4>Racking Specs</h4>
              <div className="well">
                <Table className="table">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Item</th>
                        <th>Unit Weight</th>
                        <th>Qty.</th>
                        <th>Sub Total</th>
                      </tr>

                    </thead>
                    <tbody>
                      {trArr}
                    </tbody>
                  </Table>
                  </div>
            </div>
            <div className="col-sm-6 testbg-2">
                                <h4>Bays</h4>

              <div className="well">
                Hello-7

              </div>

            </div>
          </div>
          <div className="container-fluid testbg-1 text-center">
            Hello-8
          </div>
          </div>
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