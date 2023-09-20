const { sequelize } = require('../util/database');


module.exports = {

getRecipes: (req, res) => {
    let mySequelQuery = `Select * From recipes`;
    
    sequelize
      .query(mySequelQuery)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((e) => console.log("error when retrieving the items", e));
  },
}