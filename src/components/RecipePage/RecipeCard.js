import React from "react";
import styles from "./Recipe.module.css";
import { useState } from "react";
import RecipeModal from "./RecipeModal/RecipeModal";
import RecipeDetails from "./RecipeDetails";


const RecipeCard = ({ recipe }) => {
// console.log(`*****recipe=${recipe.recipe_id}`)
    const [isModalOpen, setModalOpen] = useState(false);
    const [recipeId, setRecipeId] = useState();
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    // const detailDisplay = recipe.map((recipe)=> )
  return (
    <div>
    <button
     onClick={openModal} 
      className={styles.card_container}
    >
      <div>
        <div className={styles.image_container}>
        <img className={styles.image} src={recipe.image_url} />
        </div>
        <div className={styles.recipe_name_type_container}>
        <div className={styles.recipe_name}>{recipe.name}</div>
        <div className={styles.recipe_meal}>{recipe.meal_type}</div>
        </div>
      </div>
      <div className={styles.macros_container}>
        <div className={styles.mac_container}>
          <div className={styles.macro_title} id={styles.macro_title_calories}>
            Calories
          </div>
          <div className={styles.macro_data}>{recipe.calories}</div>
        </div>

        <div className={styles.mac_container}>
          <div className={styles.macro_title} id={styles.macro_title_carbs}>
            Carbs
          </div>
          <div className={styles.macro_data}>{recipe.carbohydrates}</div>
        </div>

        <div className={styles.mac_container}>
          <div className={styles.macro_title} id={styles.macro_title_protein}>
            Protein
          </div>
          <div className={styles.macro_data}>{recipe.protein}</div>
        </div>

        <div className={styles.mac_container}>
          <div className={styles.macro_title} id={styles.macro_title_fat}>
            Fat
          </div>
          <div className={styles.macro_data}>{recipe.fat}</div>
        </div>
      </div>
    </button>
    <RecipeModal isOpen={isModalOpen} closeModal={closeModal}>
        <RecipeDetails recipe={recipe}/>
    </RecipeModal>
    </div>
  );
};

export default RecipeCard;
