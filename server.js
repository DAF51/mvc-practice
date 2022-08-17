const express = require("express")
const app = express()
const connectDB = require("./config/database")
require('dotenv').config({path:'./config/.env'})
const PORT = process.env.PORT
const routeOne = require("./routes/routeOne")
// const routeTwo = require("./routes/routeTwo")

connectDB()


app.set("view engine", "ejs")
app.use(express.static("./public"))
app.use(express.urlencoded({extended:true}))


//Routes
app.use("/", routeOne)
// app.use("/two", routeTwo)


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`)
})