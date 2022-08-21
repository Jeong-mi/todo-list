import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.main`
  border: 1px solid black;
  background: #fff;
  margin: 100px;
  border-radius: 30px;
  display: grid;
  place-items: center;
  align-content: center;
  grid-template-rows: 0.3fr 1fr 0.3fr;
  grid-row-gap: 30px;
`;

const FormContainer = styled.form`
  width: 70%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 30px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.green600};
  border-radius: 5px;
  outline: none;
`;

const SubmitBtn = styled.button.attrs({
  type: "submit",
})`
  background: ${({ theme }) => theme.colors.green400};
  color: white;
  height: 50px;
`;

const LoginBtn = styled.button``;

function Register() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Register</Title>
      <FormContainer>
        <InputContainer>
          <h1>Email</h1>
          <Input type="text" />
        </InputContainer>

        <InputContainer>
          <h1>Password</h1>
          <Input type="text" />
        </InputContainer>

        <SubmitBtn className="w-full">Submit</SubmitBtn>
      </FormContainer>
      <LoginBtn onClick={() => navigate("/login")}>로그인하러 가기</LoginBtn>
    </Container>
  );
}

export default Register;
