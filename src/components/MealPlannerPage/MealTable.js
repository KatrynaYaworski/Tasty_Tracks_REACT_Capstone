import React, { useState, useContext, useEffect, useRef } from "react";
import styles from "./Meals.module.css";
import AuthContext from "../../store/authContext";
import axios from "axios";
import Modal from "../Modal/Modal";
import MealDetails from "../MealPlannerPage/MealDetails/MealDetails";
import Loading from "../Loading/Loading";
import LoginMessage from "../Modal/LoginMessage/LoginMessage";
import Login from "../Login/Login";

const dummySelectedDays = [
  {
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    snackOne: 0,
    snackTwo: 0,
  },
  {
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    snackOne: 0,
    snackTwo: 0,
  },
  {
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    snackOne: 0,
    snackTwo: 0,
  },
  {
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    snackOne: 0,
    snackTwo: 0,
  },
    {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
      snackOne: 0,
      snackTwo: 0,
    },
    {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
      snackOne: 0,
      snackTwo: 0,
    }, 
    {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
      snackOne: 0,
      snackTwo: 0,
    },
];

const MealTable = () => {
  const [results, setResults] = useState();
  const [recipes, setRecipes] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLogInMessageModalOpen, setLogInMessageModalOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedKey, setSelectedKey] = useState();
  const [selectedDays, setSelectedDays] = useState(dummySelectedDays);
  const [authError, setAuthError] = useState(false);
  const totalsRef = useRef({});

  const openLogInMessageModal = () => {
    setLogInMessageModalOpen(true);
  };

  const closeLogInMessageModal = () => {
    setLogInMessageModalOpen(false);
  };

  const openModal = (index, key) => {
    setSelectedKey(key);
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const { state, dispatch } = useContext(AuthContext);
  const headers = [
    "Macros",
    "Total",
    "% Total",
    "Breakfast",
    "Snack",
    "Lunch",
    "Snack",
    "Dinner",
  ];
  const mealKeys = ["breakfast", "snackOne", "lunch", "snackTwo", "dinner"];
  const dayLabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function setAuthenticationError(){
      setAuthError(true)
  };

  useEffect(()=>{
    if(state.userId){
      axios.get(`/usermeals/${state.userId}`, {
        headers: {
            authorization: state.token
        }
    }).then((res)=>{
        setSelectedDays(res.data)
        console.log(res.data)
    }).catch(setAuthenticationError)
    }
  },[state.userId])

  useEffect(() => {
    axios.get(`/user-details/${state.userId}`, {
      headers: {
          authorization: state.token
      }
  }).then((res) => {
      setResults(res.data);
    }).catch(setAuthenticationError)
  }, []);

  useEffect(() => {
    axios.get(`/recipes?userId=${state.userId}`, {
      headers: {
          authorization: state.token
      }
  }).then((res) => {
      setRecipes(res.data);
    }).catch(setAuthenticationError)
  }, []);

  const formatRowData = (arr, accessor, index) => {
    let total = 0;

    const getValue = (accessor, i, key) => {
      const value =
        recipes.find((r) => r.recipe_id === selectedDays?.[index]?.[key])?.[
          accessor
        ] || "";
      if (i < 5) {
        if (value) {
          total += value;
        }
        return value;
      } else if (i === 5 && accessor !== "name") {
        const totalPercent = Math.trunc((total / results[accessor]) * 100);
        if (!totalsRef.current[index]) {
          totalsRef.current[index] = {};
        }
        if (!totalsRef.current[index][accessor]) {
          totalsRef.current[index][accessor] = {};
        }
        totalsRef.current[index][accessor].total = total;
        totalsRef.current[index][accessor].totalPercent = totalPercent;
        const isVarianceOff = totalPercent <85 && totalPercent > 0 || totalPercent > 110;
        return <span style={{color: isVarianceOff ? '#ce0000df' : 'none', fontWeight: isVarianceOff ? "bold" : 'none'}}>{totalPercent}%</span> 
      } else if (i === 6 && accessor !== "name") {
        return total;
      } else {
        return results[accessor] || "";
      }
    };

    return arr
      .reverse()
      .map((key, i) => {
        return (
          <td id={styles.td} style={{cursor: i < 5 ? 'pointer' : ''}} className={ i < 5 ? styles.cells : styles.total_cells} 
          onClick={() =>{ 
            if(i<5){
            openModal(index, key)}}}>
            {getValue(accessor, i, key)}
          </td>
        );
      })
      .reverse();
  };
  //['', '', '', 'breakfast', 'snackOne', 'lunch', 'snackTwo', 'dinner']
  if(authError){
    return(
        <LoginMessage><Login/></LoginMessage>
    )
  }
  else if (recipes && results) {
    return (
      <div>
        <div className={styles.meal_planner_title_container}>
          <div className={styles.meal_planner_title}>Meal Planner</div>
        </div>
        <div className={styles.meal_planner_container}>
          <table className={styles.meal_table}>
            <thead>
              <tr>
                <th id={styles.blank_th} style={{backgroundColor: "#F2F7FA"}}></th>
                {headers.map((e) => (
                  <th>{e}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dayLabels.map((day, i) => (
                <>
                  <tr>
                    <td  className={styles.meal_td_day}>{day}</td>
                    {formatRowData(["", "", "", ...mealKeys], "name", i)}
                  </tr>
                  <tr>
                    <td className={styles.meal_td}>Calories</td>
                    {formatRowData(["", "", "", ...mealKeys], "calories", i)}
                  </tr>
                  <tr>
                    <td  className={styles.meal_td}>Carbs</td>
                    <td id={styles.td} >{results.carbs}</td>
                    {formatRowData(["", "", ...mealKeys], "carbs", i)}
                  </tr>
                  <tr>
                    <td  className={styles.meal_td}>Protein</td>
                    <td id={styles.td} >{results.protein}</td>
                    {formatRowData(["", "", ...mealKeys], "protein", i)}
                  </tr>
                  <tr>
                    <td className={styles.meal_td}>Fat</td>
                    <td id={styles.td} >{results.fat}</td>
                    {formatRowData(["", "", ...mealKeys], "fat", i)}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <MealDetails
            totalsRef={totalsRef}
            headers={headers}
            recipes={recipes}
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
            selectedKey={selectedKey}
            index={selectedIndex}
          />
        </Modal>
        
      </div>
    );
  } else {
    return (<div>
      <Loading/>
    </div>)
  }
};

export default MealTable;
