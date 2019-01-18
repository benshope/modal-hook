// @flow
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { useModal, Backdrop, Modal } from "./src";

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

const stories = storiesOf("Modal", module)
  .add("default", () => {
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
  })
  .add("custom backdrop", () => {
    const backdrop = styled(Backdrop)`
      background: black;
    `;
    const [modalElement, openModal] = useModal(
      closeModal => (
        <div>
          <div>{"Modal  Content"}</div>
          <Button onClick={closeModal}>{"Close Modal"}</Button>
        </div>
      ),
      { backdrop }
    );
    return (
      <div className="App">
        <Button onClick={openModal}>Open Modal</Button>
        {modalElement}
      </div>
    );
  });

const modalTypeColors = {
  success: "green",
  info: "teal",
  warning: "yellow",
  error: "red"
};

Object.keys(modalTypeColors).forEach(type => {
  stories.add(type, () => {
    const backdrop = styled(Backdrop)`
      background: rgba(0, 0, 0, 0);
    `;
    const modal = styled(Modal)`
      background: ${() => modalTypeColors[type]};
      color: white;
    `;
    const [modalElement, openModal] = useModal(
      closeModal => (
        <div>
          <div>{"Modal  Content"}</div>
          <Button onClick={closeModal}>{"Close Modal"}</Button>
        </div>
      ),
      { backdrop, modal }
    );
    return (
      <div className="App">
        <Button onClick={openModal}>Open Modal</Button>
        {modalElement}
      </div>
    );
  });
});
