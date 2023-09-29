import React from "react";
import video from "./util/compressed-video.mp4"
import styles from "./LandinPage.module.css"
import {useNavigate} from 'react-router-dom'
import adaptImage from "./util/images/Adjust.png"
import commitImage from "./util/images/Commit.png"
import calculateImage from "./util/images/Calc.png"
import calendarImage from "./util/images/Cal.png"
import mealImage from "./util/images/Meal.png"

const LandingPage=()=>{
    const navigate = useNavigate()
    return(
        <div>
        <main className={styles.container_video}>
            <video className={styles.video}
            height="800"
            width="1000"
            autoPlay
            muted
            loop
            src={video}
            type="video/mp4"
            ></video>
            <section className={styles.hero_video_content}>
            <div>
                <h1>Tasty Tracks</h1>
                <h4 className={styles.hero_title}>Precision Nutrition, Tasty Results</h4>
            </div>
            <button onClick={()=>navigate('/Home')} className={styles.get_started_btn}>Get Started</button>
            </section>
        </main>
            <section className={styles.how_it_works_container}>
                <span>
                <img src={calculateImage} alt="" />
                <div className={styles.how_it_works_text_container}>
                    <span className={styles.how_it_works_title}>Calculate Daily Macros</span>
                    <span className={styles.how_it_works_description}>Unlock Your Macros</span>
                    <span className={styles.how_it_works_description}>Discover Your Daily Targets</span>
                </div>
                </span>
                <span>
                <img src={mealImage} alt="" />
                <div className={styles.how_it_works_text_container}>
                    <span className={styles.how_it_works_title}>Choose Your Meals</span>
                    <span className={styles.how_it_works_description}>Explore Delicious Options</span>
                    <span className={styles.how_it_works_description}>Craft Your Perfect Menu</span>
                </div>
                </span>
                <span>
                <img src={calendarImage} alt="" />
                <div className={styles.how_it_works_text_container}>
                    <span className={styles.how_it_works_title}>Create a Meal Plan</span>
                    <span className={styles.how_it_works_description}>Design Your Daily Dining</span>
                    <span className={styles.how_it_works_description}>Craft a Culinary Calendar</span>
                </div>
                </span>
                <span>
                <img src={adaptImage} alt="" />
                <div className={styles.how_it_works_text_container}>
                    <span className={styles.how_it_works_title}>Adapt and Adjust</span>
                    <span className={styles.how_it_works_description}>Fine-Tune Your Food Journey</span>
                    <span className={styles.how_it_works_description}>Personalize Your Plate</span>
                </div>
                </span>
                <span>
                <img src={commitImage} alt="" />
                <div className={styles.how_it_works_text_container}>
                    <span className={styles.how_it_works_title}>Commit to Results</span>
                    <span className={styles.how_it_works_description}>Stay Committed, See Results</span>
                    <span className={styles.how_it_works_description}>Embrace Your Transformation</span>
                </div>
                </span>
            </section>
        </div>
    );
}

export default LandingPage