import styled from "styled-components";
import TodoHead from "./todoHead";
import TodoList from "./todoList";
import { PlusButton } from "../../components/Button";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import { useNavigate } from "react-router-dom";

const Title = styled.h1`
  ${({ theme }) => theme.fontSizes.xl};
  margin-top: 32px;
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const Figure = styled.figure`
  position: fixed;
  right: 40px;
  bottom: 40px;
`;

const initTodo = [
  { id: 0, text: "영어 공부", done: true },
  { id: 1, text: "리액트 공부하기", done: false },
  { id: 2, text: "빡세게 맛있는 점심 먹기", done: false },
];

function ToDo() {
  const [todos, setTodos] = useState(initTodo);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <main className="relative">
      <Title>JM's todo-list</Title>
      <button onClick={() => navigate("/auth")}>로그인으로</button>

      <TodoHead />
      <hr />
      <TodoList todos={todos} setTodos={setTodos} />

      <Figure>
        <PlusButton onClick={onClick} />
      </Figure>

      {isOpen && <AddTodoModal onClose={onClose} setTodos={setTodos} />}
    </main>
  );
}

export default ToDo;
