/* global window */
/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/factory';
import React from 'react';
import { mount } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { Random } from 'meteor/random';
import ListHeader from './ListHeader.jsx';

import { insert } from '../../api/quotes/quotes.js' 

if (Meteor.isClient) {
  describe('NewPalletRack', () => {
    let list = null;
    let header = null;
    let router = null;
    
    beforeEach(() => {
      list = Factory.create('list', { userId: Random.id(), name: 'testing' });
      router = { push: sinon.stub() };
      header = mount(<ListHeader list={list} />, {
        context: { router },
      });
    });

  });


}
