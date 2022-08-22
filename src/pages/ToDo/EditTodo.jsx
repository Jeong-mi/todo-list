import styled from "styled-components";
import { useState } from "react";

import { CancelButton, ConfirmButton } from "../../components/Button";
import Tooltip from "../../components/Tooltip";
import Api from "../../api";

function EditTodo({ curId, curTodo, curDone, funcTodo, setIsEditing }) {
  const [value, setValue] = useState("");

  const editText = async (e) => {
    e.preventDefault();

    try {
      const res = await Api.updateTodo(curId, {
        todo: value,
        isCompleted: curDone,
      });

      funcTodo.update(curId, res);

      setIsEditing(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Form>
      <Tooltip content="수정하려면 엔터를 눌러주세요.">
        <InputText
          type="text"
          placeholder={curTodo}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      </Tooltip>

      <Btns>
        <ConfirmButton onClick={(e) => editText(e)}>확인</ConfirmButton>
        <CancelButton onClick={() => setIsEditing(false)}>취소</CancelButton>
      </Btns>
    </Form>
  );
}

export default EditTodo;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InputText = styled.input`
  ${({ theme }) => theme.fontSizes.xl};
  width: 95%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.slate200};
  border-radius: 5px;
  outline: none;
`;

const Btns = styled.div`
  display: flex;
  @media screen and (max-width: 970px) {
    button {
      width: 76px;
    }
  }
`;
