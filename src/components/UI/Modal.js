import React from "react";
import ReactDOM from "react-dom";
import classes from "./Model.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.model}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Model = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Model;
