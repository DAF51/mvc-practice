const express = require("express")
const app = express()
const connectDB = require("./config/database")
require('dotenv').config({path:'./config/.env'})
// const PORT = process.env.PORT

connectDB()


app.set("view engine", "ejs")
app.use(express.static("./public"))
app.use(express.urlencoded({extended:true}))

//load config
// dotenv.config({path:"./config/config.env"})




//Routes


app.listen(process.env.PORT, () => {
  console.log(`The server is up and running on ${process.env.PORT}`)
})