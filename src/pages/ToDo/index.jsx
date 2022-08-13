import styled from "styled-components";
import TodoHead from "./todoHead";
import TodoList from "./todoList";
import { PlusButton } from "../../components/Button";

const Title = styled.div`
  ${({ theme }) => theme.fontSizes.xl};
  margin: 32px;
  text-align: center;
`;

function ToDo() {
  return (
    <div>
      <Title>JM's todo-list</Title>
      <TodoHead />
      <hr />
      <TodoList />

      <PlusButton />
    </div>
  );
}

export default ToDo;
