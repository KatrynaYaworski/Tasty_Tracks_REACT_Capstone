import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import styles from "./Recipe.module.css";
import Search from "./Search";
import FilterMealTypes from "./FilterMealTypes";
import FilterMacros from "./FilterMacros";
import FilterUserRecipes from "./FilterUserRecipes";
import Modal from "./RecipeModal/RecipeModal"
import AddRecipeForm from "./AddRecipeForm";
import AuthContext from '../../store/authContext'
import Loading from "../Loading/Loading";

const RecipePage = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchMacro, setSearchMacro] = useState("");
  const [userRecipe, setUserRecipe] = useState(null);
  const [direction, setDirection] = useState("ascending");
  const [filter, setFilter] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
console.log(recipes)
  const recipeDisplay = recipes
    .filter((recipe) => {
      let title = recipe.name.toLowerCase();
      let type = recipe.meal_type.toLowerCase();
      let user_id = recipe.user_id;
      let searchRecipeParams = searchRecipe.toLowerCase();
      let searchTypeParams = searchType.toLowerCase();
      if (user_id !== null) {
        recipe.sortWeight = -1;
      } else {
        recipe.sortWeight = 1;
      }
      return (
        title.includes(searchRecipeParams) && type.includes(searchTypeParams) && filter === false ? user_id === userRecipe : type.includes(searchTypeParams) &&  title.includes(searchRecipeParams)
      );
    })
    .sort((a, b) => {
    
      if (direction === "descending") {
        if (searchMacro === "calories") {
          return a.calories - b.calories;
        } else if (searchMacro === "protein") {
          return a.protein - b.protein;
        } else if (searchMacro === "fat") {
          return a.fat - b.fat;
        } else if (searchMacro === "carbs") {
          return a.carbs - b.carbs;
        }
      } else if (direction === "ascending") {
        if (searchMacro === "calories") {
          return b.calories - a.calories;
        } else if (searchMacro === "protein") {
          return b.protein - a.protein;
        } else if (searchMacro === "fat") {
          return b.fat - a.fat;
        } else if (searchMacro === "carbs") {
          return b.carbs - a.carbs;
        }
      }
      if (direction === "descending") {
        if (searchMacro === "calories") {
          return a.calories - b.calories;
        } else if (searchMacro === "protein") {
          return a.protein - b.protein;
        } else if (searchMacro === "fat") {
          return a.fat - b.fat;
        } else if (searchMacro === "carbs") {
          return a.carbs - b.carbs;
        }
      } else if (direction === "ascending") {
        if (searchMacro === "calories") {
          return b.calories - a.calories;
        } else if (searchMacro === "protein") {
          return b.protein - a.protein;
        } else if (searchMacro === "fat") {
          return b.fat - a.fat;
        } else if (searchMacro === "carbs") {
          return b.carbs - a.carbs;
        }
      }

      return a.name.localeCompare(b.name);
    })
    .map((recipe) => {
      return <RecipeCard setRecipes={setRecipes} getRecipes={getRecipes} recipe={recipe} />;
    });
function getRecipes () {
    axios.get(`/recipes/?userId=${state.userId}`).then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  }
  useEffect(() => {
    getRecipes()
  }, [state.userId]);

  return (
    recipes.length ?
    <div>
      <div className={styles.recipes_title_container}>
      <div className={styles.recipes_title}>Recipes</div>
      </div>
      <Search setSearchRecipe={setSearchRecipe} searchRecipe={searchRecipe}/>
      <div className={styles.filters_wrapper}>
        <FilterMealTypes setSearchType={setSearchType} searchType={searchType}/>
        <FilterMacros setSearchMacro={setSearchMacro} searchMacro={searchMacro} direction={direction} setDirection={setDirection}/>     
        {state.token ? <FilterUserRecipes  setFilter={setFilter} filter={filter} userRecipe={userRecipe} setUserRecipe={setUserRecipe}/> : ''}
       {state.token ? <button onClick={openModal} className={styles.addnew_btn}>ADD NEW RECIPE</button> : '' } 
      </div>
      <div className={styles.recipe_container}>{recipeDisplay}</div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <AddRecipeForm getRecipes={getRecipes} isOpen={isModalOpen} closeModal={closeModal}/>
      </Modal>
    </div> :
    <Loading/>
  );
};

export default RecipePage;
