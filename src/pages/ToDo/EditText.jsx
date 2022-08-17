import styled from "styled-components";
import { CancelButton, ConfirmButton } from "../../components/Button";
import Tooltip from "../../components/Tooltip";

const InputText = styled.input`
  ${({ theme }) => theme.fontSizes.xl};
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.slate200};
  border-radius: 5px;
  outline: none;
  padding-right: -30px;
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
    <form className="w-full">
      <Tooltip content="수정하려면 엔터를 눌러주세요.">
        <InputText
          type="text"
          placeholder={currentText}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      </Tooltip>
      <div>
        <ConfirmButton
          onClick={(e) => editText(e, id, value, setTodos, setIsEditing)}
        >
          확인
        </ConfirmButton>
        <CancelButton onClick={() => setIsEditing(false)}>취소</CancelButton>
      </div>
    </form>
  );
}

export default EditText;
