import { useRef } from "react";
import styled from "styled-components";
import useOutsideClick from "../../hooks/useOutSideClick";
import ModalContainer from "./ModalContainer";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 75%;
  height: fit-content;
  border-radius: 15px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Contents = styled.div`
  margin: 40px 30px;

  h1 {
    ${({ theme }) => theme.fontSizes.xl3};
    font-weight: 600;
  }
`;

function Modal({ onClose }) {
  const modalRef = useRef(null);

  const handleClose = () => {
    onClose?.();
  };

  useOutsideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <Contents>
            <h1> 할 일 추가 </h1>
            <input placeholder="이 곳에 입력해주세요." />
            <button>확인</button>
            <button onClick={handleClose}>취소</button>
          </Contents>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
}

export default Modal;
