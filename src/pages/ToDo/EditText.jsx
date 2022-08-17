import styled from "styled-components";
import { CancelButton, ConfirmButton } from "../../components/Button";
import Tooltip from "../../components/Tooltip";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InputText = styled.input`
  ${({ theme }) => theme.fontSizes.xl};
  width: 95%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.slate200};
  border-radius: 5px;
  outline: none;
`;

const Div = styled.div`
  display: flex;
  @media screen and (max-width: 970px) {
    button {
      width: 76px;
    }
  }
`;

const editText = (e, id, value, setTodos, setIsEditing) => {
  e.preventDefault();
  setTodos((prev) => {
    return prev.map((item) => {
      if (item.id === id) {
        item.text = value;
      }
      return item;
    });
  });
  setIsEditing(false);
};

function EditText({
  id,
  currentText,
  setTodos,
  setIsEditing,
  value,
  setValue,
}) {
  return (
    <Form className="w-full">
      <Tooltip content="수정하려면 엔터를 눌러주세요.">
        <InputText
          type="text"
          placeholder={currentText}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      </Tooltip>
      <Div>
        <ConfirmButton
          onClick={(e) => editText(e, id, value, setTodos, setIsEditing)}
        >
          확인
        </ConfirmButton>
        <CancelButton onClick={() => setIsEditing(false)}>취소</CancelButton>
      </Div>
    </Form>
  );
}

export default EditText;
