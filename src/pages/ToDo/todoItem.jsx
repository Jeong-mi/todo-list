import styled, { css } from "styled-components";
import { YesDone, NotYet, EditIcon, RemoveIcon } from "../../components/Icon";

const CheckCircle = styled.div`
  cursor: pointer;
`;

const Text = styled.div`
  padding-left: 15px;
  font-size: 20px;
  flex: 1;
  ${(props) =>
    props.done &&
    css`
      color: rgb(209 213 219);
    `};
`;

const Feature = styled.div`
  color: rgb(209 213 219);
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    color: ${(props) => (props.type === "edit" ? "#1400ff" : "#ff0000")};
  }
`;

const removeTodo = (id) => {
  console.log(id, "안녕");
};

function TodoItem({ id, done, text }) {
  return (
    <section className="flex py-2 place-items-center">
      <CheckCircle>{done ? <YesDone /> : <NotYet />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Feature type="edit">
        <EditIcon />
      </Feature>
      <Feature type="remove" onClick={() => removeTodo(id)}>
        <RemoveIcon />
      </Feature>
    </section>
  );
}

export default TodoItem;
