import React, { useState, useEffect, useContext } from "react";
import styles from "./MealDetails.module.css";
import Search from "../../RecipePage/Search";
import FilterMacros from "../../RecipePage/FilterMacros";
import FilterUserRecipes from "../../RecipePage/FilterUserRecipes";
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
    const objectCopy = {...selectedDaysCopy[index]}
    objectCopy[selectedKey] = recipeId;
    selectedDaysCopy[index] = objectCopy
    setSelectedDays(selectedDaysCopy);
    setClearSelected(false)
   const body = {
      user_id: state.userId,
      selections: selectedDaysCopy
    }

    axios.post("/usermeals", body, {
      headers: {
          authorization: state.token
      }
  })
  };
  const days = ['Monday' , 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [searchRecipe, setSearchRecipe] = useState("");
  const [searchType, setSearchType] = useState(selectedKey);
  const [searchMacro, setSearchMacro] = useState("");
  const [direction, setDirection] = useState("ascending");
  const [userRecipe, setUserRecipe] = useState(null);
  const [filter, setFilter] = useState(false);
  const [clearSelected, setClearSelected] = useState(false);
  
  useEffect(() => {
    if (selectedKey.includes("snack")) {
      setSearchType("snack");
    }
  }, []);
  console.log(totalsRef.current[index])
  const isVarianceOff = totalsRef.current[index];
  const isVarianceOffCalories = isVarianceOff.calories.totalPercent <85 && isVarianceOff.calories.totalPercent > 0 || isVarianceOff.calories.totalPercent > 110
  const isVarianceOffCarbs = isVarianceOff.carbs.totalPercent <85 && isVarianceOff.carbs.totalPercent > 0 || isVarianceOff.carbs.totalPercent > 110
  const isVarianceOffProtein = isVarianceOff.protein.totalPercent <85 && isVarianceOff.protein.totalPercent > 0 || isVarianceOff.protein.totalPercent > 110
  const isVarianceOffFat = isVarianceOff.fat.totalPercent <85 && isVarianceOff.fat.totalPercent > 0 || isVarianceOff.fat.totalPercent > 110
  
  return (
    <div className={styles.meal_details_wrapper}>
      <Search setSearchRecipe={setSearchRecipe} searchRecipe={searchRecipe} />
      <div className={styles.filter_details_container}> 
      <FilterMacros
        setSearchMacro={setSearchMacro}
        searchMacro={searchMacro}
        direction={direction}
        setDirection={setDirection}
      />
        <FilterUserRecipes setFilter={setFilter} filter={filter} userRecipe={userRecipe} setUserRecipe={setUserRecipe}/>
        <button className={styles.clear_btn} onClick={()=>{
          setClearSelected(true)
          onClickSelected('')
        }
        }>Clear</button>
        </div>
    <table className={styles.meal_table_top}>
    <thead>
        <tr>
            <th className={styles.meal_td_day} style={{backgroundColor: "#3A8686", color: "white"}}>{days[index]}</th>
            <th>Total</th>
            <th>% of Total</th>
            
        </tr>
        </thead>
        <tbody>
            <tr>
                <td id={styles.td} >Calories</td>
                <td id={styles.td} >{totalsRef.current[index].calories.total}</td>
                <td id={styles.td}  style={{color: isVarianceOffCalories ? '#ce0000df' : '', fontWeight: isVarianceOffCalories ? "bold" : ''}}>{totalsRef.current[index].calories.totalPercent}%</td>
            </tr>
            <tr>
                <td id={styles.td} >Carbs</td>
                <td id={styles.td} >{totalsRef.current[index].carbs.total}</td>
                <td id={styles.td}  style={{color: isVarianceOffCarbs ? '#ce0000df' : '', fontWeight: isVarianceOffCarbs ? "bold" : ''}}>{totalsRef.current[index].carbs.totalPercent}%</td>
            </tr>
            <tr>
                <td id={styles.td} >Protein</td>
                <td id={styles.td} >{totalsRef.current[index].protein.total}</td>
                <td id={styles.td}  style={{color: isVarianceOffProtein ? '#ce0000df' : '', fontWeight: isVarianceOffProtein ? "bold" : ''}}>{totalsRef.current[index].protein.totalPercent}%</td>
            </tr>
            <tr>
                <td id={styles.td}>Fat</td>
                <td id={styles.td}>{totalsRef.current[index].fat.total}</td>
                <td id={styles.td} style={{color: isVarianceOffFat ? '#ce0000df' : '', fontWeight: isVarianceOffFat ? "bold" : ''}}>{totalsRef.current[index].fat.totalPercent}%</td>
            </tr>
        </tbody>
    </table>

<div className={styles.table_container}>
      <table className={styles.meal_table}>
        <thead>
          <tr>
            <th style={{backgroundColor: "#3A8686", color: "white"}} className={styles.meal_td_day_sticky}>{searchType.charAt(0).toUpperCase() + searchType.slice(1)}</th>
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
              let user_id = recipe.user_id;

              return (
                title.includes(searchRecipeParams) && type.includes(searchType) && filter === false ? user_id === userRecipe : type.includes(searchType) && title.includes(searchRecipeParams)
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
                <td id={styles.td} className={styles.meal_td} style={{cursor: 'pointer'}} onClick={() => onClickSelected(r.recipe_id)}>{r.name}</td>
                <td id={styles.td}>{r.calories}</td>
                <td id={styles.td}>{r.carbs}</td>
                <td id={styles.td}>{r.protein}</td>
                <td id={styles.td}>{r.fat}</td>
              </tr>
              
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MealDetails;
