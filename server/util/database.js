const  {CONNECTION_STRING}  = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: false,
  },
});
module.exports = {
    sequelize
}