const mongoose = require('mongoose')


const houseSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    address:{
        city:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        street:{
            type:String,
        }
    },
    area:{
        type: Number,
        required:true,
    },
    availability:{
        type: Boolean,
        default: true,
    },
    model3d:{
        type: Array,
        default:[]
    }
},{ timestamps: true })

module.exports = mongoose.model('House', houseSchema)