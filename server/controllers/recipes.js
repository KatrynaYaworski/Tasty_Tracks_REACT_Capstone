const { sequelize } = require("../util/database");

module.exports = {
  getRecipes: (req, res) => {

    let mySequelQuery = `SELECT
                              r.*,
                              m.meal_type
                          FROM
                              recipes r
                          INNER JOIN
                              meals m ON r.meal_id = m.meal_id
                          WHERE
                              r.user_id = '${req.query.userId === "null" ? 0 : req.query.userId}' OR r.user_id IS NULL`;

    // let mySequelQuery = `SELECT
    //                           r.*,
    //                           m.meal_type
    //                       FROM
    //                           recipes r
    //                       INNER JOIN
    //                           meals m ON r.meal_id = m.meal_id
    //                       LEFT JOIN
    //                           users u ON r.user_id = u.user_id
    //                       WHERE
    //                           u.username = '${req.query.username}' OR r.user_id IS NULL`;
    sequelize
      .query(mySequelQuery)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((e) => console.log("error when retrieving the recipes", e));
  },
  //   CREATE TABLE recipes(
  //     recipe_id SERIAL PRIMARY KEY,
  //     name varchar (60) NOT NULL,
  //     instructions text NOT NULL,
  //     ingredients text NOT NULL,
  //     calories integer NOT NULL,
  //     carbs integer NOT NULL,
  //     fat integer NOT NULL,
  //     protein integer NOT NULL,
  //     image_url varchar (300) NOT NULL,
  //     meal_id integer,
  //     user_id integer,
  //     FOREIGN KEY(meal_id) REFERENCES meals(meal_id),
  //     FOREIGN KEY(user_id) REFERENCES users(user_id)
  // );
  addRecipe: (req, res) => {
    const {
      calories,
      carbs,
      fat,
      image_url,
      ingredients,
      instructions,
      protein,
      name,
      meal_type,
      userId,
    } = req.body;

    const formattedIngredients = ingredients.map((ingredient) => {
      return `${ingredient.quantity} ${ingredient.name}`;
    }).join(', ');

  //  JSON.stringify(ingredients);

    let mySequelQuery = `INSERT INTO recipes (name, instructions, ingredients, calories, carbs, fat, protein, image_url, meal_id, user_id )
    VALUES ('${name}', '${instructions}', '${formattedIngredients}', ${calories}, ${carbs}, ${fat}, ${protein}, '${image_url}', ${meal_type}, '${userId}');`;
    // let myGetUserIDSequelQuery = `SELECT user_id from users WHERE username = '${username}'`;
    sequelize
      .query(mySequelQuery)
      .then((dbRes) => {
        res.sendStatus(200);
      })
      .catch((e) => console.log("error when adding recipe", e));
  },
  deleteRecipe: (req, res) => {
    const { user_id, recipe_id } = req.params;
    let mySequelQuery = `
    DELETE FROM recipes WHERE user_id = ${user_id} AND recipe_id = ${recipe_id}; `
    sequelize
      .query(mySequelQuery)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((e) => console.log("error when deleting user recipe", e));
  }
};
