import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import TodoHead from "./todoHead";
import TodoList from "./todoList";
import { PlusButton } from "../../components/Button";
import AddTodoModal from "./AddTodoModal";
import Api from "../../api";

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

  const funcTodo = {
    get: (res) => {
      return setTodos(res.data);
    },
    create: (res) => {
      return setTodos((prev) => {
        return [...prev, res.data];
      });
    },
    update: (currentId, res) => {
      return setTodos((prev) => {
        return prev.map((item) => {
          if (item.id === currentId) item = res.data;
          return item;
        });
      });
    },
    delete: (currentId) => {
      return setTodos((prev) => {
        return prev.filter((item) => item.id !== currentId);
      });
    },
  };

  useEffect(() => {
    (async () => {
      try {
        await Api.getTodos().then((res) => funcTodo.get(res));
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

      <TodoHead />
      <hr />
      <TodoList todos={todos} funcTodo={funcTodo} />

      <Figure>
        <PlusButton onClick={onClick} />
      </Figure>

      {isOpen && <AddTodoModal onClose={onClose} funcTodo={funcTodo} />}
    </main>
  );
}

export default ToDo;

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
