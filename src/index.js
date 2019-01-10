// @flow
import React, { useRef } from "react";
import type { Node, Element as ReactElement } from "react";
import ReactDOM from "react-dom";

type Props = {
  isOpen?: boolean,
  children: ReactElement<*>,
  target: Element
};

export function Modal({
  isOpen,
  children,
  target = (document.body: any)
}: Props) {
  return isOpen ? ReactDOM.createPortal(children, target) : null;
}

export function ModalWithOverlay({
  onClickOverlay,
  ...modalProps
}: {
  ...Props,
  onClickOverlay: () => void
}) {
  const modalContentsRef = useRef(null);
  return (
    <div
      className="modal-background"
      onClick={e =>
        modalContentsRef.current &&
        !modalContentsRef.current.contains(e.target) &&
        onClickOverlay()
      }
    >
      <div className="modal-wrapper" ref={modalContentsRef}>
        <Modal {...modalProps} />
      </div>
    </div>
  );
}
