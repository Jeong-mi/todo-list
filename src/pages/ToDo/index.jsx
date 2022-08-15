import styled from "styled-components";
import TodoHead from "./todoHead";
import TodoList from "./todoList";
import { PlusButton } from "../../components/Button";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";

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
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <main className="relative">
      <Title>JM's todo-list</Title>
      <TodoHead />
      <hr />
      <TodoList />

      <Figure>
        <PlusButton onClick={onClick} />
      </Figure>

      {isOpen && <AddTodoModal onClose={onClose} />}
    </main>
  );
}

export default ToDo;
