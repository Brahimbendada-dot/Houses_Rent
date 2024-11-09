const User = require('../model/user')

const addUser = async (req,res)=>{
    const newuser = new User(req.body)
    try {
        const user = await newuser.save()
        res.status(201).json({
            status:'success',
            data:{
                user,
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const getAllUser = async (req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json({
            status:'success',
            data:{
                users
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const getUserById = async (req,res)=>{
    try {
        const users = await User.findById(req.params.id)
        res.status(200).json({
            status:'success',
            data:{
                users
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const updateUser = async (req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            status:'success',
            data:{
                user
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const deleteUser = async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
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
    addUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
}