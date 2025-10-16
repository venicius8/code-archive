const mongoose = require("mongoose");

const walkingSchema = mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 1,
      maxLength: 40,
      required: true,
    },
    metersWalked: {
      type: Number,
      required: true,
      min: 1,
      max: 200000,
    },
    startTime: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      minLength: 0,
      maxLength: 255,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Walking", walkingSchema);
