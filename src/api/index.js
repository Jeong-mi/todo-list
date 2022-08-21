import ApiController from "./ApiController";

const Api = {
  signUp(data) {
    return ApiController({
      url: "/auth/signup",
      method: "post",
      data: data,
    });
  },
  signIn(data) {
    return ApiController({
      url: "/auth/signin",
      method: "post",
      data: data,
    });
  },
};

export default Api;
