const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv =require('dotenv').config()
const path = require("path")

const app = express()
const housesRouter = require('./routes/house_routes')
const usersRouter = require('./routes/user_routes')
const bookingsRouter = require('./routes/booking_routes')
const authRouter = require('./routes/auth_routes')

//connect mobgo db
mongoose.connect(process.env.MONGO_URL)
.then(res=>{
    // start the server
    app.listen(process.env.port, ()=>{
        console.log("Mongo Db Connected")
        console.log(`Server running on port ${process.env.PORT}`)
    })
})
.catch(err=>console.log(err))

// Use Middleware
app.use(express.json())
app.use(cors())

// EndPoint Middleware
app.use('/api/v1/houses',housesRouter)
app.use('/api/v1/users',usersRouter)
app.use('/api/v1/bookings',bookingsRouter)
app.use('/api/v1/auth',authRouter)

// use the client app 
app.use(express.static(path.join(__dirname, 'client_side/build')))

// render client application
app.get("*", (req, res) => res.sendFile(path.join(__dirname, 'client_side/build/index.html')))



