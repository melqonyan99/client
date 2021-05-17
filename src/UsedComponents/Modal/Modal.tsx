import React, { forwardRef, useImperativeHandle } from "react";
import Dialog from "@material-ui/core/Dialog";
import "./modal.scss";

const Modal = (props, ref) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (props.afterClose) props.afterClose();
  };

  const handleToggle = () => {
    setOpen(!open);
  };
  useImperativeHandle(ref, () => ({
    closeModal: handleClickOpen,
    openModal: handleClickOpen,
    toggleModal: handleToggle
  }));

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="my-dialog"
      >
        <div className="modal">
          <div className="modal-head" style={props.headStyle}>
            <h2>{props.main}</h2>
            <p>{props.text}</p>
            <span className="icon-close" onClick={handleClose}></span>
          </div>
          <div className="modal-body">{props.children}</div>
          {props.top && <div className="top-ring">{props.top}</div>}
        </div>
      </Dialog>
    </div>
  );
};

export default forwardRef(Modal);
