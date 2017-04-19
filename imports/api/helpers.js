import SimpleSchema from 'simpl-schema'

const schemaFrame = new SimpleSchema({
  frameHeight: {
    type: Number,
    min: 0,
    label: "Frame Height",
  },
  frameDepth: {
    type: Number,
    min: 0,
    label: "Frame Depth",
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
    label: "Frame Height",
  },
  frame: {
    type: String,
    max: 100,
    label: "frame string",
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