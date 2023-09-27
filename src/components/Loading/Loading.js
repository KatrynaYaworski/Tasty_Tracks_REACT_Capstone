import React from "react";
import styles from "./Loading.module.css"; // Import your CSS for styling
import calendar from "../Landing/video/images/Cal.png";
import image from "../../images/calories-calculator.png";

function Loading() {
  return (
    <div className={styles.loading_container}>
      <div className={styles.loading_wrapper}>
        <div className={styles.loading_spinner}>
          {/* <i className="fa-solid fa-calendar-days fa-xl" style={{color: '#ffffff'}}></i> */}
        </div>
        <img
          className={styles.img}
          src={image}
          style={{ height: "35px" }}
          alt=""
        />
      </div>
      <div className={styles.loading_text}>Loading...</div>
    </div>
  );
}

export default Loading;
