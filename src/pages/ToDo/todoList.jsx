import { useEffect } from "react";
import TodoItem from "./todoItem";

function TodoList({ todos, setTodos }) {
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <article className="m-8">
      {todos.map((todo) => (
        <TodoItem
          key={todo?.id}
          id={todo?.id}
          isCompleted={todo?.isCompleted}
          currentTodo={todo?.todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </article>
  );
}

export default TodoList;
