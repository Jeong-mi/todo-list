import { useState } from "react";
import styled, { css } from "styled-components";
import { YesDone, NotYet, EditIcon, RemoveIcon } from "../../components/Icon";
import EditText from "./EditText";
import Api from "../../api";

const CheckCircle = styled.div`
  cursor: pointer;
  padding-right: 15px;
`;

const Text = styled.div`
  ${({ theme }) => theme.fontSizes.xl};

  ${(props) =>
    props.isCompleted &&
    css`
      color: ${({ theme }) => theme.colors.gray300};
    `};
  flex: 1;
`;

const Feature = styled.div`
  color: ${({ theme }) => theme.colors.gray300};
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    color: ${({ type, theme }) =>
      type === "edit" ? theme.colors.edit : theme.colors.remove};
  }
`;

const removeTodo = async (id, setTodos) => {
  try {
    await Api.deleteTodo(id);

    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  } catch (error) {
    console.log(error.response.data);
    alert(error.response.data.message);
  }
};

const editTodo = (setIsEditing) => {
  setIsEditing((prev) => !prev);
};

const toggleTodo = async (id, currentTodo, isCompleted, setTodos) => {
  try {
    await Api.updateTodo(id, {
      todo: currentTodo,
      isCompleted: !isCompleted,
    });

    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          item.isCompleted = !isCompleted;
        }
        return item;
      });
    });
  } catch (error) {
    alert(error.response.data.message);
  }
};

function TodoItem({ id, isCompleted, setTodos, currentTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  return (
    <section className="flex py-2 place-items-center">
      <CheckCircle
        onClick={() => toggleTodo(id, currentTodo, isCompleted, setTodos)}
      >
        {isCompleted ? <YesDone /> : <NotYet />}
      </CheckCircle>
      {!isEditing ? (
        <>
          <Text isCompleted={isCompleted}>{currentTodo}</Text>
          <Feature type="edit" onClick={() => editTodo(setIsEditing)}>
            <EditIcon />
          </Feature>
          <Feature type="remove" onClick={() => removeTodo(id, setTodos)}>
            <RemoveIcon />
          </Feature>
        </>
      ) : (
        <EditText
          id={id}
          currentTodo={currentTodo}
          isCompleted={isCompleted}
          value={value}
          setValue={setValue}
          setTodos={setTodos}
          setIsEditing={setIsEditing}
        />
      )}
    </section>
  );
}

export default TodoItem;
