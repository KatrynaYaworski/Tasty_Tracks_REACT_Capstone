import React, { useState } from "react";
import { Formik } from "formik";
import styles from "./Recipe.module.css";
import axios from "axios";

const AddRecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

//Meal ID 1 = Breakfast
//Meal ID 2 = Main Recipes
//Meal ID 3 = Snacks
  const initialValues = {
    recipeName: "",
    instructions: "",
    ingredients: [],
    calories: "",
    carbs: "",
    fat: "",
    protein: "",
    imageURL: "",
    mealId: 0,
  };
//   name varchar (40) NOT NULL,
//   instructions text NOT NULL,
//   ingredients text NOT NULL,
//   calories integer NOT NULL,
//   carbs integer NOT NULL,
//   fat integer NOT NULL,
//   protein integer NOT NULL,
//   image_url varchar (300) NOT NULL,
//   meal_id integer,
//   user_id integer,
//   FOREIGN KEY(meal_id) REFERENCES meals(meal_id),
//   FOREIGN KEY(user_id) REFERENCES users(user_id)

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    axios
      .post(`/userrecipes`, values)
      .then((res) => console.log(res.data));
  };

  const addIngredient = () => {
    const newIngredient = { name, quantity };
    setIngredients([...ingredients, newIngredient]);
    setName("");
    setQuantity("");
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
            value={values.recipeName}
            onChange={handleChange}
            name="recipeName"
            placeholder="Recipe Name"
            type="text"
          />
          <input
            className={styles.inputs}
            value={values.imageURL}
            onChange={handleChange}
            name="imageURL"
            placeholder="Image URL"
            type="text"
          />
        </section>
        <section className={styles.radio_btns_container}>
          <span className={styles.ind_radio_btn_container}>
            <input
              name="type"
              value={"1"}
              onChange={handleChange}
              id="breakfast"
              type="radio"
            />{" "}
            <label htmlFor="breakfast">Breakfast</label>
          </span>
          <span className={styles.ind_radio_btn_container}>
            <input
              name="type"
              value={"2"}
              onChange={handleChange}
              id="lunch-dinner"
              type="radio"
            />{" "}
            <label htmlFor="lunch-dinner">Lunch / Dinner</label>
          </span>
          <span className={styles.ind_radio_btn_container}>
            <input
              name="type"
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
        <button className={styles.add_btn} onClick={addIngredient}>
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
