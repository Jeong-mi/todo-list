import { PlusIcon } from "../Icon";
import styled from "styled-components";

const Circle = styled.button`
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

const PlusButton = (props) => {
  return (
    <Circle onClick={props.onClick}>
      <IconBlock>
        <PlusIcon />
      </IconBlock>
    </Circle>
  );
};

export { PlusButton };
