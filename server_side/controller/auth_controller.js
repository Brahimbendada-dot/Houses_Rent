const jwt = require('jsonwebtoken')
const { addUser } = require('./user_controller')
const User = require('../model/user')

const signUp = addUser


const logIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            if (user.password === req.body.password) {
                const token = await  jwt.sign(
                    { userId: user._id, role: user.role },
                    process.env.SECRET_KEY,
                    { expiresIn: "3d" }
                  )
                return res.cookie('access_token',token,{
                    httpOnly:true,
                    expires:token.expiresIn
                }).status(200).json({
                    status:'success',
                    token
                })
            }
            else {
                return res.status(400).json({
                    status: "fail",
                    message: 'user not found'
                })
            }
        }
        else {
            return res.status(400).json({
                status: "fail",
                message: 'user not found'
            })
        }
    } catch (error) {return res.status(400).json({
        status: "fail",
        message: error.message
    })
    }
}


module.exports = {
    signUp,
    logIn,
}