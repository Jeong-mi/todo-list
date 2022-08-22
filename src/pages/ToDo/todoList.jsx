import TodoItem from "./todoItem";

function TodoList({ todos, funcTodo }) {
  return (
    <article className="m-8">
      {todos.map((todo) => (
        <TodoItem
          key={todo?.id}
          curId={todo?.id}
          curDone={todo?.isCompleted}
          curTodo={todo?.todo}
          funcTodo={funcTodo}
        />
      ))}
    </article>
  );
}

export default TodoList;
