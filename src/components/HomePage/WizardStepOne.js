import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Wizard.module.css";
import ProgressBar from "./ProgressBar/ProgressBar";

const WizardStepOne = ({
  currentStep,
  error,
  setGender,
  gender,
  setAge,
  age,
  setActivityLevel,
  activityLevel
}) => {
  return (
    <section className={styles.w_so_container}>
      <ProgressBar currentStep={currentStep} />

      <div className={styles.w_so_top_container}>
        <div className={styles.w_so_top_left_container}>
          <section className={styles.w_so_section}>Gender</section>
          <div className={styles.w_so_radio_btns_container}>
            <input onClick={(e) => setGender(e.target.value)} type="radio" id="male" checked={gender === 'Male'} name="gender" value="Male" />
            <label htmlFor="male">MALE</label>
            <input onClick={(e) => setGender(e.target.value)} type="radio" id="female" checked={gender === 'Female'}  name="gender" value="Female" />
            <label htmlFor="female">FEMALE</label>
          </div>
        </div>

        <div className={styles.w_so_top_right_container}>
          <section>Your Age</section>
          <input
            onChange={(e) => setAge(e.target.value)}
            className={styles.w_so_input}
            id={styles.w_so_input_age}
            type="text"
            placeholder="Age"
            value={age}
          />
        </div>
      </div>

      <div className={styles.w_so_bottom_container}>
        <div className={styles.w_so_activity_container}>
          <div className={styles.w_so_activity_title}>
            Select Activity Level
          </div>

          <select onChange={(e) => setActivityLevel(e.target.value)} name="activity" value={activityLevel} id="activity">
            <option value="sedentary">Sedentary</option>
            <option value="lightly active">Lightly Active</option>
            <option value="moderately active">Moderately Active</option>
            <option value="very active">Very Active</option>
          </select>
        </div>
      </div>
      {error && <div style={{color:'red'}}>{error}</div>}
    </section>
  );
};

export default WizardStepOne;
