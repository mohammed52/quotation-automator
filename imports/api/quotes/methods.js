import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema'
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

import { Quotes } from './quotes.js';
// import { Lists } from '../lists/lists.js';
// import { check } from 'meteor/check';
import {schemaQuotes} from '../helpers';

export const insert = new ValidatedMethod({
  name: 'quotes.insert',
  validate: schemaQuotes.validator(),
  run({ projectSettings, shelfType, userId, frame, bays, createdAt, margin }) {
    // const list = Lists.findOne(listId);

    // if (list.isPrivate() && list.userId !== this.userId) {
    //   throw new Meteor.Error('api.todos.insert.accessDenied',
    //     'Cannot add todos to a private list that is not yours');
    // }
    // console.log();
    const quote = {
      projectSettings: projectSettings,
      shelfType: shelfType,
      userId: userId,
      frame: frame,
      bays: bays,
      createdAt: new Date(),
      margin: margin
    };

    Quotes.insert(quote);
  },
});

export const remove = new ValidatedMethod({
  name: 'quotes.remove',
  validate: new SimpleSchema({
    quoteId: { type: String },
  }).validator(),
  run({ quoteId }) {
    const todo = Quotes.findOne(quoteId);
    Quotes.remove(quoteId);
  },
});

export const updateQuote = new ValidatedMethod({
  name: 'quotes.updateQuote',
  validate: new SimpleSchema({
    quoteId: { type: String, regEx: SimpleSchema.RegEx.Id },
    newQuoteValues: { type: schemaQuotes },
  }).validator(),
  run({ quoteId, newQuoteValues }) {
    // This is complex auth stuff - perhaps denormalizing a userId onto todos
    // would be correct here?

    Quotes.update(quoteId, {
      $set: { 
        projectSettings: newQuoteValues.projectSettings,
        frame: newQuoteValues.frame,
        bays: newQuoteValues.bays,
        shelfType: newQuoteValues.shelfType,
        margin: newQuoteValues.margin
       },
    });
  },
});