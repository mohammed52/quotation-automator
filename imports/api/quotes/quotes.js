import { Mongo } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import SimpleSchema from 'simpl-schema'
import { Factory } from 'meteor/dburles:factory';
// import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import faker from 'faker';
import {schemaQuotes} from '../helpers';
import { _ } from 'meteor/underscore';

// import {rn} from 'random-number'
// import { Meteor } from 'meteor/meteor';
SimpleSchema.debug = true

var rn = require('random-number');

class QuotesCollection extends Mongo.Collection {
  insert(doc, callback) {
    const ourDoc = doc;
    console.log(doc)
    ourDoc.createdAt = ourDoc.createdAt || new Date();
    const result = super.insert(ourDoc, callback);
    return result;
  }
}

export const Quotes = new QuotesCollection('quotes');

Quotes.deny({
  insert() { return true; },
});

Quotes.schema = schemaQuotes;

var rnOptions = {
  min:  100, 
  max:  300, 
  integer: true,
  label: "Frame Height",
}

var rnFrameDepth = {
  min:  2.5, 
  max:  4.5, 
  integer: false,
  label: "Frame Height",
}

var rnFrameHeight = {
  min:  5, 
  max:  120, 
  integer: true,
  label: "Frame Height",
}

var rnFrameQty = {
  min:  1, 
  max:  200, 
  integer: true,
  label: "Frame Height",
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
  shelfType: "no-shelf",
  frame: {
    frameHeight: ()=> rn(rnFrameHeight),
    frameDepth: ()=> rn(rnFrameDepth),
    frameQty: ()=> rn(rnFrameQty),
  },
  bays: [{
              "bay": 1,
              "length": 120,
              "qty": 100,
              "levels": 50,
              "loadPerLevel": 30000
            },
            {
              "bay": 2,
              "length": 8.05,
              "qty": 40,
              "levels": 40,
              "loadPerLevel": 30001
            },
            {
              "bay": 3,
              "length": 4,
              "levels": 2,
              "loadPerLevel": 30001
            },
            {
              "bay": 4,
              "length": "4",
              "levels": "2",
              "loadPerLevel": 30001
        }]
});

Quotes.attachSchema(Quotes.schema);

Quotes.publicFields = {
  projectSettings: 1,
  shelfType: 1,
  userId: 1,
  frame: 1,
  createdAt: 1
};