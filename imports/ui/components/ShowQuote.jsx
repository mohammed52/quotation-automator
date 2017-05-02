import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import $ from "jquery"
import { connect } from 'react-redux'
// import {UprightWeightTable, BeamConnectorTable} from '../helpers/WeightCapacityTables'
import {PricingTable} from '../helpers/PricingTable'
import {CostPriceAddOns} from '../helpers/PricingTable'
// import { getFrameSpecsAndCost } from '../helpers/getFrameSpecsAndCost'
import {getUprightSpecsAndCost} from '../helpers/getUprightSpecsAndCost'
import {getBeamSpecsAndCost} from '../helpers/getBeamSpecsAndCost'
import {getBracingSpecsAndCost} from '../helpers/getBracingSpecsAndCost'
import {getBeamConnectorSpecsAndCost} from '../helpers/getBeamConnectorSpecsAndCost'
import {getBasePlateSpecsAndCost} from '../helpers/getBasePlateSpecsAndCost'
import {getNutBoltSpecsAndCost} from '../helpers/getNutBoltSpecsAndCost'
import {getShelfSpecsAndCost} from '../helpers/getShelfSpecsAndCost'
import {getTotalRacksQty} from '../helpers/getTotalRacksQty'
import {numberWithCommas} from '../helpers/numberWithCommas'
import {setProjectSpecs} from '../../redux/actions/actions'
// import FrameTable from './FrameTable'
// import BaysTable from './BaysTable'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// var Modal = ReactBootstrap.Modal;
var Form = ReactBootstrap.Form;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var FormGroup = ReactBootstrap.FormGroup
// var Radio = ReactBootstrap.Radio;
var Table = ReactBootstrap.Table;
// var FieldGroup = ReactBootstrap.FieldGroup
// var Input = ReactBootstrap.Input;

class ShowQuote extends Component {
  
  constructor(props) {
    super(props);
    this.btnSaveAndClose = this.btnSaveAndClose.bind(this);
    this.onMarginChange = this.onMarginChange.bind(this)
    this.state = {
        margin: 30
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

  btnSaveAndClose(){
    const MAPLOG = false
    if(MAPLOG)console.log("btnSaveAndClose");
    browserHistory.push('/allquotes');
  }

  onMarginChange(){
    const MAPLOG=true
    if(MAPLOG)console.log("Margin Changed");
    this.setState(
      {margin: Number($("#id-margin").val())}
    )
  }

  render() {
    // console.log(this.context.user)
    
    const MAPLOG=false
   
    //save last specs object
    const { saveLastSpecsObject } = this.props;
    saveLastSpecsObject(this.props.location.state.rackingRequirements) 

    if(MAPLOG)console.log("this.props.location.state",this.props.location.state)
    var arrayCostObjects = []
    const bays = this.props.location.state.rackingRequirements.bays

    //1. upright object
    arrayCostObjects.push(getUprightSpecsAndCost(this.props.location.state.rackingRequirements))
    
    //2. Beams objects
    for (var i=0; i<bays.length; i++) {
      arrayCostObjects.push(getBeamSpecsAndCost(i, bays[i]))   
    }
    if(MAPLOG)console.log("arrayCostObjects",arrayCostObjects);

    //3. Bracing Object
    arrayCostObjects.push(getBracingSpecsAndCost(this.props.location.state.rackingRequirements))

    //4. Beam Connector Object:
    for (var j=0; j<bays.length; j++) {
      arrayCostObjects.push(getBeamConnectorSpecsAndCost(j, bays[j]))   
    }

    //5.Base Plates Object
    arrayCostObjects.push(getBasePlateSpecsAndCost(this.props.location.state.rackingRequirements))
    
    //6. Nut Bolts
    arrayCostObjects.push(getNutBoltSpecsAndCost(this.props.location.state.rackingRequirements))
    
    //7. Shelf
    if (this.props.location.state.rackingRequirements.shelfType!="noShelf") {
      arrayCostObjects.push(getShelfSpecsAndCost(this.props.location.state.rackingRequirements))
    }

    if(MAPLOG)console.log("arrayCostObjects",arrayCostObjects);
    var trArr = []
    let specsOnly=[];
    for (var k = 0; k < arrayCostObjects.length; k++) {
          trArr.push(
            <tr key={"trArr"+"tr"+k}>
                        <td>{k+1}</td>
                        <td>{arrayCostObjects[k].description}</td>
                        <td>{arrayCostObjects[k].unitWeight.toFixed(2)}</td>
                        <td>{arrayCostObjects[k].qty}</td>
                        <td>{(arrayCostObjects[k].unitWeight*arrayCostObjects[k].qty).toFixed(2)}</td>
                      </tr>
            
            )

          //get total rack description
          if(k===0) {
            specsOnly.push(<span key={"specsOnly"+k}>{"-- "+arrayCostObjects[k].description}</span>)
          } else {
              specsOnly.push(<br key={"specsOnly"+"br"+k}/>)
              specsOnly.push(<span key={"specsOnly"+"span"+k}>{"-- "+arrayCostObjects[k].description}</span>)
            }
        }

    var totalProjectWeight=0;

    for (var l = 0; l < arrayCostObjects.length; l++) {
          totalProjectWeight+=arrayCostObjects[l].unitWeight*arrayCostObjects[l].qty
    }

    const totalRacks = getTotalRacksQty(this.props.location.state.rackingRequirements)

    trArr.push(
            <tr key="trArr-tr-totalProject-Weight">
              <td></td>
              <td></td>
              <td></td>
              <td><strong>Total Project Weight:</strong></td>
              <td><strong>{totalProjectWeight.toFixed(2)}</strong></td>
            </tr>
            )
    


    trArr.push(
            <tr key="trArr-tr-weightPerRack">
              <td></td>
              <td></td>
              <td></td>
              <td>Weight Per Rack:</td>
              <td>{(totalProjectWeight/totalRacks).toFixed(2)}</td>
            </tr>
            )
    
    
    
    if(MAPLOG)console.log("CostPriceAddOns.price",CostPriceAddOns.price);
    if(MAPLOG)console.log("this.props.location.state.rackingRequirements.projectSettings.currentMetalPrices",this.props.location.state.rackingRequirements.projectSettings.currentMetalPrices);
    const unitPrice = Number(this.props.location.state.rackingRequirements.projectSettings.currentMetalPrices)+Number(CostPriceAddOns.price)
    
    if(MAPLOG)console.log("unitPrice",unitPrice);
    
    //load pricing table
    if(MAPLOG)console.log("PricingTable",PricingTable);
    let pricingTableArr = []
    for (var m = 0; m < PricingTable.length; m++) {
      pricingTableArr.push(
        <tr key={"pricingTableArr"+"tr"+m}>
              <td>{PricingTable[m].description}</td>
              <td>{"Rs."+numberWithCommas((PricingTable[m].rate*unitPrice*totalProjectWeight/totalRacks).toFixed(2))+"/-"}</td>
              <td>{"Rs."+numberWithCommas((PricingTable[m].rate*unitPrice*totalProjectWeight).toFixed(2))+"/-"}</td>
        </tr>
        
        )
      
    }

    const margin = (this.state.margin+100)/100
    return (
          <div> Show Quote
          <div className='row testbg-1'>
            <div className="container-fluid row">
            
            <div className="col-sm-6 testbg-2">
              <h4>Project Quote</h4>

              <div className="well">
                <Table className="table">
                    <thead>
                      <tr>
                        <th>Rock Bottom Price</th>
                        <th>Qty. of Racks</th>
                        <th>Total Project Cost</th>
                        
                      </tr>

                    </thead>
                    <tbody>
                      <tr>
                        <th>{("Rs. "+numberWithCommas((unitPrice*totalProjectWeight/totalRacks).toFixed(2))+"/-")}</th>
                        <th>{totalRacks}</th>
                        <th>{("Rs. "+numberWithCommas((unitPrice*totalProjectWeight).toFixed(2))+"/-")}</th>
                      </tr>
                    </tbody>
                  </Table>

              </div>
              <h4>Custom Quote</h4>

              <div className="well">
              <Form horizontal>
                <FormGroup controlId="formInlineMargin">
                  <ControlLabel>Increase Margin(%): </ControlLabel>
                        <FormControl 
                          type="text" 
                          id="id-margin"
                          defaultValue={30} 
                          onChange={this.onMarginChange}/>
                </FormGroup>
              </Form>

                <Table className="table">
                    <thead>
                      <tr>
                        <th>Price With Margin</th>
                        <th>Qty. of Racks</th>
                        <th>Total Project Cost</th>
                      </tr>

                    </thead>
                    <tbody>
                      <tr>
                        <th>{("Rs. "+numberWithCommas((unitPrice*totalProjectWeight*margin/totalRacks).toFixed(2))+"/-")}</th>
                        <th>{totalRacks}</th>
                        <th>{("Rs. "+numberWithCommas((unitPrice*totalProjectWeight*margin).toFixed(2))+"/-")}</th>
                      </tr>
                    </tbody>
                  </Table>

              </div>


              <h4>Higher Prices</h4>
              <div className="well">
                <Table className="table">
                    <thead>
                      <tr>
                        <th>Project Type</th>
                        <th>Rock Bottom Price</th>
                        <th>Unit Price</th>
                      </tr>

                    </thead>
                    <tbody>
                      {pricingTableArr}
                    </tbody>
                  </Table>

              </div>
              

            </div>
            <div className="col-sm-6 testbg-1">

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

              <h4>Specificaions</h4>
              <div className="well">
                {specsOnly}
              </div>
            </div>
          </div>
          <div className="container-fluid testbg-1 text-center">
            <Button onClick={this.btnSaveAndClose} bsStyle="primary">Save and Close</Button>
          </div>
          </div>
          </div>
    );
  }
}

ShowQuote.propTypes = {
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
  location: React.PropTypes.object,
  saveLastSpecsObject: React.PropTypes.func
};

ShowQuote.contextTypes = {
  user: React.PropTypes.object
}

const mapStateToProp =(state, ownProps)=>{
  return {
    // companyProjectTitle: state.companyProjectTitle,
    // defaultProjectSpecs: state.defaultProjectSpecs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveLastSpecsObject(object){
      const MAPLOG = false
      if(MAPLOG)console.log("object",object);

      dispatch(setProjectSpecs(object))
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(ShowQuote)