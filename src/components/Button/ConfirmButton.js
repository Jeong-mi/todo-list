import styled from "styled-components";

const Btn = styled.button.attrs({
  type: "submit",
})`
  background-color: ${({ theme }) => theme.colors.green400};
  padding: 5px 20px;
  border-radius: 15px;
  font-weight: 600;
  margin: 5px;
`;

const ConfirmButton = ({ onClick }) => {
  return <Btn onClick={onClick}>확인</Btn>;
};

export { ConfirmButton };
