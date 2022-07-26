import { useState } from "react";
import TodoItem from "./todoItem";

const initTodo = [
  { id: 0, text: "영어 공부", done: true },
  { id: 1, text: "리액트 공부하기", done: false },
];

function TodoList() {
  const [todoList, setTodoList] = useState(initTodo);

  return (
    <main className="m-8">
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          text={todo.text}
        />
      ))}
    </main>
  );
}

export default TodoList;
