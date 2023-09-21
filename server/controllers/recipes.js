const { sequelize } = require("../util/database");

module.exports = {
  getRecipes: (req, res) => {
    let mySequelQuery = `SELECT
                              r.*,
                              m.meal_type
                          FROM
                              recipes r
                          INNER JOIN
                              meals m ON r.meal_id = m.meal_id;`;

    sequelize
      .query(mySequelQuery)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((e) => console.log("error when retrieving the items", e));
  },
};
