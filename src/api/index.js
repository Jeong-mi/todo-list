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
  createTodo(data) {
    return ApiController({
      url: "/todos",
      method: "post",
      data: data,
    });
  },
  getTodos() {
    return ApiController({
      url: "/todos",
      method: "get",
    });
  },
  updateTodo(id, data) {
    return ApiController({
      url: `/todos/${id}`,
      method: "put",
      data: data,
    });
  },
  deleteTodo(id) {
    return ApiController({
      url: `/todos/${id}`,
      method: "delete",
    });
  },
};

export default Api;
