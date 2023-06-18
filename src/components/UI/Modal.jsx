import React, { Fragment, useContext } from "react";

import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
import CartContext from "../../store/cart-context";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
