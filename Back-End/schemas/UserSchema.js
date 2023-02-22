const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar_url: { type: String, required: true },
  _id: { type: Number, required: true },
});

const User = mongoose.model("User", UserSchema, "users");

module.exports = { User };
