import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import FrameTable from './FrameTable'

export default class NewPalletRack extends Component {

  componentWillMount(){
    console.log("componentWillMount");
  }

  componentWillUpdate(){
    console.log("componentWillUpdate");
    const user = this.props.user;
    console.log(user)    
  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps")

      const user = nextProps.user;
      console.log(user)
        if(user!==null){
      console.log("user EXISTS")
    } else {
      console.log("user is null")
      browserHistory.push('/');
    }
  }
  
  componentDidUpdate(){
    console.log("componentDidUpdate")
      const user = this.props.user;
    console.log(user) 
  }
  render() {
    return (
          <div>   
          New Pallet Rack
          <div className="container-fluid row">
            <div className="col-sm-6 testbg-1">

              <br/>
              <div className="well">
                <div className="container-fluid frame-wrapper">  
                  <FrameTable />
                </div>
              </div>
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