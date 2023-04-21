const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
   student:{type:mongoose.Schema.Types.ObjectId},
    Midterm:{type:Array},
    FinalTerm:{type:Array}

    // FinalTerm: [
    //   {
    //     subjectName: { type: String },
    //     number: { type: Number, default: 0 },
    //   },
    //   {
    //     subjectName: { type: String },
    //     number: { type: Number, default: 0 },
    //   },
    // ],
  },
  {
    versionKey: false,
  }
);
const MarkModel = mongoose.model("marks", DataSchema);
module.exports = MarkModel;
