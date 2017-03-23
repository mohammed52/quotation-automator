import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class NewPalletRack extends Component {

  componentWillMount(){
    console.log("componentWillMount");
  }

  componentWillUpdate(){
    console.log("componentWillUpdate");
    const user = this.props.user;
    console.log(user)    
  }
  render() {
    // const {user, connected} = this.props;
    const user = this.props.user;
    console.log(user)
        if(user!==null){
      console.log("user EXISTS")
    } else {
      console.log("user is null")
      browserHistory.push('/');
    }

    var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];



    return (
          <div>   
          New Pallet Rack
          <div className="container-fluid row">
            <div className="col-sm-6 testbg-1">
            <BootstrapTable data={products} striped hover>
      <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField='price' columnClassName="columnClassNameFormat">Product Price</TableHeaderColumn>
  </BootstrapTable>
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