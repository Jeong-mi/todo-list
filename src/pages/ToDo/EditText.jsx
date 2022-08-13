import styled from "styled-components";
import Tooltip from "../../components/Tooltip";

const InputText = styled.input`
  font-size: 20px;
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.slate200};
  border-radius: 5px;
  outline: none;
  padding-right: -30px;
`;

const editText = (e, id, value, setTodos, setIsEditing) => {
  if (e.key === "Enter") {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          item.text = value;
        }
        return item;
      });
    });
    setIsEditing(false);
  }
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
    <div className="w-full">
      <Tooltip content="수정하려면 엔터를 눌러주세요.">
        <InputText
          type="text"
          placeholder={currentText}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => editText(e, id, value, setTodos, setIsEditing)}
          autoFocus
        />
      </Tooltip>
    </div>
  );
}

export default EditText;
