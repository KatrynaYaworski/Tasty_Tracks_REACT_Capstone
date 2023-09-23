const { sequelize } = require("../util/database");
// BODY=
// user_id: state.userId,
// goal: goal,
// activity: activityLevel,
// weight: weight,
// gender: gender,
// height: height,
// carbs: carbs,
// calories: calories,
// fat: fat,
// protein: protein,
// age: age,

// DB =
// user_detail_id SERIAL PRIMARY KEY,
// gender varchar (40) NOT NULL,
// age integer NOT NULL,
// activity varchar (40) NOT NULL,
// height integer NOT NULL,
// weight integer NOT NULL,
// goal varchar (40) NOT NULL,
// BMR integer NOT NULL,
// TDEE integer NOT NULL,
// calories integer NOT NULL,
// carbs integer NOT NULL,
// protein integer NOT NULL,
// fat integer NOT NULL,
// user_id integer,

module.exports = {
  addUserDetails: (req, res) => {
    const {
      user_id,
      goal,
      activity,
      weight,
      gender,
      height,
      carbs,
      calories,
      fat,
      protein,
      age,
    } = req.body;
    let mySequelQuery = `
        DELETE FROM user_details WHERE user_id = ${user_id};
        INSERT INTO user_details (gender, age, activity, height, weight, goal, BMR, TDEE, calories, carbs, protein, fat, user_id)
        VALUES ('${gender}', ${age}, '${activity}', ${height},${weight}, '${goal}', 0, 0, ${calories}, ${carbs}, ${protein}, ${fat}, ${user_id});`;
    sequelize
      .query(mySequelQuery)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((e) => console.log("error with posting details", e));
  },

  getUserDetails: (req, res) => {
    const { id } = req.params;
    let mySequelQuery = `SELECT * FROM user_details 
        WHERE user_id = ${id}`;
    sequelize
      .query(mySequelQuery)
      .then((dbRes) => {
        res.status(200).send(dbRes[0][0]);
      })
      .catch((e) => console.log("error when retrieving the details", e));
  },
};
