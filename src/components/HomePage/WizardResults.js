import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Wizard.module.css";

const WizardResults = ({carbs, calories, fat, protein}) => {
    console.log(
         {carbs, calories, fat, protein}
     )
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
              style={{ height: "60px", width: "60px" }}
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
              style={{ height: "60px", width: "60px" }}
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
              style={{ height: "60px", width: "60px" }}
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
              style={{ height: "60px", width: "60px" }}
            />
            <div>Protein</div>
            <div className={styles.wresults_number}>{protein}</div>
            <div>Grams</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardResults;
