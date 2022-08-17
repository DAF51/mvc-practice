const model = require("../models/genericModels")

module.exports = {
  functionOne: async (req, res) => {
    console.log("This is the first function")
    res.render("index.ejs")
  },
  functionTwo: async (req, res) => {
    console.log("This is the second function")
  }
}