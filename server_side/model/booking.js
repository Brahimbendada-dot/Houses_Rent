const mongoose = require('mongoose')


const bookingSchema = mongoose.Schema({
    house:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'House',
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    totalPrice:{
        type:Number,
        required: true,
    },
    status:{
        type:String,
        enum:['Pending', 'Confirmed', 'Canceled','Completed'],
        default:'Pending'
    },
    paymentStatus:{
        type:String,
        enum:['unpayed', 'payed'],
        default:'unpayed'
    },
},
{ timestamps: true }
)

module.exports = mongoose.model('Booking', bookingSchema);