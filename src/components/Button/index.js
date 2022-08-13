import { PlusIcon } from "../Icon";
import styled from "styled-components";

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.plus};
  cursor: pointer;
`;

const IconBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusButton = () => {
  return (
    <Circle>
      <IconBlock>
        <PlusIcon />
      </IconBlock>
    </Circle>
  );
};
