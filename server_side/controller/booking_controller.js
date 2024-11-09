const Booking = require('../model/booking')
const User = require('../model/user')

const addBooking = async (req,res)=>{
    const newBooking = new Booking(req.body)
    try {
        const booking = await newBooking.save()
        res.status(201).json({
            status:'success',
            data:{
                booking,
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const getAllBooking = async (req,res)=>{
    try {
        const bookings = await Booking.find({}).populate('house').populate('user')
        res.status(200).json({
            status:'success',
            data:{
                bookings
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const getBookingById = async (req,res)=>{
    try {
        const bookings = await Booking.findById(req.params.id).populate('house').populate('user')
        res.status(200).json({
            status:'success',
            data:{
                bookings
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const updateBooking = async (req,res)=>{
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            status:'success',
            data:{
                booking
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const deleteBooking = async (req,res)=>{
    try {
        await Booking.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:'success',
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

module.exports = {
    addBooking,
    getAllBooking,
    getBookingById,
    updateBooking,
    deleteBooking,
}