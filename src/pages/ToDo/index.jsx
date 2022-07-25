import styled from "styled-components";
import TodoHead from "./todoHead";
import TodoList from "./todoList";

const Title = styled.div`
  margin: 32px;
  text-align: center;
  font-size: 1.25rem;
`;

function ToDo() {
  return (
    <div>
      <Title>JM's todo-list</Title>
      <TodoHead />
      <hr />
      <TodoList />
    </div>
  );
}

export default ToDo;
