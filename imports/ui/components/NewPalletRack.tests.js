/* global window */
/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { mount } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { Random } from 'meteor/random';
// import ListHeader from './ListHeader.jsx';

import { insert } from '../../api/quotes/quotes.js' 

if (Meteor.isClient) {
  describe('NewPalletRack', () => {
    let list = null;
    let header = null;
    let router = null;
    
    // beforeEach(() => {
    //   list = Factory.create('quote', { userId: Random.id(), name: 'testing' });
    //   router = { push: sinon.stub() };
    //   header = mount(<ListHeader list={list} />, {
    //     context: { router },
    //   });
    // });

    it('should create a new todo when user submits', () => {
      console.log("is this working ?")
    });

  });


}
