import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import styles from "./Recipe.module.css";
import Search from "./Search";
import FilterMealTypes from "./FilterMealTypes";
import FilterMacros from "./FilterMacros";

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchMacro, setSearchMacro] = useState("");
  const [direction, setDirection] = useState("ascending");

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const recipeDisplay = recipes
    .filter((recipe) => {
      let title = recipe.name.toLowerCase();
      let type = recipe.meal_type.toLowerCase();
      let searchRecipeParams = searchRecipe.toLowerCase();
      let searchTypeParams = searchType.toLowerCase();
      return (
        title.includes(searchRecipeParams) && type.includes(searchTypeParams)
      );
    })
    .sort((a, b) => {
      if (direction === "descending") {
        a[searchMacro] - b[searchMacro]
      } else if (direction === "ascending") {
        b[searchMacro] - a[searchMacro]
      }
    })
    .map((recipe) => {
      return <RecipeCard recipe={recipe} />;
    });

  useEffect(() => {
    axios.get("/recipes").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <div className={styles.recipes_title_container}>
      <div className={styles.recipes_title}>Recipes</div>
      </div>
      <Search setSearchRecipe={setSearchRecipe} searchRecipe={searchRecipe}/>
      <div className={styles.filters_wrapper}>
        <FilterMealTypes setSearchType={setSearchType} searchType={searchType}/>
        <FilterMacros setSearchMacro={setSearchMacro} searchMacro={searchMacro} direction={direction} setDirection={setDirection}/>     
        <button className={styles.addnew_btn}>ADD NEW RECIPE</button>   
      </div>
      <div className={styles.recipe_container}>{recipeDisplay}</div>
    </div>
  );
};

export default RecipePage;
