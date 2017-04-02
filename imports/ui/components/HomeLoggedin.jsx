import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {updateModalFlag, setCompanyProjectTitle} from '../../redux/actions/actions' 
import {connect} from 'react-redux'
import $ from "jquery"

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

    console.log($("#id-company-name").val())
    console.log($("#id-project-title").val())

    // browserHistory.push('/newpalletrack', 
    //   { companyName: $("#id-company-name").val(), 
    //   projectTitle: $("#id-project-title").val() });
    const {setCompanyProjectTitle} = this.props

    browserHistory.push({pathname: '/newpalletrack',
      state: { companyName: $("#id-company-name").val(), 
      projectTitle: $("#id-project-title").val() }
    });

    setCompanyProjectTitle({companyName: $("#id-company-name").val(),
                              projectTitle: $("#id-project-title").val()})



  }
  
  componentWillMount(){
    const showModalFlag = this.props.showModalFlag
    console.log("showModalFlag: ", showModalFlag)
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

    // this.setState({
    //   showModal: true
    // });
    
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
          id="id-company-name" 
          defaultValue="MEK"/>

          <ControlLabel>Project</ControlLabel>
          <FormControl 
          componentClass="input" 
          placeholder="project name" 
          // defaultValue="Name of project"
          id="id-project-title"
          defaultValue="Yamaha Port Qasim"/>

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
    // browserHistory: PropTypes.object.isRequired,
    showModalFlag: PropTypes.bool,
    switchFlag: PropTypes.func,
    setCompanyProjectTitle: PropTypes.func
  }

HomeLoggedIn.contextTypes = {
  user: React.PropTypes.object
}

const mapStateToProp =(state, ownProps)=>{
  return {
    showModalFlag: state.showModalFlag,
    companyProjectTitle: state.companyProjectTitle
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchFlag(newVal){
      console.log("newVal")
      console.log(newVal)
      dispatch(updateModalFlag(newVal))
    },

    setCompanyProjectTitle(obj){
      console.log("setCompanyProjectTitle")
      console.log(obj)
      dispatch(setCompanyProjectTitle(obj))
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(HomeLoggedIn)