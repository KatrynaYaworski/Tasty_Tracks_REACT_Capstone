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
            <li>How to use macro calculator to calculate your macro?</li>
            <li>What are Macros (IIFYM) or Macronutrients??</li>
            <li>What are the advantages of using our macro calculator?</li>
          </ul>
        </div>
      </div>
      <div className={styles.faq_container}>
        <div className={styles.faq_inner_container}>
          <p>
            Our free macro calculator is an online customized tool that
            calculates your nutrients intake and provides you real-time diet
            plans.
          </p>
          <p>
            It is a complete package that takes care of your health and dietary
            issues.
          </p>
          <h2>How to use macro calculator to calculate your macros?</h2>
          <p>
            Our tool is highly customized and user-oriented. Its mode of
            operation is very simple and easy.
          </p>
          <p>
            This tool contains three steps, and after completion of these steps,
            it provides you the results in an instant.
          </p>
          <h4 className={styles.faq_steps}>Step 1</h4>
          <p>Select your gender, activity level and enter your age.</p>
          <h4 className={styles.faq_steps}>Step 1</h4>
          <p>
            Enter the measurements of your weight and height and select your
            goal.
          </p>
          <h4 className={styles.faq_steps}>Step 1</h4>
          <p>
            Click "Calculate" to get the whole plan that includes per day values
            of your macros and calories
          </p>

          <h2>What are Macros (IIFYM) or Macronutrients?</h2>
          <p>
            Macros are the major biochemical compounds that you take into your
            diet. Your diet is majorly composed of these nutrients as they are
            the most essential ones in a whole lot of compounds.
          </p>
          <p>
            Our physical body needs a regular diet to sustain and nourish, and
            these nutrients are present in food to cope with the needs of energy
            and maintenance of the body.
          </p>
          <p>
            Hence, you cannot remain healthy and sound without proper intake of
            these food components. Therefore, a balanced approach to a proper
            diet plan is necessary for your well-being.
          </p>
          <p>These macros are carbohydrates, proteins, and fats.</p>
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
            Carbohydrates are macromolecules formed by the combination of
            carbon, hydrogen, and oxygen. They are extensively taken by us for
            the proper functioning of the mind and body.
          </p>
          <p>Carbs in a Selection of Foods:</p>
          <table>
            <thead>
              <tr>
                <th>Food</th>
                <th>Carbs per (g)</th>
                <th>Carbs per 100g</th>
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
                <td>Sugar (10oz)</td>
                <td>25</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>

          <p>
            Carbohydrates are abundantly found in fruits, vegetables, milk,
            honey, sugary juices, etc. We use carbohydrates as the main energy
            source owing to their benefits to different parts of the body.
          </p>
          <p>
            Carbs provide energy to your whole system as in the case of cellular
            respiration, the energy ATP is utilized by the body in this
            phenomenon, as glucose which is essentially a carbohydrate is used
            to produce ATP.
          </p>
          <p>
            A reasonable number of fibers intake, soluble or insoluble makes
            your bowel function properly. Moreover, studies show that these
            fibers also prevent digestive tract diseases.
          </p>
          <p>Furthermore, carbs provide instant energy to your whole body.</p>

          <h3>Proteins</h3>
          <p>
            These are the macronutrients formed by the polymerization of amino
            acids. It means amino acids are joined together in the form of long
            chains to form a protein molecule. They contain hydrogen, carbon,
            oxygen, and nitrogen in the structure.
          </p>
          <p>Protein in a Selection of Foods:</p>

          <table>
            <thead>
              <tr>
                <th>Food</th>
                <th>Protein Size</th>
                <th>Protein Quanity</th>
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
              <tr>
                <td>Rice/Pasta</td>
                <td>1/3 cup</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <p>
            Out of 20 amino acids, 9 are essential that cannot be produced by
            your body, and you have to take them from different sources to meet
            up the body’s protein needs. These amino acids are found in animal
            meat such as chicken, fish, mutton, and beef as well as grains,
            legumes, and species of their class.
          </p>
          <p>
            The function and importance of protein cannot be denied due to the
            fact that our body is composed of 16-20% proteins and cells are
            based on protein material. However, there are several specific
            functions of proteins
          </p>
          <p>
            They help in the growth and maintenance of the body, in building
            muscles and tissues. Moreover, there Are a variety of different uses
            of proteins. In case of injury or pregnancy, you should increase
            your protein intake to recover from illness.
          </p>
          <p>
            Besides, proteins also act as hormones such as testosterone,
            insulin, and other important hormones that are necessary for the
            messaging between cells across the body.
          </p>
          <p>
            Proteins also catalyze the biochemical reactions in the body. In the
            form of enzymes, they combine with other compounds to increase the
            speed of your body’s metabolism.
          </p>
          <p>
            These reactions are related to digestion, blood clotting, and energy
            synthesis. Proteins also maintain the structure of your body such as
            bones, tendons, and ligaments contain proteins.
          </p>

          <h3>Fats</h3>
          <p>
            Fats are made up of lipids, containing carbon, hydrogen, and oxygen.
            These lipids are long-chain polymers of fatty acids. They can be
            saturated or unsaturated, depending upon the presence of double
            bonds in their structures.
          </p>
          <p>Fats in a Selection of Foods:</p>
          <table>
            <thead>
              <tr>
                <th>Oil</th>
                <th>Mono Saturated</th>
                <th>Saturated</th>
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
                <td>Butter Oil</td>
                <td>26</td>
                <td>60</td>
              </tr>
            </tbody>
          </table>
          <p>
            Saturated fats are solid at room temperature and found in foods
            obtained from butter, cheese, and dairy products. In addition, these
            fats are also found in some oils like palm oil, coconut oil, etc.
          </p>
          <p>
            Trans fats are formed by the artificial hydrogenation of oils to
            solidify them. These fats are not good for health as they increase
            cholesterol levels.
          </p>
          <p>
            Unsaturated fats are best for dietary use, as they remain in a
            liquid state at room temperature. That’s why they do not clog the
            veins and do not increase blood pressure and cholesterol. They
            include sunflower oil, canola oil, olive oil, etc.
          </p>
          <p>
            Fats are essential for development, and as an energy source for the
            brain. They are used to store vitamins A, E, D, and K in the fat
            tissues. Besides, it provides insulation to your body from heat or
            cold.
          </p>
          <h2>
            What are the advantages of using Tasty Tracks Macro calculator?
          </h2>
          <li>Analyze your nutritional factors</li>
          <p>
            With the help of our macro calculator, you can analyze your daily
            nutritional values, your energy consumption, and your energy intake.
          </p>
          <p>
            It is more like your account’s bank statement that describes your
            cash deposit and withdrawal, similarly, with a macronutrient
            calculator you can keep track of your nutrition factors.
          </p>
          <li>Lose weight faster</li>
          <p>
            Losing weight faster is relatively easy when utilizing an online
            tool for macro calculation. This is because the calculator will help
            you know how much diet you should have to reach your goal. You can
            easily follow-up on the Macronutrients' requirements to intake and
            lose the weight with the same activity level.
          </p>
          <li>Create a comprehensive diet plan</li>
          <p>
            Very often, people lose motivation while sticking to a diet plan
            because they do not work out a comprehensive strategy to get started
            with.
          </p>
          <p>
            Nevertheless, our macro calculator helps you to get real values of
            carbs, proteins, fats, and calorie intake that ultimately helps you
            to develop a diet plan as you can use our macros calculator for
            weight loss or gain.
          </p>
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
