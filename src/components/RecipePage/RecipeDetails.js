import React from "react";
import styles from "./Recipe.module.css";

const RecipeDetails = ({ recipe }) => {
  console.log(recipe)
  return (
    <div className={styles.modal_content}>
      <div id={styles.model_header_outer_container}>
        <span className={styles.meal_title_modal}>{recipe.name}</span>
        <section id={styles.modal_header_container}></section>
      </div>
      <section id={styles.modal_middle_container}>
        <span id={styles.modal_middle_left_container}>
          <img
            className={styles.recipe_detail_image}
            src={recipe.image_url}
          />
          <span className={styles.kcal_container_modal}>
            <i className="fa-brands fa-nutritionix fa-bounce"></i>
            <span className={styles.kcal_data}>{recipe.calories}kcal</span>
          </span>
        </span>
        <span id={styles.modal_middle_right_container}>
          <section id={styles.mmr_heading_container}>
            <h4 className={styles.recipe_details_r_title}>Nutrition Per Serving</h4>
          </section>
          {/* <div id={styles.perServing}><h6>Per serving</h6></div> */}
          <div id={styles.nutrients_container}>
            <div className={styles.nutrients} id={styles.calories_modal_container}>
              <span id={styles.calories_modal_name}>Calories</span>
              <span id={styles.calories_modal}>{recipe.calories}g</span>
            </div>
            <hr />
            <div className={styles.nutrients} id={styles.fat_modal_container}>
              <span id={styles.fat_modal_name}>Fat</span>
              <span id={styles.fat_modal}>{recipe.fat}g</span>
            </div>
            <hr />
            <div className={styles.nutrients} id={styles.carbs_modal_container}>
              <span id={styles.carbs_modal_name}>Carbohydrates</span>
              <span id={styles.carbs_modal}>{recipe.carbs}g</span>
            </div>
            <hr />
            <div className={styles.nutrients} id={styles.protein_modal_container}>
              <span id={styles.protein_modal_name}>Protein</span>
              <span id={styles.protein_modal}>{recipe.protein}g</span>
            </div>
          </div>
        </span>
      </section>

      <div id={styles.modal_bottom_container}>
        <span id={styles.modal_ingredients}>
          Ingredients: {recipe.ingredients}
        </span>
      </div>
      <div id={styles.modal_bottom_container}>
        <span id={styles.modal_ingredients}>
          Instructions: {recipe.instructions}
        </span>
      </div>
    </div>
  );
};

export default RecipeDetails;
