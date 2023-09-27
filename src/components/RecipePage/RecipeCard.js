import React from "react";
import styles from "./Recipe.module.css";
import { useState, useContext } from "react";
import RecipeModal from "./RecipeModal/RecipeModal";
import RecipeDetails from "./RecipeDetails";
import AuthContext from "../../store/authContext";
import axios from "axios";


const RecipeCard = ({ recipe, getRecipes, setRecipes }) => {
  const { state } = useContext(AuthContext);
    const [isModalOpen, setModalOpen] = useState(false);
    // const [recipeId, setRecipeId] = useState();

    const handleDeleteClick = (event) => {
      event.stopPropagation();
      console.log('delete button clicked')
      axios.delete(`/recipes/${state.userId}/${recipe.recipe_id}`).then((res) => {
        console.log(res.data);
        getRecipes()
      });
    }

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

  return (
    <div>
    <button
     onClick={openModal} 
      className={styles.card_container}>
      <div>
        <div className={styles.image_container}>
         

        <img className={styles.image} src={recipe.image_url} />
        </div>
        <div className={styles.recipe_name_type_container}>
        <div className={styles.recipe_name}>{recipe.name}</div>
        <div className={styles.recipe_meal}>{recipe.meal_type}</div>
        </div>
        {recipe.user_id ? <div className={styles.close_button} onClick={handleDeleteClick}> <i className="fa-regular fa-trash-can" style={{color: "#b30000"}}></i> </div> : ''}
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
          <div className={styles.macro_data}>{recipe.carbs}</div>
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
