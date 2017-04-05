import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema'
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

import { Quotes } from './quotes.js';
// import { Lists } from '../lists/lists.js';
import { check } from 'meteor/check';

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

export const insert = new ValidatedMethod({
  name: 'quotes.insert',
  validate: new SimpleSchema({
    projectSettings: {
        type: schemaProjectSettings
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
}).validator(),
  run({ projectSettings, shelfType, userId }) {
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
    };

    Quotes.insert(quote);
  },
});