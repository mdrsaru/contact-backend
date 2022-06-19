var mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  task: String,
  deadline: Date,
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
