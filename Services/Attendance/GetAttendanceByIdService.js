const { default: mongoose } = require("mongoose");

const GetAttendanceByIdService = async (request, Model) => {
  try {
    //   let postBody = request.body;
    let id =new mongoose.Types.ObjectId(request.params.id) 
      let data = await Model.aggregate(
        [  {
            $match:{
       
                student: id
            }
          }]
       
        );
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = GetAttendanceByIdService;
