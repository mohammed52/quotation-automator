import { Meteor } from 'meteor/meteor';

// Session provides a global object on the client
// that you can use to store an arbitrary set of key-value pairs
import { createContainer } from 'meteor/react-meteor-data';
import Home from '../components/Home.jsx';

export default createContainer(() => {
  return {
    user: Meteor.user(),
    connected: Meteor.status().connected,
  };
}, Home);