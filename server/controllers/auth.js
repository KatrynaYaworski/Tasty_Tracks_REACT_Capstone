const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { sequelize } = require("../util/database");

const createToken = (username, id) => {
  return jwt.sign(
    {
      username,
      id,
    },
    SECRET,
    {
      expiresIn: "2 days",
    }
  );
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [foundUserArr] = await sequelize.query(`
    SELECT * FROM users
    WHERE username = '${username}'
    LIMIT 1
  `);

    if (foundUserArr[0]) {
    const [foundUser] = foundUserArr;
      const isAuthenticated = bcrypt.compareSync(password, foundUser.password);

      if (isAuthenticated) {
        const token = createToken(foundUser.username, foundUser.id);
        const exp = Date.now() + 1000 * 60 * 60 * 48;

        const data = {
          username: foundUser.username,
          userId: foundUser.id,
          token: token,
          exp: exp,
        };

        res.status(200).send(data);
      } else {
        res.status(400).send("Password is incorrect");
      }
    } else {
      res.status(400).send("User does not exist.");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [existingUserArr] = await sequelize.query(
      `
      SELECT * FROM users
      WHERE username = '${username}'
      LIMIT 1
    `
    );
    
    if (existingUserArr[0]) {
      res.status(400).send("Username is not available");
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const [newUser] = await sequelize.query(
        `
        INSERT INTO users(username, password)
        VALUES('${username}', '${hash}')
        RETURNING user_id, username
      `
      );

      const token = createToken(newUser.username, newUser.user_id);
      const exp = Date.now() + 1000 * 60 * 60 * 48;

      const data = {
        username: newUser.username,
        userId: newUser.user_id,
        token: token,
        exp: exp,
      };

      res.status(200).send(data);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = {
  login,
  register,
};
