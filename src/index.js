// @flow
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

const createModal = (modalContents, element = document.body) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modal = isModalOpen
    ? ReactDOM.createPortal(modalContents(() => setModalOpen(false)), element)
    : null;
  return [modal, () => setModalOpen(true)];
};

const createModalWithOverlay = (modalContents, element) => {
  const modalContentsRef = useRef(null);
  return createModal(closeModal => (
    <div
      className="modal-background"
      onClick={e =>
        modalContentsRef.current &&
        !modalContentsRef.current.contains(e.target) &&
        closeModal()
      }
    >
      <div className="modal-wrapper" ref={modalContentsRef}>
        {modalContents(closeModal)}
      </div>
    </div>
  ));
};

export default createModalWithOverlay;
