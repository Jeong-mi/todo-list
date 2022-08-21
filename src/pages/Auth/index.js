import { useEffect } from "react";
import styled from "styled-components";
import theme from "../../components/theme";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fontSizes.xl};
  margin: 32px;
`;

const SubmitBtn = styled.button.attrs({
  type: "submit",
})`
  background: ${({ theme }) => theme.colors.green400};
  color: white;
`;

function Auth() {
  useEffect(() => {
    document.body.style.background = `${theme.colors.green100}`;
  }, []);

  return (
    <Container>
      <Title>Login</Title>
      <form>
        <div>
          <h1>이메일 입력</h1>
          <input type="text" />
        </div>

        <div>
          <h1>비밀번호 입력</h1>
          <input type="text" />
        </div>

        <SubmitBtn>제출</SubmitBtn>
      </form>
    </Container>
  );
}

export default Auth;
