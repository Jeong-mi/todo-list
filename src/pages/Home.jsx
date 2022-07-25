import styled from "styled-components";
import TodoHead from "../components/todoHead";

const Title = styled.div`
  margin: 32px;
  text-align: center;
  font-size: 1.25rem;
`;

function Home() {
  return (
    <div>
      <Title>JM's todo-list</Title>
      <TodoHead />
      <hr />
    </div>
  );
}

export default Home;
