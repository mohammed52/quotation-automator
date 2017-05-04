import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import $ from "jquery"
import {loadQuotesTable} from '../helpers/loadQuotesTable'
// import FrameTable from './FrameTable'
// import BaysTable from './BaysTable'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl
var Radio = ReactBootstrap.Radio;
var Table = ReactBootstrap.Table;
var FieldGroup = ReactBootstrap.FieldGroup;
var Input = ReactBootstrap.Input;

export default class AllQuotes extends Component {
  
  constructor(props) {
    super(props);
    // this.btnGenerateQuote = this.btnGenerateQuote.bind(this);
    // this.btnCancel = this.btnCancel.bind(this);
    // this.handleOptionChange = this.handleOptionChange.bind(this);

    this.state = {
        // selectedShelfOption: "noShelf"
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
    //   const user = this.props.user;
    // console.log(user) 
  }

  btnGenerateQuote(){

  }

  btnCancel(){
    // console.log("cancel...")
  }

  render() {
    const MAPLOG = true
    console.log(this.context.user)
    
    const quotes = this.props.quotes
    const quotesTableRows = loadQuotesTable(quotes)
    if(MAPLOG)console.log("quotes",quotes);

    // debugger
    return (
          <div> All Quotes
          <div className="well">
            <Table className="table">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Company Name</th>
                        <th>Project Title</th>
                        <th>Racks Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quotesTableRows}
                    </tbody>
                  </Table>
          </div>
          </div>
    );
  }
}

// NewPalletRack.propTypes = {
//   user: React.PropTypes.object,      // current meteor user
//   connected: React.PropTypes.bool,   // server connection status
// };

AllQuotes.contextTypes = {
  user: React.PropTypes.object
}

AllQuotes.propTypes = {
  quotes: React.PropTypes.array,
  user: React.PropTypes.object
};