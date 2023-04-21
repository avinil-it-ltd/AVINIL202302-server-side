const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, required: true },
    date: { type: Date, required: true,default:Date.now() },
    isPresent: { type: Boolean, default: false }
},
{
    versionKey:false
})
const AttendanceModel = mongoose.model("attendances",DataSchema);
module.exports = AttendanceModel