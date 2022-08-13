import { PlusIcon } from "../Icon";
import styled from "styled-components";

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.plus};
  cursor: pointer;
  position: relative;
`;

const IconBlock = styled.span`
  position: absolute;
  top: 25%;
  left: 25%;
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
