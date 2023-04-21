const GetUserByTypeService = async (request, Model) => {
    try {
      let type = request.params.type;
console.log(type)
      let data = await Model.aggregate(
      [  {
          $match:{
     
            userType:type
          }
        }]
     
      );
      return { status: "Success", data: data };
    } catch (e) {
      return { status: "Fail", data: e.toString() };
    }
  };

  module.exports = GetUserByTypeService;
