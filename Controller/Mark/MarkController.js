const MarkModel = require("../../Model/Mark/MarkModel");
const CreateMarkService = require("../../Services/Mark/CreateMarkService");
const GetAttendanceStudentService = require("../../Services/Mark/GetMarkStudentService");
const GetMarkService = require("../../Services/Mark/GetMarkService");
const UpdateMarkService = require("../../Services/Mark/UpdateMarkService");
const GetMarkStudentService = require("../../Services/Mark/GetMarkStudentService");


exports.CreateMark = async(req,res)=>{
    let result = await CreateMarkService(req,MarkModel);
    res.status(200).json(result);
}
exports.GetMark = async(req,res)=>{
    let result = await GetMarkService(req,MarkModel);
    res.status(200).json(result);
}
exports.UpdateMark = async(req,res)=>{
    let result = await UpdateMarkService(req,MarkModel);
    res.status(200).json(result);
}
exports.GetMarkStudent = async(req,res)=>{
    let result = await GetMarkStudentService(req,MarkModel);
    res.status(200).json(result);
}