// { "keys": ["ctrl+shift+x"],
//         "command": "insert_snippet",
//         "args": {
//           "contents": "componentDidMount(){setTimeout(function(){debugger}, 10000)}"
//         }
//   }

import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import $ from "jquery"
import {loadQuotesTable} from '../helpers/loadQuotesTable'
import {remove} from '../../api/quotes/methods'
import { displayError } from '../helpers/errors.js';
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

export default class SingleQuoteRow extends Component {
  
  constructor(props) {
    super(props);
    // this.btnGenerateQuote = this.btnGenerateQuote.bind(this);
    // this.btnCancel = this.btnCancel.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);

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

  deleteQuote(){
    const MAPLOG=true
    if(MAPLOG)console.log("delete");
    remove.call({quoteId: this.props.quote._id}, displayError)
  }

  // componentDidMount(){setTimeout(function(){debugger}, 10000)}

  render() {
    const MAPLOG = true
    // console.log(this.context.user)
    const {quote, i} = this.props

    return (
      <tr key={"trTable-tr"+i}>
                        <th>{i+1}</th>
                        <th>{quote.createdAt.toDateString()}</th>
                        <th>{quote.projectSettings.companyName}</th>
                        <th>{quote.projectSettings.projectTitle}</th>
                        <th>{quote.projectSettings.racksDescription}</th>
                        
                        <th>
                        <a
                          // className="delete-item"
                          href="#delete"
                          onClick={this.deleteTodo}
                          onMouseDown={this.deleteTodo}
                        >
                          <i className="fa fa-pencil-square-o" aria-hidden="true"/>
                        </a>
                        </th>
                        <th><a
                          // className="delete-item"
                          href="#delete"
                          onClick={this.deleteTodo}
                          onMouseDown={this.deleteTodo}
                        >
                          <i className="fa fa-clone" aria-hidden="true"/>
                        </a></th>
                        <th><a
                          // className="delete-item"
                          href="#delete"
                          onClick={this.deleteQuote}
                          // onMouseDown={this.deleteQuote}
                        >
                          <i className="fa fa-trash-o" aria-hidden="true"/>
                        </a></th>

      </tr>
    );
  }
}

// NewPalletRack.propTypes = {
//   user: React.PropTypes.object,      // current meteor user
//   connected: React.PropTypes.bool,   // server connection status
// };

SingleQuoteRow.contextTypes = {
  user: React.PropTypes.object,

}

SingleQuoteRow.propTypes = {
  quote: React.PropTypes.object,
  i: React.PropTypes.number
};