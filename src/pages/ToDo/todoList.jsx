import TodoItem from "./todoItem";

function TodoList() {
  return (
    <main className="m-8">
      <TodoItem done={true} text="영어 공부" />
      <TodoItem done={false} text="리액트 공부하기" />
    </main>
  );
}

export default TodoList;
