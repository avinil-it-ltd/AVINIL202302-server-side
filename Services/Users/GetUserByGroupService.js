const GetUserByGroupService = async (request, Model) => {
    try {
      let group = request.params.group;
console.log(group)
      let data = await Model.aggregate(
      [  {
          $match:{
     
            group:group,
            userType:"student"
          }
        }]
     
      );
      return { status: "Success", data: data };
    } catch (e) {
      return { status: "Fail", data: e.toString() };
    }
  };

  module.exports = GetUserByGroupService;
