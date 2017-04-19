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
  run({ projectSettings, shelfType, userId, frame, createdAt, bays }) {
    // const list = Lists.findOne(listId);

    // if (list.isPrivate() && list.userId !== this.userId) {
    //   throw new Meteor.Error('api.todos.insert.accessDenied',
    //     'Cannot add todos to a private list that is not yours');
    // }
    // console.log();
    const quote = {
      projectSettings: {
        companyName: projectSettings.companyName,
        projectTitle: projectSettings.projectTitle,
        description: projectSettings.description,
        projectRate: projectSettings.projectRate,
        projectCost: projectSettings.projectCost,
      },
      shelfType: shelfType,
      userId: userId,
      frame: frame,
      bays: bays,
      createdAt: createdAt
    };

    Quotes.insert(quote);
  },
});