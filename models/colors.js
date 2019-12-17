const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColorSchema = new Schema({
  name: String,
  color: { rgb:[ Number ]}
});

const Color = mongoose.model('color', ColorSchema);

module.exports = Color 