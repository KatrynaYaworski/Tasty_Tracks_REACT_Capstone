import React from "react";
import { useState, useContext } from "react";
import WizardStepOne from "./WizardStepOne";
import WizardStepTwo from "./WizardStepTwo";
import WizardResults from "./WizardResults";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import styles from "./Wizard.module.css";
import AuthContext from "../../store/authContext";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const WizardContainer = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');

  const [gender, setGender] = useState("Female");
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");

  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState(0);
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("fat loss");

  const [calories, setCalories] = useState();
  const [carbs, setCarbs] = useState();
  const [fat, setFat] = useState();
  const [protein, setProtein] = useState();

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  console.log(
    `gender=${gender} 
    age=${age} 
    activityLevel=${activityLevel} 
    feet=${feet} 
    inches=${inches} 
    weight=${weight} 
    goal=${goal}`
  );

  const onStepTwo = currentStep === 2;
  const onStepThree = currentStep === 3;

  const height = Number(feet) * 12 + Number(inches);
  const goToNextStep = () => {
    if (currentStep < 3) {
      if (currentStep === 1 && gender && age && activityLevel) {
        setCurrentStep(currentStep + 1);
        setError('')
      } else if (currentStep === 2 && feet && goal && weight) {
        setCurrentStep(currentStep + 1);
        const bmrTotal =
          gender === "Male"
            ? 66 + 6.23 * Number(weight) + 12.7 * height - 6.8 * Number(age)
            : gender === "Female"
            ? 66 + 6.23 * Number(weight) + 12.7 * height - 6.8 * Number(age)
            : 0;

        // For Men: BMR = 66 + (6.23 x weight in pounds) + (12.7 x height in inches) - (6.8 x age in years)
        // For Women: BMR = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years)

        const tdeeTotal =
          activityLevel === "sedentary"
            ? bmrTotal * 1.2
            : activityLevel === "lightly active"
            ? bmrTotal * 1.375
            : activityLevel === "moderately active"
            ? bmrTotal * 1.55
            : activityLevel === "very active"
            ? bmrTotal * 1.725
            : 0;
        // Sedentary (little to no exercise): BMR x 1.2
        // Lightly active (light exercise or sports 1-3 days a week): BMR x 1.375
        // Moderately active (moderate exercise or sports 3-5 days a week): BMR x 1.55
        // Very active (hard exercise or sports 6-7 days a week): BMR x 1.725

        const caloriesTotal =
          goal === "fat loss"
            ? tdeeTotal - 500
            : goal === "muscle gain"
            ? tdeeTotal + 350
            : tdeeTotal;
        // To lose weight: Subtract 500 to 1000 calories from your TDEE per day for a safe and sustainable weight loss of 1 to 2 pounds per week (1 pound ≈ 3500 calories). Your adjusted calorie intake should not go below 1500 calories for men or 1200 calories for women, unless supervised by a healthcare professional.
        // To maintain your current weight: Keep your calorie intake equal to your TDEE.
        // To gain weight: Add 250 to 500 calories to your TDEE per day for a gradual and healthy weight gain.
        // fat Loss
        // maintain
        // muscle gain
        // console.log({ bmrTotal, tdeeTotal, caloriesTotal });
        const proteinTotal =
          goal === "fat loss"
            ? (caloriesTotal * 0.3) / 4
            : goal === "muscle gain"
            ? (caloriesTotal * 0.34) / 4
            : goal === "maintain"
            ? (caloriesTotal * 0.25) / 4
            : 0;
        const fatTotal =
          goal === "fat loss"
            ? (caloriesTotal * 0.25) / 9
            : goal === "muscle gain"
            ? (caloriesTotal * 0.25) / 9
            : goal === "maintain"
            ? (caloriesTotal * 0.3) / 9
            : 0;
        const carbTotal =
          goal === "fat loss"
            ? (caloriesTotal * 0.25 + caloriesTotal * 0.3) / 4
            : goal === "muscle gain"
            ? (caloriesTotal * 0.25 + caloriesTotal * 0.34) / 4
            : goal === "maintain"
            ? (caloriesTotal * 0.3 + caloriesTotal * 0.25) / 4
            : 0;
        // Maintenance:
        // Protein: 25% of total daily calories
        // Fat: 30% of total daily calories
        // Carbohydrates: 50% of total daily calories

        // Weight Loss (Calorie Deficit):
        // Protein: 30% of total daily calories
        // Fat: 25% of total daily calories
        // Carbohydrates: 45% of total daily calories

        // Muscle Gain (Calorie Surplus):
        // Protein: 30% of total daily calories (or even higher)
        // Fat: 25% of total daily calories
        // Carbohydrates: 50% of total daily calories
        setCalories(Math.floor(caloriesTotal));
        setCarbs(Math.floor(carbTotal));
        setProtein(Math.floor(proteinTotal));
        setFat(Math.floor(fatTotal));
        setError('')
      }
      else{
        setError('Please enter all fields')
      }
    }
  };

  const stepBack = () => {
    if (currentStep === 3) {
      setCurrentStep(1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  
  const postResults = () => {
    let body = {
      user_id: state.userId,
      goal: goal,
      activity: activityLevel,
      weight: weight,
      age: age,
      gender: gender,
      height: height,
      carbs: carbs,
      calories: calories,
      fat: fat,
      protein: protein,
    };
    if(onStepThree && state.token){
      console.log({body})
    axios.post("/user-details", body, {
      headers: {
          authorization: state.token
      }
  }).then((res) => {
     
      navigate('/Meal Planner')
    }).catch(err => setError('Invalid entry'));
    } else if(onStepThree){
      openModal()
    }    
    else {
      goToNextStep()
    }
  };
            

  return (
    <div className={styles.wizard_container}>
      {onStepThree ? (
        <WizardResults
          calories={calories}
          carbs={carbs}
          fat={fat}
          protein={protein}
          currentStep={currentStep}
          error={error}
        />
      ) : onStepTwo ? (
        <WizardStepTwo
          goal={goal}
          setGoal={setGoal}
          weight={weight}
          setWeight={setWeight}
          feet={feet}
          setFeet={setFeet}
          inches={inches}
          setInches={setInches}
          currentStep={currentStep}
          error={error}
        />
      ) : (
        <WizardStepOne
          setGender={setGender}
          gender={gender}
          setAge={setAge}
          age={age}
          setActivityLevel={setActivityLevel}
          activityLevel={activityLevel}
          currentStep={currentStep}
          error={error}
        />
      )}

      <div className={styles.wizard_btn_container}>
        {onStepThree ? (
          <button className={styles.previous_btn} onClick={stepBack}>
            {onStepThree ? "Recalculate" : "Previous"}
          </button>
        ) : onStepTwo ? (
          <button className={styles.previous_btn} onClick={stepBack}>
            {onStepThree ? "Recalculate" : "Previous"}
          </button>
        ) : (
          ""
        )}
        <button className={styles.next_btn} onClick={postResults}>
          {onStepThree ? "Save Results" : onStepTwo ? "Calculate" : "Next"}
        </button>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <Login isOpen={isModalOpen} closeModal={closeModal}/>
        </Modal>
    </div>
  );
};

export default WizardContainer;
