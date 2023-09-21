import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import styles from "./Recipe.module.css"


const RecipePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const recipeDisplay = recipes
    .filter((recipe) => {
        let title = recipe.name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe) => {
        return <RecipeCard recipe={recipe}/>
    })

  useEffect(() => {
    axios.get("/recipes").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
       <div className={styles.recipe_container}>{recipeDisplay}</div>
      {/* {recipes.map((recipe) => {
        return (
          <div>
            <h2>{recipe.name}</h2>
            <img
              referrerPolicy="no-referrer"
              src={recipe.image_url}
              style={{ height: "300px", width: "300px", border: "1px solid grey" }}
            ></img>
          </div>
        );
      })} */}
    </div>
  );
}

export default RecipePage;