const AttendanceModel = require("../../Model/Attendance/AttendanceModel");
const CreateAttendanceService = require("../../Services/Attendance/CreateAttendanceService");
const GetAttendanceByIdService = require("../../Services/Attendance/GetAttendanceByIdService");
const GetAttendanceService = require("../../Services/Attendance/GetAttendanceService");
const UpdateAttendanceService = require("../../Services/Attendance/UpdateAttendanceService");

exports.CreateAttendance = async(req,res)=>{
    let result = await CreateAttendanceService(req,AttendanceModel);
    res.status(200).json(result);
}
exports.GetAttendance = async(req,res)=>{
    let result = await GetAttendanceService(req,AttendanceModel);
    res.status(200).json(result);
}
exports.UpdateAttendance = async(req,res)=>{
    let result = await UpdateAttendanceService(req,AttendanceModel);
    res.status(200).json(result);
}

exports.GetAttendanceById = async(req,res)=>{
    let result = await GetAttendanceByIdService(req,AttendanceModel);
    res.status(200).json(result);
}
