import { Mongo } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import SimpleSchema from 'simpl-schema'
import { Factory } from 'meteor/dburles:factory';
// import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import faker from 'faker';

// import {rn} from 'random-number'
// import { Meteor } from 'meteor/meteor';

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

const schemaFrame = new SimpleSchema({
  frameHeight: {
    type: Number,
    min: 0,
  },
  frameDepth: {
    type: Number,
    min: 0,
  },
  frameQty: {
    type: Number,
    min: 0,
  }
});

Quotes.schema = new SimpleSchema({
  projectSettings: {
    type: schemaProjectSettings
  },
  frames: {
    type: schemaFrame
  },
  shelfType: {
    type: String,
    max: 100,
  },
  userId: { 
    type: String, 
    regEx: SimpleSchema.RegEx.Id, 
    optional: true 
  }

});

var rnOptions = {
  min:  100, 
  max:  300, 
  integer: true
}

var rnFrameDepth = {
  min:  2.5, 
  max:  4.5, 
  integer: false
}

var rnFrameHeight = {
  min:  5, 
  max:  120, 
  integer: true
}

var rnFrameQty = {
  min:  1, 
  max:  200, 
  integer: true
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
  frames: {
    frameHeight: ()=> rn(rnOptions),
    frameDepth: ()=> rn(rnFrameDepth),
    frameQty: ()=> rn(rnFrameQty),
  }
});

Quotes.attachSchema(Quotes.schema);

Quotes.publicFields = {
  projectSettings: 1,
  shelfType: 1,
  userId: 1,
};