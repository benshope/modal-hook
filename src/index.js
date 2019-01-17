// @flow
import React, { useRef, useState } from "react";
import type { Node, Element as ReactElement } from "react";
import ReactDOM from "react-dom";
import { OverlayDiv, ModalDiv } from "./styles";

type ModalProps = {
  isOpen?: boolean,
  children: ReactElement<*>,
  target?: Element
};

export const Modal = ({
  children,
  target = (document.body: any)
}: ModalProps) => ReactDOM.createPortal(children, target);

type OverlayProps = {
  children: ReactElement<*>,
  onClick: () => void
};

export const Overlay = ({ onClick, children }: OverlayProps) => {
  const modalContentsRef = useRef(null);
  return (
    <OverlayDiv
      class="modal-background"
      onClick={e =>
        modalContentsRef.current &&
        !modalContentsRef.current.contains(e.target) &&
        onClick()
      }
    >
      <ModalDiv className="modal-wrapper" ref={modalContentsRef}>
        {children}
      </ModalDiv>
    </OverlayDiv>
  );
};

type ModalCreator = (closeModal: () => void) => ReactElement<*>;

export const useModalAndOverlay = (modalCreator: ModalCreator) => {
  let openModal;
  const ModalExample = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    openModal = () => setModalOpen(true);
    return isModalOpen ? (
      <Modal>{modalCreator(() => setModalOpen(false))}</Modal>
    ) : null;
  };
  const modal = <ModalExample />;
  return [modal, () => openModal()];
};

export const useModal = (modalCreator: ModalCreator) => {
  return useModalAndOverlay(closeModal => (
    <Overlay onClick={closeModal}>{modalCreator(closeModal)}</Overlay>
  ));
};
