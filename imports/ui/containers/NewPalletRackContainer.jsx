import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

import { createContainer } from 'meteor/react-meteor-data'
import NewPalletRack from '../components/NewPalletRack'

export default createContainer(() => {
  return {
    user: Meteor.user(),
    connected: Meteor.status().connected,
  };
}, NewPalletRack);