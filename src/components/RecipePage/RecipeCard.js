import React from "react";
import styles from "./Recipe.module.css";


const RecipeCard = ({ recipe }) => {
  return (
    <button
      className={styles.card_container}
    >
      <div>
        <div className={styles.image_container}>
        <img className={styles.image} src={recipe.image_url} />
        </div>
        <div className={styles.recipe_name}>{recipe.name}</div>
        <div className={styles.recipe_meal}>{recipe.meal_type}</div>
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
  );
};

export default RecipeCard;
