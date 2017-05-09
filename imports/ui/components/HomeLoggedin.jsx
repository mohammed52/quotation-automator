import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {updateModalFlag, setCompanyProjectTitle} from '../../redux/actions/actions' 
import {connect} from 'react-redux'
import $ from "jquery"
import { withRouter } from 'react-router-dom'
import {setProjectSpecs} from '../../redux/actions/actions'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomeLoggedIn extends Component {

  constructor(props) {
    super(props);
    const showModalFlag = this.props.showModalFlag
    this.state = { showModal: showModalFlag };

    this.onCreateNewProject = this.onCreateNewProject.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.viewAll = this.viewAll.bind(this);
  }
  
  close() {
    this.setState({ showModal: false });
    const showModalFlag = this.props.showModalFlag
    const {switchFlag} = this.props
    if(showModalFlag) switchFlag(false)
  }

  
  open() {
    this.setState({ showModal: true });
    browserHistory.push({pathname: '/wrapper/newpalletrack'})
  }

  onCreateNew(){
    // console.log("create new")
  }
  
  onCreateNewProject(){
    // console.log("create new project")
    
    const showModalFlag = this.props.showModalFlag
    console.log("showModalFlag: ", showModalFlag)
    const {switchFlag} = this.props
    if(showModalFlag) switchFlag(false)

    var defaultProjectSpecs = this.props.defaultProjectSpecs
    var {saveLastSpecsObject} = this.props

    defaultProjectSpecs.projectSettings.companyName = $("#id-company-name").val()
    defaultProjectSpecs.projectSettings.projectTitle = $("#id-project-title").val()
    saveLastSpecsObject(defaultProjectSpecs)

    browserHistory.push({pathname: '/wrapper/newpalletrack'})

  }
  
  componentWillMount(){
    const MAPLOG=true
    if(MAPLOG)console.log("componentWillMount");
    
    const showModalFlag = this.props.showModalFlag
    if(showModalFlag){
      this.setState({
          showModal: true
        })   
    }else{
      this.setState({
          showModal: false
        })
    }
  }

  componentDidMount(){

    
  }

  viewAll(){
    browserHistory.push('/wrapper/showallquotes');
  }
  render() {
    const defaultProjectSpecs = this.props.defaultProjectSpecs
    const {saveLastSpecsObject} = this.props.saveLastSpecsObject
    
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
            </div>

            <Modal show={false} onHide={this.close}>
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
          id="id-company-name" 
          defaultValue={defaultProjectSpecs.projectSettings.companyName}/>

          <ControlLabel>Project</ControlLabel>
          <FormControl 
          componentClass="input" 
          placeholder="project name" 
          // defaultValue="Name of project"
          id="id-project-title"
          defaultValue={defaultProjectSpecs.projectSettings.projectTitle}/>

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

HomeLoggedIn.propTypes = {
    showModalFlag: PropTypes.bool,
    switchFlag: PropTypes.func,
    defaultProjectSpecs: PropTypes.object,
    saveLastSpecsObject: PropTypes.func

  }

HomeLoggedIn.contextTypes = {
  user: React.PropTypes.object
}

const mapStateToProp =(state, ownProps)=>{
  return {
    showModalFlag: state.showModalFlag,
    defaultProjectSpecs: state.defaultProjectSpecs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchFlag(newVal){
      console.log("newVal")
      console.log(newVal)
      dispatch(updateModalFlag(newVal))
    },

    saveLastSpecsObject(object){
      const MAPLOG = true
      if(MAPLOG)console.log("object",object);

      dispatch(setProjectSpecs(object))
    }
  }
}

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(HomeLoggedIn))