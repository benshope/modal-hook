// @flow
import React, { useRef, useState } from "react";
import type { AbstractComponent, Node, Element as ReactElement } from "react";
import ReactDOM from "react-dom";
import {
  OverlayDiv as DefaultOverlayDiv,
  ModalDiv as DefaultModalDiv
} from "./styles";

type ModalOverrides = {
  OverlayDiv?: AbstractComponent<*>,
  ModalDiv?: AbstractComponent<*>
};

type ModalCreator = (closeModal: () => void) => ReactElement<*>;

export const useModal = (
  modalCreator: ModalCreator,
  target?: Element,
  overrides?: ModalOverrides
) => {
  let openModal;
  const OverlayDiv = (overrides && overrides.OverlayDiv) || DefaultOverlayDiv;
  const ModalDiv = (overrides && overrides.ModalDiv) || DefaultModalDiv;
  const ModalExample = () => {
    const modalContentsRef = useRef(null);
    const [isModalOpen, setModalOpen] = useState(false);
    openModal = () => setModalOpen(true);
    return isModalOpen
      ? ReactDOM.createPortal(
          <OverlayDiv
            class="modal-background"
            onClick={e =>
              modalContentsRef.current &&
              !modalContentsRef.current.contains(e.target) &&
              setModalOpen(false)
            }
          >
            <ModalDiv className="modal-wrapper" ref={modalContentsRef}>
              {modalCreator(() => setModalOpen(false))}
            </ModalDiv>
          </OverlayDiv>,
          target || ((document.body: any): Element)
        )
      : null;
  };
  const modal = <ModalExample />;
  return [modal, () => openModal()];
};
