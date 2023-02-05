import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Button from "../Layout/Button";
import Form from "../Layout/Form";
import styles from "./Modal.module.css";
const onSubmitHandler = (event) => {
  event.preventDefault();
};
const Backdrop = ({ close, show }) => {
  return (
    <div
      className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`}
      onClick={close}
    ></div>
  );
};

const Overlay = ({ children, show }) => (
  <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}>
    <Form onSubmit={onSubmitHandler}>
      <Form.Controler>
        <label htmlfor="name"> Name </label>
        <input type="text" id="name" placeholder="Name" />
      </Form.Controler>
      <Form.Controler>
        <label htmlfor="department"> Department </label>
        <input type="text" id="department" placeholder="Department" />
      </Form.Controler>
      <Form.Controler>
        <label htmlfor="phone"> Phone </label>
        <input type="text" id="phone" placeholder="Phone" />
      </Form.Controler>
      <Form.Controler>
        <label htmlfor="email"> Email </label>
        <input type="text" id="email" placeholder="Enter " />
      </Form.Controler>
      <Form.Controler>
        <label htmlfor="officialemail">Official Email </label>
        <input type="text" id="officialemail" placeholder="Enter " />
      </Form.Controler>
      <Form.Controler>
        <label htmlfor="gender"> Gender</label>
        <input type="text" id="gender" placeholder="Gender" />
      </Form.Controler>
      <div style={{ marginTop: "20px" }}>
        <Button type="submit" style={{ marginRight: "20px" }}>
          Save
        </Button>
        <Button type="reset" ype="reset">
          Reset
        </Button>
      </div>
    </Form>
  </div>
);

const Modal = ({ children, show, closeModal }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Fragment>
          <Backdrop close={closeModal} show={show} />
          <Overlay show={show}>{children}</Overlay>
        </Fragment>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
