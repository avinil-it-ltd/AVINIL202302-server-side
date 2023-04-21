const UpdateAttendanceService = async (request, Model) => {
    try {
      let postBody = request.body;
      let id = request.params.id;
      let data = await Model.updateOne(
        {
          _id: id,
        },
        postBody
      );
      return { status: "Success", data: data };
    } catch (e) {
      return { status: "Fail", data: e.toString() };
    }
  };

  module.exports = UpdateAttendanceService;
