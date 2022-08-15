import styled from "styled-components";

const Btn = styled.span`
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.colors.green400};
  padding: 5px 20px;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  margin: 5px;
`;

const CancelButton = ({ onClick }) => {
  return <Btn onClick={onClick}>취소</Btn>;
};

export { CancelButton };
