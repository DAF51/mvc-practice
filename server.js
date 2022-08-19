const express = require("express")
const app = express()
const connectDB = require("./config/database")
require('dotenv').config({path:'./config/.env'})
const PORT = process.env.PORT
const roster = require("./routes/roster")


connectDB()


app.set("view engine", "ejs")
app.use(express.static("./public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//Routes
app.use("/", roster)



app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`)
})