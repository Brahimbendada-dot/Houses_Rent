const express = require('express')
const { getAllBooking, addBooking, getBookingById, updateBooking, deleteBooking } = require('../controller/booking_controller')
const router = express.Router()

router.get("/",getAllBooking)
router.post("/",addBooking)
router.get("/:id",getBookingById)
router.put("/:id",updateBooking)
router.delete("/:id",deleteBooking)


module.exports = router