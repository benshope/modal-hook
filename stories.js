// @flow
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import { ModalWithOverlay } from "./src";

function ModalExample() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <ModalWithOverlay
        onClickOverlay={() => setModalOpen(false)}
        isOpen={isModalOpen}
      >
        <div>
          <div>{"Modal  Content"}</div>
          <button onClick={() => setModalOpen(false)}>{"Close Modal"}</button>
        </div>
      </ModalWithOverlay>
    </div>
  );
}

storiesOf("Modal", module)
  .add("open modal", () => (
    <ModalWithOverlay onClickOverlay={action("onClickOverlay")} isOpen={true}>
      <div>
        <div>{"Modal  Content"}</div>
        <button onClick={action("onClick")}>{"Close Modal"}</button>
      </div>
    </ModalWithOverlay>
  ))
  .add("uncontrolled", () => <ModalExample />);
