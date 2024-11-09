const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        reuired:true,
    },
    phone:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        required: true
    },
    password:{
        type:String,
    }
},{ timestamps: true })

module.exports = mongoose.model('User', userSchema);