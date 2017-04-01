import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class HomeLoggedIn extends Component {

  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.onCreateNew = this.onCreateNew.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.viewAll = this.viewAll.bind(this);
  }
  
  close() {
    this.setState({ showModal: false });
  }

  
  open() {
    this.setState({ showModal: true });
  }

  onCreateNew(){
    // console.log("create new")
  }
  
  onCreateNewProject(){
    // console.log("create new project")
    browserHistory.push('/newpalletrack');
  }

  componentDidMount(){
    this.setState({
      showModal: true
    });
    
  }

  viewAll(){
    browserHistory.push('/allquotes');
  }
  render() {
    // console.log(this.context)
    // console.log(this.context.user)
    
    return (
          <div className="container-fluid row testbg-1 text-center">
            <div className="col-sm-6 center-block container-fluid testbg-2">
              <br/>
              <Button bsStyle="primary" bsSize="large" onClick={this.open}>Create New</Button>
              <br/>
              <br/>
              <Button bsStyle="info" bsSize="small" onClick={this.viewAll}>View All</Button>
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
            <Modal.Title>Create New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="formControlsTextarea">
          
          <ControlLabel>Company</ControlLabel>
          <FormControl 
          componentClass="textarea"
          placeholder="company name, address and contact details (to be used in quotation)" 
          // defaultValue="Name of company"
          id="id-text-name" />

          <ControlLabel>Project</ControlLabel>
          <FormControl 
          componentClass="input" 
          placeholder="project name" 
          // defaultValue="Name of project"
          id="id-text-ingredients"/>

          </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.onCreateNewProject}>Create Project</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
          </Modal>
          </div>
    );
  }
}

// HomeLoggedIn.propTypes = {
//     browserHistory: PropTypes.object.isRequired
//   }

HomeLoggedIn.contextTypes = {
  user: React.PropTypes.object
}