const GetSingleUserService = async (request, Model) => {
    try {
      let email = request.params.email;
console.log(email)
      let data = await Model.aggregate(
      [  {
          $match:{
     
     email:email
          }
        }]
     
      );
      return { status: "Success", data: data };
    } catch (e) {
      return { status: "Fail", data: e.toString() };
    }
  };

  module.exports = GetSingleUserService;
