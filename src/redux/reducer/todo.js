import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 0, text: "영어 공부", done: true },
    { id: 1, text: "리액트 공부하기", done: false },
  ],
  reducers: {
    setTodoList: (state, action) => {
      return action.payload;
    },
    addTodo: (state, action) => {
      const newId = state[-1].id + 1;
      const newTodo = action.payload;
      newTodo.id = newId;
      return [...state, newTodo];
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo !== action.payload);
    },
  },
});

export default todoSlice.redicer;
