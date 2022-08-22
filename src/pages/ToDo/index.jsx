import styled from "styled-components";
import TodoHead from "./todoHead";
import TodoList from "./todoList";
import { PlusButton } from "../../components/Button";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Api from "../../api";

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

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/", { replace: true });
      return;
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await Api.getTodos();
        setTodos(res.data);
      } catch (error) {
        alert(error.response);
      }
    })();
  }, []);

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
