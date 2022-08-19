const mongoose = require("mongoose")

const character = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  HP: {
    type: Number,
    required: true
  },
  ATT: {
     type: Number,
     required: true
  },
  desc:{
    type: String,
    required: false
  }
})

module.exports = mongoose.model("Character", character)