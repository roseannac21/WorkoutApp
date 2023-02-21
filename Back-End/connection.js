const mongoose = require('mongoose')

require('dotenv').config({
  path: `${__dirname}/.env`,
});

const url = process.env.DATABASE_URL;

console.log(url);

mongoose.connect(url);
const database = mongoose.connection;

module.exports = database