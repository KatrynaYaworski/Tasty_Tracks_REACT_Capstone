import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Wizard.module.css";
import ProgressBar from "./ProgressBar/ProgressBar";

const WizardStepTwo = ({ currentStep, error, setFeet, feet, setInches, inches, setWeight, weight, setGoal, goal }) => {
  return (
    <div className={styles.w_st_container}>
      <ProgressBar currentStep={currentStep} />

      <div className={styles.w_st_top_container}>
        <section className={styles.w_st_section}>Height</section>
        <div className={styles.w_st_hf_container}>
          <div className={styles.w_st_top_left_container}>
            <input
              onChange={(e) => setFeet(e.target.value)}
              className={styles.w_st_input}
              id={styles.w_st_input_feet}
              type="text"
              value={feet}
            />
            <span className={styles.w_st_span}>ft</span>
          </div>

          <div className={styles.w_st_top_right_container}>
            <input
              onChange={(e) => setInches(e.target.value)}
              className={styles.w_st_input}
              id={styles.w_st_input_inches}
              type="text"
              value={inches}
            />
            <span className={styles.w_st_span}>in</span>
          </div>
        </div>
      </div>

      <div className={styles.w_st_middle_container}>
        <section className={styles.w_st_section}>Weight</section>

        <div className={styles.w_st_middle_input_container}>
          <input
            onChange={(e) => setWeight(e.target.value)}
            className={styles.w_st_input}
            id={styles.w_st_input_weight}
            type="text"
            value={weight}
          />
          <span className={styles.w_st_span}>lbs</span>
        </div>
      </div>

      <div className={styles.w_st_bottom_container}>
        <div className={styles.w_st_goal_container}>
          <div className={styles.w_st_goal_title}>
            Choose Your goal
          </div>

          <select onChange={(e) => setGoal(e.target.value)} name="goal" value={goal} id="goal">
            <option value="fat loss">Fat Loss</option>
            <option value="maintain">Maintain</option>
            <option value="muscle gain">Muscle Gain</option>
          </select>
        </div>
      </div>
      {error && <div style={{color:'red'}}>{error}</div>}
    </div>
  );
};

export default WizardStepTwo;
