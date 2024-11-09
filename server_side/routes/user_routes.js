const express = require('express')
const { getAllUser, addUser, getUserById, updateUser, deleteUser } = require('../controller/user_controller')
const router = express.Router()


router.get("/",getAllUser)
router.post("/",addUser)
router.get("/:id",getUserById)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)



module.exports = router