const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "xy753@bhK", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
