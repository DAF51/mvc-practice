const Character = require("../models/character")

module.exports = {
  pageLoad: async (req, res) => {
    const fightersAlive = await Character.find({alive:true})
    const fightersDead = await Character.find({alive:false})
    res.render("index.ejs", {roster: fightersAlive, grave:fightersDead})
  },
  createChar: async (req, res) => {
    try{
      await Character.create({name: req.body.fighterName, maxHP:req.body.fighterHP, currentHP: req.body.fighterHP, ATT:req.body.fighterAttack, desc: req.body.fighterDesc, alive:true})
      console.log(`${req.body.fighterName} has been added to the roster`)
      res.redirect("/")
    }catch(err){
      console.log(err)
    }
  },

  deleteChar: async (req, res) =>{
    try{
      await Character.findOneAndDelete({_id:req.body.idFromJS})
      console.log("Fighter deleted")
      res.json("deleted it")

    }catch(err){
      console.log(err)
    }
  },
  healChar: async (req, res) => {
    try{
      await Character.findOneAndUpdate({_id:req.body.idFromJS}, {currentHP: req.body.hpFromJS, alive:true})
      console.log("Fighter healed")
      res.json("Fighter healed")
    }catch(err){
      console.log(err)
    }

  }
}