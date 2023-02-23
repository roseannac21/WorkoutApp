const mongoose = require("mongoose");
const AutoIncrementFactory = require("mongoose-sequence");

require("dotenv").config({
  path: `${__dirname}/.env`,
});

const url = process.env.DATABASE_URL;

console.log(url);

mongoose.connect(url);
const database = mongoose.connection;
const AutoIncrement = AutoIncrementFactory(database);

module.exports = { database, AutoIncrement };
