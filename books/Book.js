const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = Schema({
  title: String,
  author: String,
  numberPages: Number,
  publisher: String
});

module.exports = mongoose.model("Book", BookSchema);
