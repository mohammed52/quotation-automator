import SimpleSchema from 'simpl-schema'

const schemaBay = new SimpleSchema({
  bay: {
    type: Number,
    min: 0,
    label: "Bay Number",
  },
  length: {
    type: Number,
    min: 0,
    label: "Bay Length",
  },
  qty: {
    type: Number,
    min: 0,
    label: "Bay Qty",
  },
  levels: {
    type: Number,
    min: 0,
    label: "Number of Levels",
  },
  loadPerLevel: {
    type: Number,
    min: 0,
    label: "Load Per Level",
  },

});

const schemaFrame = new SimpleSchema({
  frameHeight: {
    type: Number,
    min: 0,
    label: "Frame Height",
  },
  frameDepth: {
    type: Number,
    min: 0,
    label: "Frame Depth-1",
  },
  frameQty: {
    type: Number,
    min: 0,
    label: "Frame Qty",
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
      min: 0,
    },
    projectCost: {
      type: Number,
      min: 0,
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