import { useState } from "react";
import styled, { css } from "styled-components";
import { YesDone, NotYet, EditIcon, RemoveIcon } from "../../components/Icon";
import EditText from "./EditText";

const CheckCircle = styled.div`
  cursor: pointer;
  padding-right: 15px;
`;

const Text = styled.div`
  font-size: 20px;
  flex: 1;
  ${(props) =>
    props.done &&
    css`
      color: ${({ theme }) => theme.colors.gray300};
    `};
`;

const Feature = styled.div`
  color: rgb(209 213 219);
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

function TodoItem({ id, done, setTodos, currentText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  return (
    <section className="flex py-2 place-items-center">
      <CheckCircle>{done ? <YesDone /> : <NotYet />}</CheckCircle>
      {!isEditing ? (
        <Text done={done}>{currentText}</Text>
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
      <Feature type="edit" onClick={() => editTodo(id, setIsEditing)}>
        <EditIcon />
      </Feature>
      <Feature type="remove" onClick={() => removeTodo(id, setTodos)}>
        <RemoveIcon />
      </Feature>
    </section>
  );
}

export default TodoItem;
