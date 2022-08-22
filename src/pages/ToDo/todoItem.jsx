import { useState } from "react";
import styled, { css } from "styled-components";

import { YesDone, NotYet, EditIcon, RemoveIcon } from "../../components/Icon";
import EditTodo from "./EditTodo";
import Api from "../../api";

function TodoItem({ curId, curTodo, curDone, funcTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  const editTodo = () => {
    setIsEditing((prev) => !prev);
  };

  const toggleTodo = async () => {
    try {
      const res = await Api.updateTodo(curId, {
        todo: curTodo,
        isCompleted: !curDone,
      });

      funcTodo.update(curId, res);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const removeTodo = async () => {
    try {
      await Api.deleteTodo(curId);

      funcTodo.delete(curId);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <section className="flex py-2 place-items-center">
      <Check onClick={() => toggleTodo()}>
        {curDone ? <YesDone /> : <NotYet />}
      </Check>

      {isEditing ? (
        <EditTodo
          curId={curId}
          curTodo={curTodo}
          curDone={curDone}
          funcTodo={funcTodo}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <Text curDone={curDone}>{curTodo}</Text>
          <FuncBtn type="edit" onClick={() => editTodo()}>
            <EditIcon />
          </FuncBtn>
          <FuncBtn type="remove" onClick={() => removeTodo()}>
            <RemoveIcon />
          </FuncBtn>
        </>
      )}
    </section>
  );
}

export default TodoItem;

const Check = styled.div`
  cursor: pointer;
  padding-right: 15px;
`;

const Text = styled.div`
  ${({ theme }) => theme.fontSizes.xl};

  ${(props) =>
    props.curDone &&
    css`
      color: ${({ theme }) => theme.colors.gray300};
    `};
  flex: 1;
`;

const FuncBtn = styled.button`
  color: ${({ theme }) => theme.colors.gray300};
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    color: ${({ type, theme }) =>
      type === "edit" ? theme.colors.edit : theme.colors.remove};
  }
`;
