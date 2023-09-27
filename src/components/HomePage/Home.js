import React from "react";
import WizardContainer from "./WizardContainer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_body}>
      <div className={styles.home}>
        <WizardContainer />
        <div className={styles.home_steps_container}>
          <div className={styles.how_it_works_title}>HOW IT WORKS?</div>
          <p>1. Select the gender, activity level and enter your age.</p>
          <p>2. Enter your height, weight and select your goal.</p>
          <p>3. Hit the Calculate button to see the result.</p>
        </div>
      </div>
      <div className={styles.TOC_wrapper}>
        <div className={styles.TOC_container}>
          <div className={styles.TOC_title_container}>
          <div className={styles.TOC_title}> Table of Contents</div>
          </div>
          <ul>
            <li>How to use macro calculator to calculate your macro?</li>
            <li>What are Macros (IIFYM) or Macronutrients??</li>
            <li>What are the advantages of using our macro calculator?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
