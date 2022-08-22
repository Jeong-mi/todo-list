import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import Modal from "../../components/Modal";
import { ConfirmButton, CancelButton } from "../../components/Button";
import Api from "../../api";

function AddTodoModal({ onClose, funcTodo }) {
  const [value, setValue] = useState("");
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      Api.createTodo({ todo: value }).then((res) => funcTodo.create(res));
      onClose();
    } catch (error) {
      alert(error.response.date.message);
    }
  };

  return (
    <Modal onClose={onClose}>
      <h1 className="my-10 text-3xl font-semibold text-center"> 할 일 추가 </h1>

      <form>
        <div className="my-20 text-center">
          <InputText
            ref={inputElement}
            onChange={(e) => setValue(e.target.value)}
            placeholder="이 곳에 입력해주세요."
          />
        </div>

        <div className="text-end">
          <ConfirmButton onClick={(e) => addTodo(e)}>확인</ConfirmButton>
          <CancelButton onClick={onClose}>취소</CancelButton>
        </div>
      </form>
    </Modal>
  );
}

export default AddTodoModal;

const InputText = styled.input`
  width: 80%;
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  outline: 2px solid ${({ theme }) => theme.colors.gray300};
`;
