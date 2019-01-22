import SimpleSchema from 'simpl-schema'

const schemaBay = new SimpleSchema({
  length: {
    type: Number,
    min: 0,
    label: "Bay Length",
    max: 12
  },
  qty: {
    type: Number,
    min: 1,
    label: "Bay Qty",
    max: 500
  },
  levels: {
    type: Number,
    min: 1,
    label: "Number of Levels",
    max: 15
  },
  loadPerLevel: {
    type: Number,
    min: 100,
    label: "Load Per Level",
    max: 4000
  },

});

const schemaFrame = new SimpleSchema({
  frameHeight: {
    type: Number,
    min: 4,
    label: "frameHeight",
    max: 60
  },
  frameDepth: {
    type: Number,
    min: 1,
    label: "frameDepth",
    max: 15
  },
  frameQty: {
    type: Number,
    min: 1,
    label: "frameQty",
    max: 600
  }
});

const schemaProjectSettings = new SimpleSchema({
  companyName: {
    type: String,
    max: 100,
    label: 'companyName'
  },
  projectTitle: {
    type: String,
    max: 100,
    label: 'projectTitle'
  },
  racksDescription: {
    type: String,
    max: 100,
    label: 'racksDescription'
  },
  currentMetalPrices: {
    type: Number,
    min: 60,
    max: 150,
    label: 'currentMetalPrices'
  }
});

export const schemaQuotes = new SimpleSchema({
  projectSettings: {
    type: schemaProjectSettings,
    label: "projectSettings",
  },
  frame: {
    type: schemaFrame,
    max: 100,
    label: "frame",
  },
  bays: {
    type: Array,
    minCount: 1,
    maxCount: 4,
    label: "bays",
  },
  'bays.$': {
    type: schemaBay
  },
  shelfType: {
    type: String,
    max: 100,
    label: "shelfType"
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
    label: 'createdAt'
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true,
    label: "userId"
  },
  margin: {
    type: Number,
    min: 0,
    label: "margin",
    max: 200
  }
});