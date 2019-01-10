// @flow
import React from "react";
import { storiesOf } from "@storybook/react";

import createModal from "./src";

storiesOf("Modal", module).add("default", () => {
  const [modal, openModal] = createModal(closeModal => (
    <div>
      <div>{"Modal  Content"}</div>
      <button onClick={() => closeModal()}>{"Close Modal"}</button>
    </div>
  ));

  return (
    <div className="App">
      <button onClick={() => openModal()}>Open Modal</button>
      {modal}
    </div>
  );
});
