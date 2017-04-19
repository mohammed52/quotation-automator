import { Mongo } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import SimpleSchema from 'simpl-schema'
import { Factory } from 'meteor/dburles:factory';
// import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import faker from 'faker';

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

const schemaProjectSettings = new SimpleSchema({
    companyName: {
      type: String,
      max: 100,
      label: "Company Name",
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
    label: "Frame Height",
  },
  frameDepth: {
    type: Number,
    min: 0,
    label: "Frame Depth",
  },
  frameQty: {
    type: Number,
    min: 0,
    label: "Frame Qty",
  }
});

Quotes.schema = new SimpleSchema({
  projectSettings: {
    type: schemaProjectSettings,
    label: "Frame Height",
  },
  // frame: {
  //   type: String,
  //   max: 100,
  //   label: "Frame-1",
  // },
  shelfType: {
    type: String,
    max: 100,
    label: "Frame Height",
  },
  shelfType2: {
    type: String,
    max: 100,
    label: "ShelfType2",
  },
  userId: { 
    type: String, 
    regEx: SimpleSchema.RegEx.Id, 
    optional: true,
    label: "Frame Height",
  }

});

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
  shelfType2: "no-shelf",
  // frame: {
  //   frameHeight: ()=> rn(rnFrameHeight),
  //   frameDepth: ()=> rn(rnFrameDepth),
  //   frameQty: ()=> rn(rnFrameQty),
  // }
});

Quotes.attachSchema(Quotes.schema);

Quotes.publicFields = {
  projectSettings: 1,
  shelfType: 1,
  userId: 1,
  frame: 1,
};