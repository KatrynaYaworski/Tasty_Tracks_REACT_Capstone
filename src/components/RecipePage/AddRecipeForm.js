import React, { useState, useContext } from "react";
import { Formik } from "formik";
import styles from "./Recipe.module.css";
import axios from "axios";
import AuthContext from "../../store/authContext";
import image from "../../images/default food image.png";

const AddRecipeForm = ({ closeModal, getRecipes }) => {
  const { state, dispatch } = useContext(AuthContext);
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  //Meal ID 1 = Breakfast
  //Meal ID 2 = Main Recipes
  //Meal ID 3 = Snacks
  const initialValues = {
    name: "",
    instructions: "Enjoy! 😋",
    ingredients: [],
    calories: "",
    carbs: "",
    fat: "",
    protein: "",
    image_url: "",
    userId: state.userId,
    meal_type: 1,
  };

  const onSubmit = (values) => {
    if (
      values.calories === "" ||
      values.carbs === "" ||
      values.fat === "" ||
      values.protein === "" ||
      values.name === ""
    ) {
      setError('Please enter a value for all fields*')
    }else{
    values.ingredients = ingredients;
    if (values.image_url === "") {
      values.image_url = image;
    }
    console.log(values);
    axios.post(`/recipes`, values, {
      headers: {
          authorization: state.token
      }
  }).then((res) => {
      closeModal();
      getRecipes();
      console.log(res.data);
    });
  }
  };

  const addIngredient = () => {
    const newIngredient = { name, quantity };
    if (name !== "") {
      setIngredients([...ingredients, newIngredient]);
      setName("");
      setQuantity("");
    }
  };

  const formReturn = (formData) => {
    const { values, handleChange, handleSubmit } = formData;
    return (
      <form
        className={styles.add_recipe_container}
        onSubmit={handleSubmit}
        action=""
      >
        <section className={styles.name_image_container}>
          <input
            className={styles.inputs}
            value={values.name}
            onChange={handleChange}
            name="name"
            placeholder="Recipe Name"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.image_url}
            onChange={handleChange}
            name="image_url"
            placeholder="Image URL"
            type="text"
          />
        </section>
        <section className={styles.radio_btns_container}>
          <span className={styles.ind_radio_btn_container}>
            <input
              name="meal_type"
              value={"1"}
              onChange={handleChange}
              id="breakfast"
              type="radio"
            />{" "}
            <label htmlFor="breakfast">Breakfast</label>
          </span>
          <span className={styles.ind_radio_btn_container}>
            <input
              name="meal_type"
              value={"2"}
              onChange={handleChange}
              id="lunch-dinner"
              type="radio"
            />{" "}
            <label htmlFor="lunch-dinner">Lunch / Dinner</label>
          </span>
          <span className={styles.ind_radio_btn_container}>
            <input
              name="meal_type"
              value={"3"}
              onChange={handleChange}
              id="snack"
              type="radio"
            />{" "}
            <label htmlFor="snack">Snack / Extra</label>
          </span>
        </section>
        <section className={styles.type_container}>
          <input
            className={styles.inputs}
            value={values.calories}
            onChange={handleChange}
            name="calories"
            placeholder="Calories"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.fat}
            onChange={handleChange}
            name="fat"
            placeholder="Fat"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.carbs}
            onChange={handleChange}
            name="carbs"
            placeholder="Carbs"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.protein}
            onChange={handleChange}
            name="protein"
            placeholder="Protein"
            type="text"
          />
        </section>
        <section className={styles.ing_quant_container}>
          <section className={styles.ing_quant_container_left}>
            <input
              value={name}
              className={styles.inputs}
              placeholder="Ingredient"
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <input
              value={quantity}
              className={styles.inputs}
              placeholder="Quantity"
              onChange={(e) => setQuantity(e.target.value)}
              type="text"
            />
          </section>

          <ul className={styles.ing_quant_container_right}>
            {ingredients.map((ing) => (
              <li>{`${ing.quantity} ${ing.name}`}</li>
            ))}
          </ul>
        </section>
        <button
          type="button"
          className={styles.add_btn}
          onClick={addIngredient}
        >
          Add Another Ingredient
        </button>
        <textarea
          placeholder="What are the instructions?"
          name="instructions"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <button className={styles.save_btn} type="submit">
          Save Recipe
        </button>
        <div>{error && <div style={{color:'red'}}>{error}</div>}</div>
      </form>
    );
  };

  return (
    <section className={styles.newRecipe_container}>
      <h1 className={styles.newRecipe_title}>Add a New Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {formReturn}
      </Formik>
    </section>
  );
};

export default AddRecipeForm;
