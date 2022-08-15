import Modal from "../../components/Modal";

function AddTodoModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h1> 할 일 추가 </h1>
      <input placeholder="이 곳에 입력해주세요." />
      <button>확인</button>
      <button onClick={onClose}>취소</button>
    </Modal>
  );
}

export default AddTodoModal;
