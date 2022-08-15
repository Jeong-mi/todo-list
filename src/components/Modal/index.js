import { useEffect } from "react";
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
  display: block;
  width: 75%;
  height: fit-content;
  border-radius: 30px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Contents = styled.div`
  margin: 40px 30px;
`;

function Modal({ onClose, children }) {
  const modalRef = useRef(null);

  const handleClose = () => {
    onClose?.();
  };

  // 모달 창 있을 때 body의 스크롤은 막음
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);

  // 모달 외부 영역 클릭 시 닫힘
  useOutsideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <Contents>{children}</Contents>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
}

export default Modal;
