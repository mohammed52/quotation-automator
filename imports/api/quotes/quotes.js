import { Mongo } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import SimpleSchema from 'simpl-schema'
import { Factory } from 'meteor/dburles:factory';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import faker from 'faker';
// import { Meteor } from 'meteor/meteor';

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

const schemaCompanyName = new SimpleSchema({
    companyName: {
        type: String,
        max: 100,
    },
    projectTitle: {
      type: String,
        max: 100,
    }
});

Quotes.schema = new SimpleSchema({
    projectSettings: {
        type: schemaCompanyName,

    }
});
//     "mailingAddress.city": {
//         type: String
//     }
// });


// Quotes.schema = new SimpleSchema({
//   projectTitle: {
//     type: String,
//     max: 100,
//   }
// });

// factory helps us encode test data,A package for creating test data or for generating fixtures
Factory.define('quote', Quotes, {
  projectSettings: {
    companyName: () => faker.lorem.sentence(),
    projectTitle: ()=> faker.lorem.sentence()
  }
});

Quotes.attachSchema(Quotes.schema);

Quotes.publicFields = {
  projectSettings: 1,
};