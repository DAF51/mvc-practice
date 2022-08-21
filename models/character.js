const mongoose = require("mongoose")

const character = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  maxHP: {
    type: Number,
    required: true
  },
  currentHP:{
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
  },
  alive: {
    type: Boolean,
    required: true
  },
})

module.exports = mongoose.model("Character", character)