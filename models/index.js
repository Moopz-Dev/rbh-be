"use strict";
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const dbConfig = require("../config/config");
const db = {};
const conf = dbConfig.development;

// const sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   {
//     dialect: config.dialect || "mysql",
//     host: config.host || "123.123.123.1",
//     port: config.port || process.env.MYSQL_LOCAL_PORT,
//     logging: false,
//   }
// );

const sequelize = new Sequelize(conf.database, conf.username, conf.password, {
  host: conf.host,
  // host: "127.0.0.1",
  dialect: "mysql",
});

// "development": {
//   "username": "root",
//   "password": "root",
//   "database": "robinhood",
//   "host": "192.168.1.1",
//   "dialect": "mysql",
//   "port": 3306
// }

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
