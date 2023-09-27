const { sequelize } = require('../util/database');
const seedData = require('../seedData')


module.exports = {
  seed: async (req, res) => {
    try {
      await sequelize.query(
        `
        drop table if exists user_details;
        drop table if exists user_meals;
        drop table if exists recipes;
        drop table if exists users;
        drop table if exists meals;
                  
        CREATE TABLE users(
                user_id SERIAL PRIMARY KEY,
                username varchar (50) NOT NULL,
                password varchar (200) NOT NULL
            );
       
        CREATE TABLE meals(
                meal_id SERIAL PRIMARY KEY,
                meal_type varchar (40) NOT NULL
            );
          
        CREATE TABLE recipes(
                recipe_id SERIAL PRIMARY KEY,
                name varchar (60) NOT NULL,
                instructions text NOT NULL,
                ingredients text NOT NULL,
                calories integer NOT NULL,
                carbs integer NOT NULL,
                fat integer NOT NULL,
                protein integer NOT NULL,
                image_url varchar (300) NOT NULL,
                meal_id integer,
                user_id integer,
                FOREIGN KEY(meal_id) REFERENCES meals(meal_id),
                FOREIGN KEY(user_id) REFERENCES users(user_id)
            );

            CREATE TABLE user_meals(
              user_id integer PRIMARY KEY,
              selections JSONB,
              FOREIGN KEY (user_id) REFERENCES users (user_id)
          );

        CREATE TABLE user_details(
                user_detail_id SERIAL PRIMARY KEY,
                gender varchar (40) NOT NULL,
                age integer NOT NULL,
                activity varchar (40) NOT NULL,
                height integer NOT NULL,
                weight integer NOT NULL,
                goal varchar (40) NOT NULL,
                BMR integer,
                TDEE integer,
                calories integer NOT NULL,
                carbs integer NOT NULL,
                protein integer NOT NULL,
                fat integer NOT NULL,
                user_id integer,
                FOREIGN KEY (user_id) REFERENCES users (user_id)
             );

             INSERT INTO meals (meal_type)
             VALUES ('Breakfast'),
             ('Lunch/Dinner'),
             ('Snacks/Extras');
                 
         `
      );
      const seedPromiseArr = seedData.map((item) => {
        return sequelize.query(`INSERT INTO recipes (name, instructions, ingredients, calories, carbs, fat, protein, image_url, meal_id)
              VALUES (
                  '${item.recipe_name}',
                  '${item.instructions}',
                  '${item.ingredients}',
                  ${item.calories},
                  ${item.carbs},
                  ${item.fat},
                  ${item.protein},
                  '${item.image_url}',
                  ${item.meal_id});
                  `);
      });
      await Promise.all(seedPromiseArr);
      console.log("DB seeded!");
      res.sendStatus(200);
    } catch (e) {
      console.log("error seeding DB", e);
    }
  },
};
