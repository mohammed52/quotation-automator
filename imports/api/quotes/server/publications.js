/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';

import { Lists } from '../quotes.js';

Meteor.publish('quotes.public', function quotesPublic() {
  return Lists.find({
    userId: { $exists: false },
  }, {
    fields: Lists.publicFields,
  });
});

Meteor.publish('quotes.private', function quotesPrivate() {
  if (!this.userId) {
    return this.ready();
  }

  return Lists.find({
    userId: this.userId,
  }, {
    fields: Lists.publicFields,
  });
});
