import React, { useState, useEffect } from "react";
import styles from "./Meals.module.css";
import Search from "../RecipePage/Search";
import FilterMacros from "../RecipePage/FilterMacros";

const MealDetails = ({
  selectedKey,
  index,
  setSelectedDays,
  selectedDays,
  recipes,
  totalsRef
}) => {
  const headers = [
    "Calories",
    "Carbs",
    "Protein",
    "Fat",
  ];
  const onClickSelected = (recipeId) => {
    const selectedDaysCopy = [...selectedDays];
    selectedDaysCopy[index][selectedKey] = recipeId;
    setSelectedDays(selectedDaysCopy);
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
            <th id={styles.blank_th}>{searchType}</th>
            {headers.map((e) => (
              <th>{e}</th>
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
                <td onClick={() => onClickSelected(r.recipe_id)}>{r.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealDetails;
