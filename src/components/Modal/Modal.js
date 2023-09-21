import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, closeModal, children }) => {
    
    if (!isOpen) return null;
  
    return (
      <div className={styles.modal_overlay}>
        <div className={styles.modal_content}>
          <button className={styles.close_button} onClick={closeModal}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };

export default Modal;