import { useState } from "react";
import styled, { css } from "styled-components";
import { YesDone, NotYet, EditIcon, RemoveIcon } from "../../components/Icon";
import EditText from "./EditText";

const CheckCircle = styled.div`
  cursor: pointer;
  padding-right: 15px;
`;

const Text = styled.div`
  ${({ theme }) => theme.fontSizes.xl};

  ${(props) =>
    props.done &&
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

const removeTodo = (id, setTodos) => {
  console.log(id, "삭제");
  setTodos((prev) => {
    return prev.filter((item) => item.id !== id);
  });
};

const editTodo = (id, setIsEditing) => {
  console.log(id, "수정");
  setIsEditing((prev) => !prev);
};

const toggleTodo = (id, done, setTodos) => {
  console.log(id, "할일체크표시");

  setTodos((prev) => {
    return prev.map((item) => {
      if (item.id === id) {
        item.done = !done;
      }
      return item;
    });
  });
};

function TodoItem({ id, done, setTodos, currentText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  return (
    <section className="flex py-2 place-items-center">
      <CheckCircle onClick={() => toggleTodo(id, done, setTodos)}>
        {done ? <YesDone /> : <NotYet />}
      </CheckCircle>
      {!isEditing ? (
        <>
          <Text done={done}>{currentText}</Text>
          <Feature type="edit" onClick={() => editTodo(id, setIsEditing)}>
            <EditIcon />
          </Feature>
          <Feature type="remove" onClick={() => removeTodo(id, setTodos)}>
            <RemoveIcon />
          </Feature>
        </>
      ) : (
        <EditText
          id={id}
          currentText={currentText}
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
