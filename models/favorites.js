const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikesSchema = new Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  likes: {
    colorsId: { type: mongoose.Schema.ObjectId, ref: "colors" },
    palletesId: {
      type: mongoose.Schema.ObjectId,
      ref: "palletes"
    }
  }
});

const Likes = mongoose.model("likes", LikesSchema);

module.exports = Likes;
