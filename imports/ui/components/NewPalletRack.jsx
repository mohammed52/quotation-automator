import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

export default class NewPalletRack extends Component {

  componentWillMount(){
    console.log("componentWillMount");
  }

  componentWillUpdate(){
    console.log("componentWillUpdate");    
    const user = Meteor.user();
    if(user!==null){
      console.log("user EXISTS")
    } else {
      console.log("user is null")
      browserHistory.push('/');
    }
  }
  render() {
    // const {user, connected} = this.props;
    const user = this.props.user;
    console.log(user)
    return (
          <div>   
          New Pallet Rack
          <div className="container-fluid row">
            <div className="col-sm-6 testbg-1">
              <br/>
              <div className="well">hello</div>
            </div>
            <div className="col-sm-6 testbg-2">
              <br/>
              <div className="well">hello</div>
            </div>
          </div>
          </div>
    );
  }
}

NewPalletRack.propTypes = {
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
};