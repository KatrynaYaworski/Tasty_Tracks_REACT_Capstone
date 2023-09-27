import React from "react";
import styles from "./LoginMessage.module.css";
import { useNavigate } from "react-router-dom";
import image from "../../../images/calories-calculator.png";

const LoginMessage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <div className={styles.message_container}>
          <div className={styles.icon_container}>
      <div className={styles.icon_wrapper}>
        <img
          className={styles.img}
          src={image}
          style={{ height: "40px" }}
          alt=""
        />
      </div>
    </div>
          <div className={styles.message}>
            Please Sign in and calculate your results before entering this page.
          </div>
          <button className={styles.button} onClick={() => navigate("/Home")}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginMessage;
