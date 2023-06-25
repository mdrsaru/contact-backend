let mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  fullName: String,
  email: String,
  phone_number: {
    type: Number,
    required: true,
    unique: true,
    index: true,
  },
  createdDate: {
    type: String,
    default: Date.now(),
  },
  updateDate: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
