// meteor test --driver-package practicalmeteor:mocha --port 3100

import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { chai, assert } from 'meteor/practicalmeteor:chai';
import { Random } from 'meteor/random';
import { _ } from 'meteor/underscore';

import { Quotes } from './quotes.js';

if (Meteor.isServer) {
		describe('quotes', () => {
			it('builds correctly from factory', () => {
        const quote = Factory.create('quote');
        assert.typeOf(quote, 'object');
        assert.isString(quote.projectSettings.companyName, 'companyName is not a string');
        assert.isString(quote.projectSettings.projectTitle, 'projectTitle is not a string');
        // assert.match(quote.projectTitle, /^/, 'regexp matches');
      });
		});
}