import { Mongo } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import SimpleSchema from 'simpl-schema'
import { Factory } from 'meteor/dburles:factory';
// import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import faker from 'faker';
import {schemaQuotes} from '../helpers';
import { _ } from 'meteor/underscore';

// import {rn} from 'random-number'
// import { Meteor } from 'meteor/meteor'
SimpleSchema.debug = true

var rn = require('random-number');

class QuotesCollection extends Mongo.Collection {
  insert(doc, callback) {
    const ourDoc = doc;
    // console.log(doc)
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

var rnCurrentMetalPrices = {
  min:  60, 
  max:  120, 
  integer: true,
  label: "rnCurrentMetalPrices",
}

var rnOptions = {
  min:  100, 
  max:  300, 
  integer: true,
  label: "rnOptions",
}

var rnFrameDepth = {
  min:  2.5, 
  max:  4.5, 
  integer: false,
  label: "rnFrameDepth",
}

var rnFrameHeight = {
  min:  5, 
  max:  120, 
  integer: true,
  label: "rnFrameHeight",
}

var rnFrameQty = {
  min:  1, 
  max:  200, 
  integer: true,
  label: "rnFrameQty",
}

// factory helps us encode test data,A package for creating test data or for generating fixtures
Factory.define('quote', Quotes, {
  projectSettings: {
    companyName: () => faker.lorem.sentence(),
    projectTitle: ()=> faker.lorem.sentence(),
    racksDescription: ()=> faker.lorem.sentence(),
    currentMetalPrices: ()=> rn(rnOptions),
  },
  shelfType: "no-shelf",
  frame: {
    frameHeight: ()=> rn(rnFrameHeight),
    frameDepth: ()=> rn(rnFrameDepth),
    frameQty: ()=> rn(rnFrameQty),
  },
  bays: [{
              "length": 120,
              "qty": 100,
              "levels": 50,
              "loadPerLevel": 30000
            },
            {
              "length": 8.05,
              "qty": 40,
              "levels": 40,
              "loadPerLevel": 30001
            },
            {
              "length": 4,
              "levels": 2,
              "loadPerLevel": 30001
            },
            {
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
  createdAt: 1,
  bays: 1
};