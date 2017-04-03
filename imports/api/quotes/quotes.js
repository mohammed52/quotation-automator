import { Mongo } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import SimpleSchema from 'simpl-schema'
// import { Factory } from 'meteor/factory';
// import faker from 'faker';
// import { Meteor } from 'meteor/meteor';

class QuotesCollection extends Mongo.Collection {
  insert(doc, callback) {
    const ourDoc = doc;
    ourDoc.createdAt = ourDoc.createdAt || new Date();
    const result = super.insert(ourDoc, callback);
    return result;
  }
}

export const Quotes = new QuotesCollection('Quotes');

Quotes.deny({
  insert() { return true; },
});

Quotes.schema = new SimpleSchema({
  projectTitle: {
    type: String,
    max: 100,
  }
});

Quotes.attachSchema(Quotes.schema);

Quotes.publicFields = {
  projectTitle: 1,
};

// Factory.define('todo', Todos, {
//   listId: () => Factory.get('list'),
//   text: () => faker.lorem.sentence(),
//   createdAt: () => new Date(),
// });