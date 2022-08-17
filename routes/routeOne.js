const express =require("express")
const router = express.Router()
const controller = require("../controllers/controllerOne")


router.get("/", controller.functionOne)

module.exports = router;