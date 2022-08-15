import Modal from "../../components/Modal";
import { ConfirmButton, CancelButton } from "../../components/Button";
import styled from "styled-components";
import { useState } from "react";

const InputText = styled.input`
  width: 80%;
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  outline: 2px solid ${({ theme }) => theme.colors.gray300};
`;

function AddTodoModal({ onClose, setTodos }) {
  const [value, setValue] = useState("");

  const addTodo = () => {
    //setTodos((prev) => [...prev, {}])
  };

  return (
    <Modal onClose={onClose}>
      <h1 className="my-10 text-3xl font-semibold text-center"> 할 일 추가 </h1>

      <div className="my-20 text-center">
        <InputText
          onChange={(e) => setValue(e.target.value)}
          placeholder="이 곳에 입력해주세요."
        />
      </div>

      <div className="text-end">
        <ConfirmButton onClick={addTodo}>확인</ConfirmButton>
        <CancelButton onClick={onClose}>취소</CancelButton>
      </div>
    </Modal>
  );
}

export default AddTodoModal;
