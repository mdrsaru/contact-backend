var mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  email: {
    type: String,
    unique: true,
    index: true
  },
  password: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

User.createIndexes()
module.exports = User;