const UsersModel = require("../../Model/Users/UsersModel");
const CreateUsersService = require("../../Services/Users/CreateUsersService");
const GetSingleUserService = require("../../Services/Users/GetSingleUserService");
const GetUserByGroupService = require("../../Services/Users/GetUserByGroupService");
const GetUserByTypeService = require("../../Services/Users/GetUserByTypeService");
const GetUserService = require("../../Services/Users/GetUserService");
const UpdateUserService = require("../../Services/Users/UpdateUserService");

exports.CreateUsers = async (req, res) => {
    let result = await CreateUsersService (req, UsersModel);
    res.status(200).json(result);
  };
exports.GetUser = async (req,res) =>{
  let result = await GetUserService (req,UsersModel);
  res.status(200).json(result);
}
exports.UpdateUser = async (req,res) =>{
  let result = await UpdateUserService (req,UsersModel);
  res.status(200).json(result);
}
exports.GetSingleUser = async (req,res) =>{
  let result = await GetSingleUserService (req,UsersModel);
  res.status(200).json(result);
}
exports.GetUserByGroup = async (req,res) =>{
  let result = await GetUserByGroupService (req,UsersModel);
  res.status(200).json(result);
}
exports.GetUserByType = async (req,res) =>{
  let result = await GetUserByTypeService (req,UsersModel);
  res.status(200).json(result);
}