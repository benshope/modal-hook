// @flow
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { createModal, Overlay, Modal } from "./src";

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

storiesOf("Modal", module).add("default", () => {
  const [modal, openModal] = createModal(closeModal => (
    <div>
      <div>{"Modal  Content"}</div>
      <Button onClick={closeModal}>{"Close Modal"}</Button>
    </div>
  ));
  return (
    <div className="App">
      <Button onClick={openModal}>Open Modal</Button>
      {modal}
    </div>
  );
});
