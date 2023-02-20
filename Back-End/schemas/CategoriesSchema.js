const mongoose = require("mongoose");
const CategoriesSchema = new mongoose.Schema({
  category: { type: String, required: true }
});

const Categories = mongoose.model("Category", CategoriesSchema, "categories");

module.exports = Categories;