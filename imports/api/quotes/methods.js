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
  run({ projectSettings, shelfType, userId, frame, bays, createdAt }) {
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
      createdAt: new Date()
    };

    Quotes.insert(quote);
  },
});