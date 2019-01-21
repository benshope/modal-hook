// @flow
import React, { useRef, useState } from "react";
import type { AbstractComponent, Node, Element as ReactElement } from "react";
import ReactDOM from "react-dom";
import {
  BackdropDiv as DefaultBackdropDiv,
  ModalDiv as DefaultModalDiv
} from "./styles";

type ModalOverrides = {
  target?: Element,
  backdrop?: AbstractComponent<*>,
  modal?: AbstractComponent<*>
};

type ModalCreator = (closeModal: () => void) => ReactElement<*>;

export const Backdrop = DefaultBackdropDiv;
export const Modal = DefaultModalDiv;

export const useModal = (
  modalCreator: ModalCreator,
  overrides?: ModalOverrides
) => {
  let openModal;
  const BackdropDiv = (overrides && overrides.backdrop) || DefaultBackdropDiv;
  const ModalDiv = (overrides && overrides.modal) || DefaultModalDiv;
  const ModalExample = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const modalRef: any = useRef(null); // TODO fix type
    openModal = () => setModalOpen(true);
    return isModalOpen
      ? ReactDOM.createPortal(
          <BackdropDiv
            class="modal-background"
            onClick={e =>
              modalRef.current &&
              !modalRef.current.contains(e.target) &&
              setModalOpen(false)
            }
          >
            <ModalDiv className="modal-wrapper" ref={modalRef}>
              {modalCreator(() => setModalOpen(false))}
            </ModalDiv>
          </BackdropDiv>,
          (overrides && overrides.target) || ((document.body: any): Element)
        )
      : null;
  };
  const modal = <ModalExample />;
  return [modal, () => openModal()];
};
