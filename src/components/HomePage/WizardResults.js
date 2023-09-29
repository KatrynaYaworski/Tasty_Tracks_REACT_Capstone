import React, { useState, useContext } from "react";
import styles from "./Wizard.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const WizardResults = ({ carbs, calories, fat, protein, error }) => {
  
  return (
    <div className={styles.wizard_results_container}>
      <div className={styles.wresults_macro_container}>
        <h2>Recommended Daily Intake</h2>
        <div className={styles.wresults_macro_boxes_container}>
          <div className={styles.wresults_macro_box}>
            <img
              className={styles.wresults_macro_image}
              id={styles.calories}
              referrerPolicy="no-referrer"
              src="https://tinyurl.com/22nx6hd5"
              style={{ height: "90px", width: "90px" }}
            />
            <div>Calories</div>
            <div className={styles.wresults_number}>{calories}</div>
            <div>Total</div>
          </div>
          <div className={styles.wresults_macro_box}>
            <img
              className={styles.wresults_macro_image}
              id={styles.carbs}
              referrerPolicy="no-referrer"
              src="https://tinyurl.com/2a2jcvwc"
              style={{ height: "90px", width: "90px" }}
            />
            <div>Carbs</div>
            <div className={styles.wresults_number}>{carbs}</div>
            <div>Grams</div>
          </div>
          <div className={styles.wresults_macro_box}>
            <img
              className={styles.wresults_macro_image}
              id={styles.fat}
              referrerPolicy="no-referrer"
              src="https://tinyurl.com/mvk9b79n"
              style={{ height: "90px", width: "90px" }}
            />
            <div>Fat</div>
            <div className={styles.wresults_number}>{fat}</div>
            <div>Grams</div>
          </div>
          <div className={styles.wresults_macro_box}>
            <img
              className={styles.wresults_macro_image}
              id={styles.protein}
              referrerPolicy="no-referrer"
              src="https://tinyurl.com/ychy7t35"
              style={{ height: "90px", width: "90px" }}
            />
            <div>Protein</div>
            <div className={styles.wresults_number}>{protein}</div>
            <div>Grams</div>
          </div>
        </div>
      </div>
      {error && <div style={{color:'red'}}>{error}</div>}
    </div>
  );
};

export default WizardResults;
