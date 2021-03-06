const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: String,

  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  pantry: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
