import { useState } from "react";
import TodoItem from "./todoItem";

const initTodo = [
  { id: 0, text: "영어 공부", done: true },
  { id: 1, text: "리액트 공부하기", done: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initTodo);

  return (
    <main className="m-8">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          text={todo.text}
          setTodos={setTodos}
        />
      ))}
    </main>
  );
}

export default TodoList;
