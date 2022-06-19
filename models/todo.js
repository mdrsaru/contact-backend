let mongoose = require('mongoose')


const TodoSchema = mongoose.Schema({
  name:String,
  deadline:Date,
  points:Number,
  createdDate:{
    type:String,
    default:Date.now()
  }
})

module.exports = mongoose.model("Todo", TodoSchema);