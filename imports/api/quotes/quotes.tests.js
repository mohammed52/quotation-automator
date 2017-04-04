// meteor test --driver-package practicalmeteor:mocha --port 3100

import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { chai, assert, expect } from 'meteor/practicalmeteor:chai';
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
assert.isString(quote.shelfType, 'projectTitle is not a string');
expect(quote.projectSettings.projectRate).to.satisfy(function(num){return (num>=170 && num<=300)});
expect(quote.projectSettings.projectCost).to.satisfy(function(num){return (num>=120 && num<=300)});

// assert.match(quote.projectTitle, /^/, 'regexp matches');
});
});
}