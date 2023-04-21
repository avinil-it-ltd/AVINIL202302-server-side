const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
   student:{type:mongoose.Schema.Types.ObjectId},
    Midterm:{type:Array},
    FinalTerm:{type:Array}
  },
  {
    versionKey: false,
  }
);
const MarkModel = mongoose.model("marks", DataSchema);
module.exports = MarkModel;
