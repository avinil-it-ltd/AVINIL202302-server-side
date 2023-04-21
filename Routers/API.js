const express = require('express');
const router = express.Router();
const UsersController = require('./../Controller/Users/UsersController')
const AttendanceController = require('./../Controller/Attendance/AttendanceController')
const MarkController = require('./../Controller/Mark/MarkController')

router.post("/create-user",UsersController.CreateUsers);
router.get("/get-user",UsersController.GetUser);
router.post("/update-user/:id",UsersController.UpdateUser);
router.get("/get-single-user/:email",UsersController.GetSingleUser)
router.get("/get-user-by-group/:group",UsersController.GetUserByGroup)
router.get("/get-user-by-type/:type",UsersController.GetUserByType)



router.post("/create-attendance",AttendanceController.CreateAttendance)
router.get("/get-attendance",AttendanceController.GetAttendance)
router.get("/get-attendance-id/:id",AttendanceController.GetAttendanceById)
router.post("/update-attendance/:id",AttendanceController.UpdateAttendance)


router.post("/create-mark",MarkController.CreateMark)
router.get("/get-mark",MarkController.GetMark)
router.get("/get-mark-student/:id",MarkController.GetMarkStudent)
router.post("/update-mark/:id",MarkController.UpdateMark)


module.exports = router;