require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const { SERVER_PORT } = process.env;

const { seed } = require('./controllers/seed');
const { getRecipes, addRecipe, deleteRecipe } = require("./controllers/recipes");
const { login, register } = require("./controllers/auth");
// const {isAuthenticated} = require("./middleware/isAuthenticated");
const { addUserDetails, getUserDetails } = require("./controllers/userDetails")

const { getCurrentUserMeals, addUserMeals } = require("./controllers/userMeals");

app.use(express.json());
app.use(cors());

app.post("/seed", seed);

app.get('/recipes', getRecipes);

app.post("/recipes", addRecipe);

app.delete("/recipes/:user_id/:recipe_id", deleteRecipe);

// app.get("/userrecipes/:userId", getCurrentUserRecipes);

app.post("/usermeals/", addUserMeals);
app.get("/usermeals/:userId", getCurrentUserMeals);

app.get("/user-details/:id", getUserDetails)
app.post("/user-details", addUserDetails);
app.post("/register", register);

app.post("/login", login);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));