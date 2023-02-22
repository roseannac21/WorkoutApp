const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar_url: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema, "users");

module.exports = { User };
