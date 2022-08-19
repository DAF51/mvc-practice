const Character = require("../models/character")

module.exports = {
  pageLoad: async (req, res) => {
    res.render("index.ejs")
  },
  createChar: async (req, res) => {
    try{
      await Character.create({name: req.body.fighterName, HP:req.body.fighterHP, ATT:req.body.fighterAttack, desc: req.body.fighterDesc})
      console.log(`${req.body.fighterName} has been added to the roster`)
      res.redirect("/")
    }catch(err){
      console.log(err)
    }
  }
}