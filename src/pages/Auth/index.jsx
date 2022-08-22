import styled from "styled-components";
import { useState } from "react";
import Api from "../../api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.main`
  background: #fff;
  margin: 100px;
  border-radius: 30px;
  display: grid;
  place-items: center;
  align-content: center;
  grid-template-rows: 0.3fr 1fr 0.3fr;
  grid-row-gap: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const FormContainer = styled.form`
  width: 70%;
  display: grid;
  grid-template-rows: 1fr 0.1fr 1fr 0.1fr 1fr;
  grid-row-gap: 15px;
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

const Alert = styled.p`
  font-size: 13px;
  color: red;
`;

const SubmitBtn = styled.button.attrs({
  type: "submit",
})`
  ${({ theme }) => theme.colors.green400};
  color: white;
  height: 50px;
  background: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray400 : theme.colors.green400};
`;

const ToggleBtn = styled.button``;

function Auth() {
  const [hasAccount, setHasAccount] = useState(true);
  const initState = { email: "", password: "" };
  const [form, setForm] = useState(initState);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      navigate("/todo", { replace: true });
      return;
    }
  }, []);

  const updateForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email) => {
    return email.includes("@");
  };

  const validatePW = (password) => {
    return password.length >= 8;
  };

  const validateForm = validateEmail(form.email) && validatePW(form.password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(hasAccount);

    const resetForm = () => {
      setForm(initState);
      e.target.reset();
    };

    try {
      if (!hasAccount) {
        await Api.signUp(form);
        resetForm();
        alert("회원가입이 성공했습니다!");
        return;
      }
      const res = await Api.signIn(form);
      const jwtToken = res.data.access_token;
      localStorage.setItem("userToken", jwtToken);
      resetForm();
      alert("로그인이 성공했습니다!");
      navigate("/todo");
    } catch (error) {
      resetForm();
      alert(error.response.data.message);
    }
  };

  return (
    <Container>
      <Title>{hasAccount ? "Login" : "Register"}</Title>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="fake@gmail.com"
            onChange={(e) => updateForm(e)}
          />
        </InputContainer>

        <Alert>
          {form.email !== "" && !validateEmail(form.email)
            ? "이메일 형식을 지켜주세요."
            : ""}
        </Alert>

        <InputContainer>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            onChange={(e) => updateForm(e)}
          />
        </InputContainer>

        <Alert>
          {form.password !== "" && !validatePW(form.password)
            ? "비밀번호 형식을 지켜주세요."
            : ""}
        </Alert>

        <SubmitBtn disabled={!validateForm}>Submit</SubmitBtn>
      </FormContainer>

      <ToggleBtn onClick={() => setHasAccount((prev) => !prev)}>
        {hasAccount ? "회원가입하러 가기" : "로그인하러 가기"}
      </ToggleBtn>
    </Container>
  );
}

export default Auth;
