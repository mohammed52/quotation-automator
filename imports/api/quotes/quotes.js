import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { Factory } from 'meteor/factory';
import faker from 'faker';
import { Meteor } from 'meteor/meteor';

export const QuotesCollection = new Mongo.Collection('polls');
