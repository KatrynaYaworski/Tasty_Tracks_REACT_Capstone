import React from "react";
import WizardContainer from "./WizardContainer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_body}>
      <div className={styles.home}>
        <WizardContainer/>
        <div className={styles.home_steps_container}>
            <div className={styles.how_it_works_title}>HOW IT WORKS?</div>
            <p>1. Select the gender, activity level and enter your age.</p>
            <p>2. Enter your height, weight and select your goal.</p>
            <p>3. Hit the Calculate button to see the result.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
