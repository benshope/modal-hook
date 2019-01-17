// @flow
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { useModal } from "./src";

const Button = styled.button`
  padding: 1rem;
  margin-top: 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  :hover {
    background: #f2f2f2;
  }
  :active {
    background: #c0c0c0;
  }
  :focus {
    outline: none;
  }
`;

const stories = storiesOf("Modal", module).add("default", () => {
  const [modalElement, openModal] = useModal(closeModal => (
    <div>
      <div>{"Modal  Content"}</div>
      <Button onClick={closeModal}>{"Close Modal"}</Button>
    </div>
  ));
  return (
    <div className="App">
      <Button onClick={openModal}>Open Modal</Button>
      {modalElement}
    </div>
  );
});
// .add("custom backdrop", () => {

// const CustomOverlay = ({ onClick, children }: OverlayProps) => {
//   const modalContentsRef = useRef(null);
//   return (
//     <OverlayDiv
//       class="modal-background"
//       onClick={e =>
//         modalContentsRef.current &&
//         !modalContentsRef.current.contains(e.target) &&
//         onClick()
//       }
//     >
//       <ModalDiv className="modal-wrapper" ref={modalContentsRef}>
//         {children}
//       </ModalDiv>
//     </OverlayDiv>
//   );
// };

//     const [modalElement, openModal] = useCustomModal(closeModal => (
//       <div>
//         <div>{"Modal  Content"}</div>
//         <Button onClick={closeModal}>{"Close Modal"}</Button>
//       </div>
//     ));
//     return (
//       <div className="App">
//         <Button onClick={openModal}>Open Modal</Button>
//         {modalElement}
//       </div>
//     );
//   });

// export const modalBackground = {
//   success: "green",
//   info: "teal",
//   warning: "yellow",
//   error: "red"
// };

// Object.keys(modalBackground).forEach(modalType =>

//   stories.add(type, () => {

// export const modalBackground = {
//   success: "green",
//   info: "teal",
//   warning: "yellow",
//   error: "red"
// };

//     const [modalElement, openModal] = useModal(closeModal => (
//       <div>
//         <div>{"Modal  Content"}</div>
//         <Button onClick={closeModal}>{"Close Modal"}</Button>
//       </div>
//     ));
//     return (
//       <div className="App">
//         <Button onClick={openModal}>Open Modal</Button>
//         {modalElement}
//       </div>
//     );

//   }

//   ));

//   .add("success", () => {
//     const [modalElement, openModal] = useModal(closeModal => (
//       <div>
//         <div>{"Modal  Content"}</div>
//         <Button onClick={closeModal}>{"Close Modal"}</Button>
//       </div>
//     ));
//     return (
//       <div className="App">
//         <Button onClick={openModal}>Open Modal</Button>
//         {modalElement}
//       </div>
//     );
//   })
//   .add("info", () => {
//     const [modalElement, openModal] = useModal(closeModal => (
//       <div>
//         <div>{"Modal  Content"}</div>
//         <Button onClick={closeModal}>{"Close Modal"}</Button>
//       </div>
//     ));
//     return (
//       <div className="App">
//         <Button onClick={openModal}>Open Modal</Button>
//         {modalElement}
//       </div>
//     );
//   })
//   .add("success", () => {
//     const [modalElement, openModal] = useModal(closeModal => (
//       <div>
//         <div>{"Modal  Content"}</div>
//         <Button onClick={closeModal}>{"Close Modal"}</Button>
//       </div>
//     ));
//     return (
//       <div className="App">
//         <Button onClick={openModal}>Open Modal</Button>
//         {modalElement}
//       </div>
//     );
//   });
