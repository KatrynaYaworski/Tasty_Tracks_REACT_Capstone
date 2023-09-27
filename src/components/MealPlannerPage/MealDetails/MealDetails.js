import React, { useState, useEffect, useContext } from "react";
import styles from "./MealDetails.module.css";
import Search from "../../RecipePage/Search";
import FilterMacros from "../../RecipePage/FilterMacros";
import AuthContext from "../../../store/authContext";
import axios from "axios";

const MealDetails = ({
  selectedKey,
  index,
  setSelectedDays,
  selectedDays,
  recipes,
  totalsRef
}) => {
  const headers = [
    "calories",
    "carbs",
    "protein",
    "fat",
  ];
  const { state, dispatch } = useContext(AuthContext);
  
  const onClickSelected = (recipeId) => {
    const selectedDaysCopy = [...selectedDays];
    selectedDaysCopy[index][selectedKey] = recipeId;
    setSelectedDays(selectedDaysCopy);
    console.log({selectedDays})

   const body = {
      user_id: state.userId,
      selections: selectedDays
    }

    axios.post("/usermeals", body)
  };

  const [searchRecipe, setSearchRecipe] = useState("");
  const [searchType, setSearchType] = useState(selectedKey);
  const [searchMacro, setSearchMacro] = useState("");
  const [direction, setDirection] = useState("ascending");
  
  useEffect(() => {
    if (selectedKey.includes("snack")) {
      setSearchType("snack");
    }
  }, []);
  console.log(totalsRef.current[index])
  return (
    <div className={styles.meal_details_wrapper}>
      <Search setSearchRecipe={setSearchRecipe} searchRecipe={searchRecipe} />
      <FilterMacros
        setSearchMacro={setSearchMacro}
        searchMacro={searchMacro}
        direction={direction}
        setDirection={setDirection}
      />
    <table className={styles.meal_table}>
    <thead>
        <tr>
            <th className={styles.meal_td_day}>Day PH</th>
            <th>Total</th>
            <th>% of Total</th>
        </tr>
        </thead>
        <tbody>
            {/* {headers.map((e)=>{
                <tr>
                    <td>{e}</td>
                    <td>{totalsRef.current[index].e.total}</td>
                <td>{totalsRef.current[index].e.totalPercent}%</td>
                </tr>
            })} */}
            <tr>
                <td>Calories</td>
                <td>{totalsRef.current[index].calories.total}</td>
                <td>{totalsRef.current[index].calories.totalPercent}%</td>
            </tr>
            <tr>
                <td>Carbs</td>
                <td>{totalsRef.current[index].carbs.total}</td>
                <td>{totalsRef.current[index].carbs.totalPercent}%</td>
            </tr>
            <tr>
                <td>Protein</td>
                <td>{totalsRef.current[index].protein.total}</td>
                <td>{totalsRef.current[index].protein.totalPercent}%</td>
            </tr>
            <tr>
                <td>Fat</td>
                <td>{totalsRef.current[index].fat.total}</td>
                <td>{totalsRef.current[index].fat.totalPercent}%</td>
            </tr>
        </tbody>
    </table>

<div className={styles.table_container}>
      <table className={styles.meal_table}>
        <thead>
          <tr>
            <th className={styles.meal_td_day_sticky}>{searchType}</th>
            {headers.map((e) => (
              <th className={styles.meal_td_header_sticky}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recipes
            .filter((recipe) => {
              let title = recipe.name.toLowerCase();
              let type = recipe.meal_type.toLowerCase();
              let searchRecipeParams = searchRecipe.toLowerCase();

              return (
                title.includes(searchRecipeParams) && type.includes(searchType)
              );
            })
            .sort((a, b) => {
              if (direction === "descending") {
                return a[searchMacro] - b[searchMacro];
              }
              return b[searchMacro] - a[searchMacro];
            })
            .map((r) => (
              <tr>
                <td className={styles.meal_td} onClick={() => onClickSelected(r.recipe_id)}>{r.name}</td>
                <td>{r.calories}</td>
                <td>{r.carbs}</td>
                <td>{r.protein}</td>
                <td>{r.fat}</td>
              </tr>
              
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MealDetails;
