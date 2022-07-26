import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/todo";

export default configureStore({
  reducer: { todo: todoReducer },
});
