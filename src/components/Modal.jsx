import { useRef } from 'react';

const Modal = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return (
    showModal && (
      <section className="modal" ref={modalRef} onClick={closeModal}>
        <div className="container">{children}</div>
      </section>
    )
  );
};

export default Modal;
