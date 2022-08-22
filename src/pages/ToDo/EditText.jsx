import styled from "styled-components";
import { CancelButton, ConfirmButton } from "../../components/Button";
import Tooltip from "../../components/Tooltip";
import Api from "../../api";

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

const editText = async (e, id, value, isCompleted, setTodos, setIsEditing) => {
  e.preventDefault();

  try {
    await Api.updateTodo(id, {
      todo: value,
      isCompleted: isCompleted,
    });

    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          item.todo = value;
        }
        return item;
      });
    });
    setIsEditing(false);
  } catch (error) {
    alert(error.response.data.message);
  }
};

function EditText({
  id,
  currentTodo,
  isCompleted,
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
          placeholder={currentTodo}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      </Tooltip>
      <Div>
        <ConfirmButton
          onClick={(e) =>
            editText(e, id, value, isCompleted, setTodos, setIsEditing)
          }
        >
          확인
        </ConfirmButton>
        <CancelButton onClick={() => setIsEditing(false)}>취소</CancelButton>
      </Div>
    </Form>
  );
}

export default EditText;
