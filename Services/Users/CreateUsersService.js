const CreateUsersService = async (request, UsersModel) => {
    try {
      let postBody = request.body;
      let data = await UsersModel.create(postBody);
      return { status: "Success", data: data };
    } catch (e) {
      return { status: "Fail", data: e };
    }
  };
  
  module.exports = CreateUsersService;
  