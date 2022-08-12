import { useEffect, useMemo, useState } from "react";
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

const editText = (e, setValue, setIsEditing) => {
  if (e.key === "Enter") {
    setValue(e.target.value);
    setIsEditing(false);
  }
};

function EditText({
  id,
  currentText,
  todos,
  setTodos,
  setIsEditing,
  value,
  setValue,
}) {
  useEffect(() => {
    setTodos((prev) => {
      let editedTodos = prev;
      prev.map((item) => {
        if (item.id === id) {
          item.text = value;
        }
      });
      return editedTodos;
    });
  }, [value]);

  return (
    <div className="w-full">
      <Tooltip content="수정하려면 엔터를 눌러주세요.">
        <InputText
          type="text"
          placeholder={currentText}
          onKeyPress={(e) => editText(e, setValue, setIsEditing)}
          autoFocus
        />
      </Tooltip>
    </div>
  );
}

export default EditText;
