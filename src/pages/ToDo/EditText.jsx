import styled from "styled-components";
import Tooltip from "../../components/Tooltip";

const InputText = styled.input`
  font-size: 20px;
  flex: 1;
  width: 100%;
  background-color: rgb(233, 233, 233);
  border-radius: 5px;
  outline: none;
  padding-right: -30px;
`;

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

function EditText({ id, text, setTodos, setIsEditing }) {
  return (
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
  );
}

export default EditText;
