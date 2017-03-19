import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var FormGroup = ReactBootstrap.FormGroup;
var Form = ReactBootstrap.Form;
var Col = ReactBootstrap.Col;
var FormControl = ReactBootstrap.FormControl;
var Checkbox = ReactBootstrap.Checkbox;
var ControlLabel = ReactBootstrap.ControlLabel;

// App component - represents the whole app
class Login extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSubmit(event) {
      console.log("submit")
  }

  onSignUp(event) {
      console.log("Create New Account")
  }
    
  render() {
    return (
      <div>
      <br/>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="email"
              name="email"
              ref={(c) => { this.email = c; }}
              placeholder="Enter your Email"
            />

          </div>
          <div>
            <input
              type="password"
              name="password"
              ref={(c) => { this.password = c; }}
              placeholder="password"
            />
          </div>
          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>
        <br/>
        <Link to="/signup" className="">
        Create a New Account
        </Link>

      </div>
    );
  }
}
 
export default Login
