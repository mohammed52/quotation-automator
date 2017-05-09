import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import $ from "jquery"
import {loadQuotesTable} from '../helpers/loadQuotesTable'
import {remove} from '../../api/quotes/methods'
import { displayError } from '../helpers/errors.js';
import {setProjectSpecs} from '../../redux/actions/actions'
import { connect } from 'react-redux'

// import {bootbox} from 'bootbox/bootbox.min'

// import FrameTable from './FrameTable'
// import BaysTable from './BaysTable'

var ReactBootstrap = require('react-bootstrap');
var Modal = ReactBootstrap.Modal

var bootbox = require('bootbox');

var Button = ReactBootstrap.Button;

var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl
var Radio = ReactBootstrap.Radio;
var Table = ReactBootstrap.Table;
var FieldGroup = ReactBootstrap.FieldGroup;
var Input = ReactBootstrap.Input

class SingleQuoteRow extends Component {
  
  constructor(props) {
    super(props);
    // this.btnGenerateQuote = this.btnGenerateQuote.bind(this);
    // this.btnCancel = this.btnCancel.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
    this.editQuote = this.editQuote.bind(this);
    this.copyQuote = this.copyQuote.bind(this);

    this.state = {
        // selectedShelfOption: "noShelf"
    }
  }


  componentWillMount(){
    console.log("componentWillMount")
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
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

  editQuote(){
    const MAPLOG=true
    if(MAPLOG)console.log("edit");
    const { saveLastSpecsObject } = this.props;
    saveLastSpecsObject(this.props.quote) 
    browserHistory.push({pathname: '/wrapper/newpalletrack'})
  }

  deleteQuote(){
    const MAPLOG = true
    if(MAPLOG)console.log("deletequote");
        
        // const deleteQuoteMessage = "Do you want to delete quote? This cannot be undone."
        // bootbox.confirm({
        // title: "Delete Quote?",
        // message: deleteQuoteMessage,
        // buttons: {
        //     cancel: {
        //         label: '<i class="fa fa-times"></i> Cancel',
        //         className: 'btn-default'
        //     },
        //     confirm: {
        //         label: '<i class="fa fa-check"></i> Delete',
        //         className: 'btn-danger'
        //     }
        // },
        // callback: function (result) {
        //   const MAPLOG = true
        //   if(result===true){
            
        //     if(MAPLOG)console.log("delete");
        //     remove.call({quoteId: this.props.quote._id}, displayError)
        //     browserHistory.push({pathname: '/wrapper/showallquotes'})
        //   }else{
        //     if(MAPLOG)console.log("result",result)
        //   }
        // }.bind(this)
        //   });
  }

  copyQuote(){
    const MAPLOG = true
    if(MAPLOG)console.log("edit");
    const { saveLastSpecsObject } = this.props;
    var quoteSpecs = this.props.quote
    delete quoteSpecs._id
    saveLastSpecsObject(quoteSpecs) 
    browserHistory.push({pathname: '/wrapper/newpalletrack'})

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
                          onClick={this.editQuote}
                        >
                          <i className="fa fa-pencil-square-o" aria-hidden="true"/>
                        </a>
                        </th>
                        <th><a
                          // className="delete-item"
                          href="#delete"
                          onClick={this.copyQuote}
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
  i: React.PropTypes.number,
  saveLastSpecsObject: React.PropTypes.func,
};

const mapStateToProp =(state, ownProps)=>{
  return {
    defaultProjectSpecs: state.defaultProjectSpecs
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

export default connect(mapStateToProp, mapDispatchToProps)(SingleQuoteRow)