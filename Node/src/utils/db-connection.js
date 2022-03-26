const { Sequelize  } = require('sequelize')

const sequelize = new Sequelize("todo", "root", "Habibulla786", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });

  module.exports = sequelize;