/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';

import { Quotes } from '../quotes.js';

Meteor.publish('quotes', function quotesPublic() {
  // debugger
  return Quotes.find({
    userId: this.userId 
  },{
    fields: Quotes.publicFields,
  });
});

Meteor.publish('quotes.public', function quotesPublic() {
  // debugger
  return Quotes.find({
    userId: { $exists: false },
  }, {
    fields: Quotes.publicFields,
  });
});

Meteor.publish('quotes.private', function quotesPrivate() {
  // debugger
  if (!this.userId) {
    return this.ready();
  }

  return Quotes.find({
    userId: this.userId,
  }, {
    fields: Quotes.publicFields,
  });
});
