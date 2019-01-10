// @flow
import React, { useRef, useState } from "react";
import type { Node, Element as ReactElement } from "react";
import ReactDOM from "react-dom";
import { BackgroundDiv, WrapperDiv } from "./styles";

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
    <BackgroundDiv
      class="modal-background"
      onClick={e =>
        modalContentsRef.current &&
        !modalContentsRef.current.contains(e.target) &&
        onClick()
      }
    >
      <WrapperDiv className="modal-wrapper" ref={modalContentsRef}>
        {children}
      </WrapperDiv>
    </BackgroundDiv>
  );
};

type ModalCreator = (closeModal: () => void) => ReactElement<*>;

export const createModal = (modalCreator: ModalCreator) => {
  let openModal;
  const ModalExample = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    openModal = () => {
      console.log("opening");
      setModalOpen(true);
    };
    return isModalOpen ? (
      <Overlay onClick={() => setModalOpen(false)}>
        <Modal>{modalCreator(() => setModalOpen(false))}</Modal>
      </Overlay>
    ) : null;
  };
  const modal = <ModalExample />;
  return [modal, () => openModal()];
};
