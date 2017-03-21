import React, { Component } from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class HomeLoggedIn extends Component {

  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.onCreateNew = this.onCreateNew.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  
  close() {
    this.setState({ showModal: false });
  }

  
  open() {
    this.setState({ showModal: true });
  }

  onCreateNew(){
    console.log("create new")
  }
  componentDidMount(){
    this.setState({
      showModal: true
    });
  }
  render() {
    return (
          <div className="container-fluid row testbg-1 text-center">
            <div className="col-sm-6 center-block container-fluid testbg-2">
              <br/>
              <Button bsStyle="primary" bsSize="large" onClick={this.open}>Create New</Button>
              <br/>
              <br/>
              <Button bsStyle="info" bsSize="small">View All</Button>
              <br/>
            </div>
            <div className="col-sm-6 container-fluid testbg-2">
              <ul>
                <li>Quotes Count: 10</li>
                <li>Quotes Value: $$$</li>
                <li>Time Spent vs Time Saved Graph</li>
                <li>$$$ saved: $$$</li>
              </ul>
              <div>* at $25 an Hour</div>

            </div>

            <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading-2</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
          </Modal>
          </div>
    );
  }
}