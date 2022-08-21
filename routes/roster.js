const express =require("express")
const router = express.Router()
const controller = require("../controllers/roster_con")


router.get("/", controller.pageLoad)
router.post("/", controller.createChar)
router.delete("/", controller.deleteChar)
router.put("/", controller.healChar)

module.exports = router;