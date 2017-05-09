import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import $ from "jquery"
import SingleQuoteRow from './SingleQuoteRow'

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

export default class ShowAllQuotes extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
    }
  }


  componentWillMount(){
    // console.log("componentWillMount")
  }

  componentWillUpdate(){

  }

  componentWillReceiveProps(nextProps, nextContext){

    // const user = nextContext.user;
    // if(user==null){
    //   browserHistory.push('/');
    // }
  }
  
  componentDidUpdate(){

  }

  btnGenerateQuote(){

  }

  btnCancel(){
  }


  render() {
    const MAPLOG = true
    
    const quotes = this.props.quotes
    let quotesTableRows = []
    
    for (var i = 0; i < quotes.length; i++) {
    quotesTableRows.push(
        <SingleQuoteRow key={"SingleQuoteRow"+i} i={i} quote={quotes[i]} />
      )
  }

  if(quotes.length<=0){
    return (
      <div className="well">
        <div className="container-fluid center-text">
          No Quotes to Display
        </div>
    </div>
    );
  } else {
    // if(MAPLOG)console.log("quotes",quotes)

    return (
          <div> All Quotes
          <div className="well">
            <Table className="table">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Date</th>
                        <th>Company Name</th>
                        <th>Project Title</th>
                        <th>Racks Description</th>
                        <th></th>
                        <th></th>
                        <th></th>
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
}

ShowAllQuotes.contextTypes = {
  user: React.PropTypes.object
}

ShowAllQuotes.propTypes = {
  quotes: React.PropTypes.array,
  user: React.PropTypes.object
};