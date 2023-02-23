const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { AutoIncrement } = require("../connection");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar_url: { type: String },
    _id: Number,
  },
  { _id: false }
);

UserSchema.plugin(AutoIncrement);
const User = mongoose.model("User", UserSchema, "users");

module.exports = User;
