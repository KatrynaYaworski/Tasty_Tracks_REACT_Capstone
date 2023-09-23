import React, { useState, useContext, useEffect } from "react";
import styles from "./Meals.module.css";
import AuthContext from "../../store/authContext";
import axios from "axios";
import Modal from "../Modal/Modal";
import MealDetails from "./MealDetails";

const dummySelectedDays = [
  {
    breakfast: 1,
    lunch: 2,
    dinner: 3,
    snackOne: 4,
    snackTwo: 5,
  },
  {
    breakfast: 6,
    lunch: 7,
    dinner: 8,
    snackOne: 9,
    snackTwo: 10,
  },
  {
    breakfast: 6,
    lunch: 7,
    dinner: 8,
    snackOne: 9,
    snackTwo: 10,
  },
  {
    breakfast: 6,
    lunch: 7,
    dinner: 8,
    snackOne: 9,
    snackTwo: 10,
  },
  {
    breakfast: 6,
    lunch: 7,
    dinner: 8,
    snackOne: 9,
    snackTwo: 10,
  },
  {
    breakfast: 6,
    lunch: 7,
    dinner: 8,
    snackOne: 9,
    snackTwo: 10,
  },
];

const MealTable = () => {
  const [results, setResults] = useState();
  const [recipes, setRecipes] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedKey, setSelectedKey] = useState();
  const [selectedDays, setSelectedDays] = useState(dummySelectedDays);

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

  useEffect(() => {
    axios.get(`/user-details/${state.userId}`).then((res) => {
      setResults(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/recipes").then((res) => {
      setRecipes(res.data);
    });
  }, []);

  const formatRowData = (arr, accessor, index) =>
    arr.map((key) => (
      <td onClick={()=>openModal(index,key)}>
        {recipes.find((r) => r.recipe_id === selectedDays?.[index]?.[key])?.[
          accessor
        ] || ""}
      </td>
    ));
  //['', '', '', 'breakfast', 'snackOne', 'lunch', 'snackTwo', 'dinner']
  if (recipes && results) {
    return (
      <div>
        <div className={styles.meal_planner_title_container}>
          <div className={styles.meal_planner_title}>Meal Planner</div>
        </div>
        <div className={styles.meal_planner_container}>
          <table className={styles.meal_table}>
            <thead>
              <tr>
                <th id={styles.blank_th}></th>
                {headers.map((e) => (
                  <th>{e}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dayLabels.map((day, i) => (
                <>
                  <tr>
                    <td className={styles.meal_td_day}>{day}</td>
                    {formatRowData(["", "", "", ...mealKeys], "name", i)}
                  </tr>
                  <tr>
                    <td className={styles.meal_td}>Calories</td>
                    <td>{results.calories}</td>
                    {formatRowData(
                      ["", "", ...mealKeys],
                      "calories",
                      i
                    )}
                  </tr>
                  <tr>
                    <td className={styles.meal_td}>Carbs</td>
                    <td>{results.carbs}</td>
                    {formatRowData(
                      ["", "", ...mealKeys],
                      "carbohydrates",
                      i
                      )}
                  </tr>
                  <tr>
                    <td className={styles.meal_td}>Protein</td>
                    <td>{results.protein}</td>
                    {formatRowData(
                      ["", "", ...mealKeys],
                      "protein",
                      i
                      )}
                  </tr>
                  <tr>
                    <td className={styles.meal_td}>Fat</td>
                      <td>{results.fat}</td>
                    {formatRowData(
                      ["", "", ...mealKeys],
                      "fat",
                      i
                    )}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <MealDetails recipes={recipes} selectedDays={selectedDays} setSelectedDays={setSelectedDays} selectedKey={selectedKey} index={selectedIndex} />
        </Modal>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default MealTable;
