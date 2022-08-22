import Modal from "../../components/Modal";
import { ConfirmButton, CancelButton } from "../../components/Button";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Api from "../../api";

const InputText = styled.input`
  width: 80%;
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  outline: 2px solid ${({ theme }) => theme.colors.gray300};
`;

function AddTodoModal({ onClose, setTodos }) {
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
      await Api.createTodo({ todo: value });

      setTodos((prev) => {
        const newId = prev[prev.length - 1].id + 1;
        const newTodo = { id: newId, todo: value, isCompleted: false };

        return [...prev, newTodo];
      });
      onClose();
    } catch (error) {
      console.log(error.response.data);
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
