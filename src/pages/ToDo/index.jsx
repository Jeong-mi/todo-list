import styled from "styled-components";
import TodoHead from "./todoHead";
import TodoList from "./todoList";
import { PlusButton } from "../../components/Button";

const Title = styled.h1`
  ${({ theme }) => theme.fontSizes.xl};
  margin: 32px;
  text-align: center;
`;

const Figure = styled.figure`
  position: fixed;
  right: 40px;
  bottom: 40px;
`;

function ToDo() {
  return (
    <main className="relative">
      <Title>JM's todo-list</Title>
      <TodoHead />
      <hr />
      <TodoList />

      <Figure>
        <PlusButton />
      </Figure>
    </main>
  );
}

export default ToDo;
