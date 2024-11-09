const express = require('express')
const { getAllHouse, addHouse, getHouseById, updateHouse, deleteHouse, upload3dModelForHouse } = require('../controller/house_controller')
const uploads = require('../middleware/upload')
const { verifyToken, verifyUser, verifyAdmin } = require('../middleware/auth_middleware')
const router = express.Router()

router.get("/",getAllHouse)
router.post("/",addHouse)
router.post("/:id", uploads.array('files',3),upload3dModelForHouse)
router.get("/:id",getHouseById)
router.put("/:id",updateHouse)
router.delete("/:id",deleteHouse)


module.exports = router