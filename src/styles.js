// @flow
import styled from "styled-components";

export const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalDiv = styled.div`
  position: fixed;
  padding: 2.5em 1.5em 1.5em 1.5em;
  background-color: white;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  left: 50%;
  top: 50%;
  height: auto;
  transform: translate(-50%, -50%);
  max-width: 30em;
  border-radius: 0.25rem;
  max-height: calc(100% - 1em);
`;
