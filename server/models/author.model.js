const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "{PATH} is required."],
    },
    nationality: {
      type: String,
      required: [true, "{PATH} is required."],
    },
    imageUrl: {
      type: String,
      required: [true, "{PATH} is required."],
    },
  },
  { timestamps: true } 
);
const Author = mongoose.model("Author", AuthorSchema);
console.log("Author model created");
module.exports = { Author: Author };
