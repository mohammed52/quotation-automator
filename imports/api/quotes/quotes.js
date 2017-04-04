import { Mongo } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import SimpleSchema from 'simpl-schema'
import { Factory } from 'meteor/dburles:factory';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import faker from 'faker';

// import {rn} from 'random-number'
// import { Meteor } from 'meteor/meteor';

var rn = require('random-number');

class QuotesCollection extends Mongo.Collection {
  insert(doc, callback) {
    const ourDoc = doc;
    ourDoc.createdAt = ourDoc.createdAt || new Date();
    const result = super.insert(ourDoc, callback);
    return result;
  }
}

export const Quotes = new QuotesCollection('quotes');

Quotes.deny({
  insert() { return true; },
});

const schemaProjectSettings = new SimpleSchema({
    companyName: {
      type: String,
      max: 100,
    },
    projectTitle: {
      type: String,
      max: 100,
    },
    description: {
      type: String,
      max: 100,
    },
    projectRate: {
      type: Number,
      min: 0,
    },
    projectCost: {
      type: Number,
      min: 0,
    }
});

Quotes.schema = new SimpleSchema({
    projectSettings: {
        type: schemaProjectSettings
    },
    shelfType: {
      type: String,
      max: 100,
    }
});


var rnOptions = {
  min:  130
, max:  300
, integer: true
}

// factory helps us encode test data,A package for creating test data or for generating fixtures
Factory.define('quote', Quotes, {
  projectSettings: {
    companyName: () => faker.lorem.sentence(),
    projectTitle: ()=> faker.lorem.sentence(),
    description: ()=> faker.lorem.sentence(),
    projectRate: ()=> rn(rnOptions),
    projectCost: ()=> rn(rnOptions),
  },
  shelfType: "no-shelf"
});

Quotes.attachSchema(Quotes.schema);

Quotes.publicFields = {
  projectSettings: 1,
  shelfType: 1,
};