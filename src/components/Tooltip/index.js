import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
`;

const Tip = styled.div`
  background: var(--tooltip-background-color);
  color: var(--tooltip-text-color);
  font-size: var(--tooltip-text-size);
  font-weight: bold;
  position: absolute;
  top: -135%;
  box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
  border-radius: 5px;
  padding: 5px;
  z-index: 1;
  white-space: nowrap;

  &::after {
    content: "";
    border-bottom: 8px solid transparent;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid var(--tooltip-background-color);
    content: "";
    height: 0;
    position: absolute;
    top: 100%;
    left: 5%;
    width: 0;
  }
`;

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 500);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <Wrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {active && <Tip>{props.content}</Tip>}
    </Wrapper>
  );
};

export default Tooltip;
