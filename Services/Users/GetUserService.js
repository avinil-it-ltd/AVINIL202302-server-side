const GetUserService = async (request, Model) => {
    try {
      let data = await Model.aggregate([
        {
          $match: {},
        },
      ]);
      return { status: "Success", data: data };
    } catch (e) {
      return { status: "Fail", data: e };
    }
  };
  
  module.exports = GetUserService;
  