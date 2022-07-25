import styled, { css } from "styled-components";
import { YesDone, NotYet, EditIcon, RemoveIcon } from "../../components/Icon";

const CheckCircle = styled.div`
  cursor: pointer;
`;

const Text = styled.div`
  text-align: center;
  padding-left: 15px;
  font-size: 20px;
  flex: 1;
  ${(props) =>
    props.done &&
    css`
      color: rgb(209 213 219);
    `};
`;

const Edit = styled.div`
  color: rgb(209 213 219);
  cursor: pointer;
  &:hover {
    color: #1400ff;
  }
`;

const Remove = styled.div`
  color: rgb(209 213 219);
  cursor: pointer;
  &:hover {
    color: #ff0000;
  }
`;

function TodoItem({ done, text }) {
  return (
    <section className="flex py-2 place-items-center">
      <CheckCircle>{done ? <YesDone /> : <NotYet />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Edit>
        <EditIcon />
      </Edit>
      <Remove>
        <RemoveIcon />
      </Remove>
    </section>
  );
}

export default TodoItem;
