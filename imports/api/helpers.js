import SimpleSchema from 'simpl-schema'

const schemaBay = new SimpleSchema({
  bay: {
    type: Number,
    min: 1,
    label: "Bay Number",
    max: 4
  },
  length: {
    type: Number,
    min: 0,
    label: "Bay Length",
    max: 500
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
    label: "Frame Height",
    max: 60
  },
  frameDepth: {
    type: Number,
    min: 1,
    label: "Frame Depth-1",
    max: 15
  },
  frameQty: {
    type: Number,
    min: 1,
    label: "Frame Qty",
    max: 600
  }
});

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
      min: 160,
      max: 300
    },
    projectCost: {
      type: Number,
      min: 100,
      max: 150
    }
});

export const schemaQuotes = new SimpleSchema({
  projectSettings: {
    type: schemaProjectSettings,
    label: "Project Settings",
  },
  frame: {
    type: schemaFrame,
    max: 100,
    label: "Frame Object",
  },
  bays: {
    type: Array,
    minCount: 1,
    maxCount: 4,
    label: "Bays",
  },
  'bays.$': {
    type: schemaBay
  },
  shelfType: {
    type: String,
    max: 100,
    label: "Shelf Type"
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
  },
  userId: { 
    type: String, 
    regEx: SimpleSchema.RegEx.Id, 
    optional: true,
    label: "user Id"
  }
});