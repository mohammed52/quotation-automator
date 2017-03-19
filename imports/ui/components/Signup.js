import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';



var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

// App component - represents the whole app
class Signup extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    console.log("Sign Up")
    const email = this.email.value;
    const password = this.password.value;

    Accounts.createUser({
      email,
      password,
    }, (err) => {
      if (err) {
        this.setState({
          errors: { none: err.reason },
        });
      }
      this.context.router.push('/');
    });
  }  
  
  render() {
  return (
      <div><form onSubmit={this.onSubmit}>
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
              placeholder="Enter Password"
            />
          </div>
          <div>
            <input
              type="password"
              name="confirm"
              ref={(c) => { this.confirm = c; }}
              placeholder="Re-Enter password"
            />
          </div>
          <button type="submit" className="btn-primary">
            SignUp
          </button>
        </form>
      </div>
    );
  }
}
 
export default Signup
