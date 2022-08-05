import { useState } from "react";
import styled, { css } from "styled-components";
import { YesDone, NotYet, EditIcon, RemoveIcon } from "../../components/Icon";
import Tooltip from "../../components/Tooltip";

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
      color: rgb(209 213 219);
    `};
`;

const InputText = styled.input`
  font-size: 20px;
  flex: 1;
  width: 100%;
  background-color: rgb(233, 233, 233);
  border-radius: 5px;
  outline: none;
  padding-right: -30px;
`;

const Feature = styled.div`
  color: rgb(209 213 219);
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    color: ${(props) => (props.type === "edit" ? "#1400ff" : "#ff0000")};
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

const editText = (e, id, setTodos, setIsEditing) => {
  if (e.key === "Enter") {
    setTodos((prev) => {
      let editedTodos = prev;
      prev.map((item) => {
        if (item.id === id) {
          item.text = e.target.value;
        }
      });
      return editedTodos;
    });

    setIsEditing(false);
  }
};

function TodoItem({ id, done, text, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="flex py-2 place-items-center">
      <CheckCircle>{done ? <YesDone /> : <NotYet />}</CheckCircle>
      {!isEditing ? (
        <Text done={done}>{text}</Text>
      ) : (
        <div className="w-full">
          <Tooltip content="수정하려면 엔터를 눌러주세요.">
            <InputText
              type="text"
              placeholder={text}
              onKeyPress={(e) => editText(e, id, setTodos, setIsEditing)}
              autoFocus
            />
          </Tooltip>
        </div>
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
