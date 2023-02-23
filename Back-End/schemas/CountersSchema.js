const mongoose = require("mongoose");

const CountersSchema = new mongoose.Schema(
  {
    id: { type: String },
    seq: { type: Number },
  },
  { _id: false }
);

const Counters = mongoose.model("Counters", CountersSchema, "counters");

module.exports = Counters;
