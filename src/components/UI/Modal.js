import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = props => (
  <div className={styles.backdrop} onClick={props.onClose} />
);

const ModalOverlay = props => (
  <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div>
);

const portalDiv = document.getElementById("overlays");

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalDiv)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalDiv
      )}
    </>
  );
};

export default Modal;
