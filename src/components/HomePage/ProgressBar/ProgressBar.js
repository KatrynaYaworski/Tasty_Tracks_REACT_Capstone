import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ currentStep }) => {
  const isStepOneComplete = currentStep >= 1;
  const isStepTwoComplete = currentStep >= 2;

  return (
    <div className={styles.progress_container}>
      <div className={styles.progress_bar}>
        <div style={{fontFamily:"cursive"}} className={`circle ${isStepOneComplete ? "completed" : ""}`}>
          {isStepOneComplete ? "✓" : ""}
        </div>
        <div  className={`bar ${isStepTwoComplete ? "completed" : ""}`} />
        <div style={{fontFamily:"cursive"}} className={`circle ${isStepTwoComplete ? "completed_two" : ""}`}>
          {isStepTwoComplete ? "✓" : ""}
        </div>
      </div>
      <div className={styles.steps}>
        <div>Step One</div>
        <div>Step Two</div>
      </div>
    </div>
  );
};

export default ProgressBar;
