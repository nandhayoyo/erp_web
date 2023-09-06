import React from "react";
import "../styles/Modal.scss";
import loginImage from "../assets/images/login.svg";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" id="#id-modal-content">
        <div className="row">
          <img src={loginImage} alt="About" />
          <div onClick={(e) => e.stopPropagation()}>
            <h3>Login Page</h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
