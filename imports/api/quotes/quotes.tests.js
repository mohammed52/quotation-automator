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
        assert.isString(quote.shelfType2, 'shelfType2 is not a string');
        expect(quote.projectSettings.projectRate).to.satisfy(function(num){return (num>=100 && num<=300)});
        expect(quote.projectSettings.projectCost).to.satisfy(function(num){return (num>=100 && num<=300)});
        // expect(quote.frame.frameQty).to.satisfy(function(num){return (num>=1 && num<=200)}, "frameQty not in range");
        // expect(quote.frame.frameHeight).to.satisfy(function(num){return (num>=4 && num<=130)}, "frameHeight not in range");
        // expect(quote.frame.frameDepth).to.satisfy(function(num){return (num>=2 && num<=15)}, "frameDepth not in range");

      // assert.match(quote.projectTitle, /^/, 'regexp matches');
      });
  });
}