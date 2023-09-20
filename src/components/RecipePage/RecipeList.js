import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("/recipes").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <div>
            <h2>{recipe.name}</h2>
            <img
              referrerPolicy="no-referrer"
              src={recipe.image_url}
              style={{ height: "300px", width: "300px", border: "solid black" }}
            ></img>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeList;