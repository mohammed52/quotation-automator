import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux'


class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = this.getMeteorData();
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount(){
    // if (this.state.isAuthenticated) {
    //   browserHistory.push('/wrapper');
    // }
  }

  componentDidMount(){

    
  }

  componentDidUpdate(){
    // if (this.state.isAuthenticated) {
    //   browserHistory.push('/wrapper');
    // }
  }

  render() {
    
    return (
      <div>Please Sign In</div>    
    );
  }
}

SignIn.propTypes = {
    // showModalFlag: PropTypes.bool,
    // switchFlag: PropTypes.func,
    // defaultProjectSpecs: PropTypes.object,
    // saveLastSpecsObject: PropTypes.func,

  }

SignIn.contextTypes = {
  // user: React.PropTypes.object
}

const mapStateToProp =(state, ownProps)=>{
  return {
    // showModalFlag: state.showModalFlag,
    // defaultProjectSpecs: state.defaultProjectSpecs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // switchFlag(newVal){
    //   console.log("newVal")
    //   console.log(newVal)
    //   dispatch(updateModalFlag(newVal))
    // },

    // saveLastSpecsObject(object){
    //   const MAPLOG = true
    //   if(MAPLOG)console.log("object",object);

    //   dispatch(setProjectSpecs(object))
    // }
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(SignIn)