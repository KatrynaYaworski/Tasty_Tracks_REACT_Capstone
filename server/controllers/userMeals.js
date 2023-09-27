const { sequelize } = require("../util/database");

module.exports = {
    getCurrentUserMeals: (req, res) => {
        const { userId } = req.params;
          let mySequelQuery = `
              SELECT selections FROM user_meals WHERE user_id = ${userId};
              `;
          sequelize
            .query(mySequelQuery)
            .then((response) => {
              console.log(response[0][0].selections);
              res.status(200).send(response[0][0].selections);
            })
            .catch((e) => console.log("error with retrieving meals", e));
        },

    addUserMeals: (req, res) => {
      const {
        user_id,
        selections,
      } = req.body;
      const selectedDays = JSON.stringify(selections);           
          sequelize
            .query(`SELECT * FROM user_meals WHERE user_id = ${user_id}`)
            .then((response) => {
              if(response[0][0]){
                sequelize
                  .query(`UPDATE user_meals SET selections = '${selectedDays}' WHERE user_id = ${user_id}`).then(()=>res.sendStatus(200));
              }else{
                sequelize
                  .query(`
                  INSERT INTO user_meals (user_id, selections)
                  VALUES (${user_id}, '${selectedDays}')`).then(()=>res.sendStatus(200));
              }
            })
            .catch((e) => console.log("error with adding meals", e));
        }
}