import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { LinkContainer } from 'react-router-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

export default class Home extends Component {
  constructor(props) {

    super(props);
    this.state = {
      showdiv: true
    };

    this.btnClicked = this.btnClicked.bind(this)
  } 

  componentDidMount(){
    Meteor.call("logStringToConsole", "test");
    console.log("componentDidMount");
  }

  btnClicked(){
    this.setState({showdiv: !this.state.showdiv});
  }

  render() {
    
    return (
          <div>
          <div className="wrapper-home testbg-1 text-center no-padding">

          <div className="container-fluid home-title testbg-1">VoteYouCan</div>
          <div className="container-fluid home-description testbg-1">Create custom polls with live results</div>
			<br />
      <LinkContainer to="/signup">
    <Button bsStyle="success">Sign Up-4</Button>
  </LinkContainer>
				
			<br />
				
			<br />
      <br />
      <div>
        

      </div>
          </div>

            <div className="row wrapper-home-lower-part">
              <div className="col-sm-4 icon-bolt testbg-1 text-center">
              <div className="icon-bolt"><i className="fa fa-bolt" aria-hidden="true"></i></div>
              <div className="icon-footer">Live Results</div>
              <div className="container-fluid icon-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem</div>
              </div>
              <div className="col-sm-4 icon-globe testbg-1 text-center">
              <div className="icon-globe"><i className="fa fa-globe" aria-hidden="true"></i></div>
              <div className="icon-footer">Works Everywhere</div>
              <div className="container-fluid icon-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem</div>
              </div>
              <div className="col-sm-4 icon-facebook testbg-1 text-center">
              <div className="icon-facebook"><i className="fa fa-facebook" aria-hidden="true"></i></div>
              <div className="icon-footer">Social Integration</div>
              <div className="container-fluid icon-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem</div>
              </div>
            </div>
            
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300} transitionAppearTimeout={300}>
              {this.state.showdiv == true &&
                <div className="container-fluid testbg-1 test-anim"> Hello Wordl 2</div>   
              }
            </ReactCSSTransitionGroup>
            <Button onClick={this.btnClicked}>Click Me</Button>
          </div>
    );
  }
}