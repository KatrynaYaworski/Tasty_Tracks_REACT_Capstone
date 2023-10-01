import React from "react";
import WizardContainer from "./WizardContainer";
import styles from "./Home.module.css";

const Home = () => {
 function scrollToTop () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  }
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={styles.home_body}>
      <div className={styles.home}>
        <WizardContainer />
        <div className={styles.home_steps_container}>
          <div className={styles.how_it_works_title}>HOW IT WORKS?</div>
          <p>1. Select your gender, activity level and enter your age.</p>
          <p>2. Enter your height, weight and select your goal.</p>
          <p>3. Hit the Calculate button to see your results!</p>
        </div>
      </div>
      <div className={styles.TOC_wrapper}>
        <div className={styles.TOC_container}>
          <div className={styles.TOC_title_container}>
            <div className={styles.TOC_title}> Table of Contents</div>
          </div>
          <ul>
            <li><button className={styles.TOC_btn} onClick={() => scrollTo('section1')} href="section1">How to use the Tasty Tracks macro calculator to calculate your macros?</button></li>
            <li><button className={styles.TOC_btn} onClick={() => scrollTo('section2')} href="#section2">What are Macros (IIFYM) or Macronutrients?</button></li>
            <li><button className={styles.TOC_btn} onClick={() => scrollTo('section3')} href="#section3">What are the advantages of using our macro calculator?</button></li>
          </ul>
        </div>
      </div>
      <div className={styles.faq_container}>
        <div className={styles.faq_inner_container}>
          <p className={styles.TOC_under_txt}>
          This advanced macro calculator is your personalized solution for effortlessly calculating your nutrient intake and receiving real-time diet plans.
          </p>
          <h2 id="section1">How to use the Tasty Tracks macro calculator to calculate your macros?</h2>
          <p>
            With a simple three-step process, our user-friendly tool delivers instant and accurate results tailored to your unique requirements.
          </p>
          <h4 className={styles.faq_steps}>Step 1</h4>
          <p className={styles.faq_steps_text}>Select your gender, activity level and enter your age.</p>
          <h4 className={styles.faq_steps}>Step 2</h4>
          <p className={styles.faq_steps_text}>
            Enter the measurements of your weight and height and select your
            goal.
          </p>
          <h4 className={styles.faq_steps}>Step 3</h4>
          <p className={styles.faq_steps_text}>
            Click "Calculate" to get the whole plan that includes per day values
            of your macros and calories
          </p>

          <h2 id="section2">What are Macros (IIFYM) or Macronutrients?</h2>
          <p>
          Macronutrients, commonly known as macros, are fundamental biochemical compounds that constitute a significant portion of your diet. These essential nutrients play a vital role in various physiological processes within the body.
          </p>
          <p>
          For your body to function optimally and maintain overall well-being, it requires a consistent intake of these macronutrients. They serve as the building blocks for energy production and support the body's maintenance and growth.
          </p>
          <p>
          A balanced and thoughtful approach to your diet is crucial for sustaining good health. The primary macronutrients include carbohydrates, proteins, and fats, each contributing uniquely to your nutritional needs. Embracing a well-rounded diet plan ensures that you meet these essential requirements for a healthier and more vibrant life.
          </p>
          <div className={styles.macro_boxes_container}>
            <div className={styles.box}>
              <div>
                <img
                  src="https://tinyurl.com/tastytracks3"
                  alt="Carbs"
                  style={{ width: "60px", height: "61px" }}
                />
                <strong>Carbs</strong>
              </div>
              <p>45-65% of calories</p>
            </div>

            <div className={styles.box}>
              <div>
                <img
                  src="https://tinyurl.com/tastytracks2"
                  alt="Protein"
                  style={{ width: "60px", height: "61px" }}
                />
                <strong>Protein</strong>
              </div>
              <p>45-65% of calories</p>
            </div>

            <div className={styles.box}>
              <div>
                <img
                  src="https://tinyurl.com/tastytracks"
                  alt="Fats"
                  style={{ width: "60px", height: "61px" }}
                />
                <strong>Fats</strong>
              </div>
              <p>10-35% of calories</p>
            </div>
          </div>

          <h3>Carbohydrates</h3>
          <p>
          Carbohydrates are macromolecules composed of carbon, hydrogen, and oxygen. They play a crucial role in supporting the proper functioning of both the mind and body. These macronutrients are a vital component of our diet, providing essential energy for various bodily functions.
          </p>
          <p className={styles.decrip_titles}>Carbs in a Selection of Foods:</p>
          <table className={styles.carb_table} style={{width: "100%", borderRadius:"12px"}} >
            <thead>
              <tr>
                <th style={{position: "relative"}}>Food</th>
                <th style={{position: "relative"}}>Carbs per (g)</th>
                <th style={{position: "relative"}}>Carbs per 100g</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>White Bread</td>
                <td>50</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Whole Wheat Bread</td>
                <td>20</td>
                <td>42</td>
              </tr>
              <tr>
                <td>Oatmeal with Milk</td>
                <td>30</td>
                <td>14</td>
              </tr>
              <tr>
                <td>Pastry (100g)</td>
                <td>55</td>
                <td>51</td>
              </tr>
              <tr>
                <td>Banana (100g)</td>
                <td>20</td>
                <td>23</td>
              </tr>
              <tr>
                <td className={styles.bottom_td_left}>Sugar (10oz)</td>
                <td>25</td>
                <td className={styles.bottom_td_right}>100</td>
              </tr>
            </tbody>
          </table>

          <p>
          Carbohydrates are found abundantly in fruits, vegetables, milk, honey, and sugary juices. They serve as the primary energy source due to their numerous benefits for different parts of the body.
          </p>
          <p>
          Carbs contribute to cellular respiration, where glucose, a carbohydrate, is used to produce ATP—the energy currency of the body. Adequate fiber intake, whether soluble or insoluble, promotes proper bowel function and helps prevent digestive tract diseases.
          </p>
          <p>
          Moreover, carbohydrates provide immediate energy to the entire body, making them an essential component of a balanced and energizing diet.
          </p>

          <h3>Proteins</h3>
          <p>
          Proteins are macronutrients formed through the polymerization of amino acids, where amino acids are linked together in long chains to create protein molecules. The structure of proteins includes hydrogen, carbon, oxygen, and nitrogen.
          </p>
          <p className={styles.decrip_titles}>Protein in Various Foods:</p>

          <table className={styles.protein_table} style={{width: "100%", borderRadius:"12px"}} >
            <thead>
              <tr>
                <th style={{position: "relative"}}>Food</th>
                <th style={{position: "relative"}}>Portion Size</th>
                <th style={{position: "relative"}}>Protien (g)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Egg</td>
                <td>1</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Fish</td>
                <td>1 oz</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Chicken</td>
                <td>1 oz</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Milk</td>
                <td>8 oz</td>
                <td>8</td>
              </tr>
              <tr className={styles.bottom_tr}>
                <td className={styles.bottom_td_left}>Rice/Pasta</td>
                <td>1/3 cup</td>
                <td className={styles.bottom_td_right}>3</td>
              </tr>
            </tbody>
          </table>
          <p>
          Out of the 20 amino acids, 9 are essential, meaning the body cannot produce them and must obtain them from various sources to meet its protein requirements. These essential amino acids are found in animal meats such as chicken, fish, mutton, and beef, as well as in grains, legumes, and similar food sources.
          </p>
          <p>
          Proteins play a crucial role in the body, constituting about 16-20% of the body's composition, with cells being based on protein material. They serve various essential functions:
          </p>
          <li>Proteins contribute to the growth and maintenance of the body, aiding in the development of muscles and tissues.</li>
         <li>Increased protein intake is recommended during periods of injury or pregnancy to support recovery.</li>
         <li>Proteins act as hormones, including testosterone, insulin, and other vital hormones that facilitate communication between cells throughout the body.</li>
          <li>In the form of enzymes, proteins catalyze biochemical reactions, enhancing the speed of the body's metabolism. These reactions are involved in processes such as digestion, blood clotting, and energy synthesis.</li>
          <li>Proteins contribute to the structural integrity of the body; components like bones, tendons, and ligaments contain proteins.</li>

          <h3>Fats</h3>
          <p>
          Fats consist of lipids containing carbon, hydrogen, and oxygen. These lipids are long-chain polymers of fatty acids, and based on the presence of double bonds, fats can be categorized as saturated or unsaturated.
          </p>
          <p className={styles.decrip_titles}>Fats in Various Foods:</p>
          <table className={styles.fat_table} style={{width: "100%", borderRadius:"12px"}} >
            <thead>
              <tr>
                <th style={{position: "relative"}}>Oil</th>
                <th style={{position: "relative"}}>Mono Saturated (g)</th>
                <th style={{position: "relative"}}>Saturated (g)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Palm Oil</td>
                <td>37</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Sunflower Oil</td>
                <td>20</td>
                <td>10</td>
              </tr>
              <tr>
                <td className={styles.bottom_td_left}>Butter Oil</td>
                <td>26</td>
                <td className={styles.bottom_td_right}>60</td>
              </tr>
            </tbody>
          </table>
          <p>
          Saturated fats are solid at room temperature and are commonly found in foods derived from butter, cheese, and dairy products. Additionally, they are present in certain oils like palm oil and coconut oil.
          </p>
          <p>
          Trans fats are artificially created through the hydrogenation of oils to solidify them. These fats are considered detrimental to health as they raise cholesterol levels.
          </p>
          <p>
          Unsaturated fats are considered healthier for dietary purposes. They remain in a liquid state at room temperature, avoiding the clogging of veins and preventing increases in blood pressure and cholesterol. Examples of unsaturated fats include sunflower oil, canola oil, and olive oil.
          </p>
          <p>
          Fats play essential roles in development and serve as an energy source for the brain. They are also utilized to store fat-soluble vitamins A, E, D, and K in fat tissues. Additionally, fats provide insulation to the body against temperature extremes.
          </p>
          <h2 id="section3">
            What are the advantages of using Tasty Tracks Macro calculator?
          </h2>
          <p className={styles.decrip_titles_btm}>Nutritional Analysis:</p>
          <li className={styles.decrip_titles_li}>
          Utilize our macro calculator to thoroughly analyze your daily nutritional values, energy consumption, and intake. It acts like your account’s bank statement, offering a clear depiction of your nutritional deposits and withdrawals.
          </li>
          <p className={styles.decrip_titles_btm}>Efficient Weight Loss:</p>
          <li className={styles.decrip_titles_li}>
          Achieving faster weight loss becomes more manageable with an online macro calculation tool. The calculator guides you on the required dietary intake to reach your weight goals. Easily track macronutrient requirements, ensuring efficient weight loss while maintaining your activity level.
          </li>
          <p className={styles.decrip_titles_btm}>Comprehensive Diet Planning:</p>
          <li className={styles.decrip_titles_li_bottom}>
          Crafting and adhering to a diet plan can be challenging without a comprehensive strategy. Tasty Tracks Macro Calculator provides precise values for carbs, proteins, fats, and calorie intake. This information empowers you to develop a well-structured diet plan, whether your goal is weight loss or gain. Stay motivated with accurate insights from our macros calculator.
          </li>
        
        </div>
      </div>
      <div
      onClick={scrollToTop}
       className={styles.scroll_to_top} style={{display: "block"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
