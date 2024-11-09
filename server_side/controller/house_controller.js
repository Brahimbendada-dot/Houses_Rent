const House = require('../model/house')

const addHouse = async (req,res)=>{
    const newHouse = new House(req.body)
    try {
        const house = await newHouse.save()
        res.status(201).json({
            status:'success',
            data:{
                house,
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const getAllHouse = async (req,res)=>{
    try {
        const houses = await House.find({})
        res.status(200).json({
            status:'success',
            data:{
                houses
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const getHouseById = async (req,res)=>{
    try {
        const houses = await House.findById(req.params.id)
        res.status(200).json({
            status:'success',
            data:{
                houses
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const updateHouse = async (req,res)=>{
    try {
        const house = await House.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            status:'success',
            data:{
                house
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}

const deleteHouse = async (req,res)=>{
    try {
        await House.findByIdAndDelete(req.params.id)
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

const upload3dModelForHouse = async(req,res)=>{ 
    try {
        const house = await House.findById(req.params.id)
        req.files.map(file =>{
            house.model3d.push(file.filename);
        })
        const updatedHouse = await House.findByIdAndUpdate(req.params.id,house,{new: true})
        res.status(200).json({
            status:'success',
            data:{
                house: updatedHouse
            }
        })
    } catch (error) {
        res.status(201).json({
            status:'fail',
            message:error.message
        })
    }
}
module.exports = {
    addHouse,
    getAllHouse,
    getHouseById,
    updateHouse,
    deleteHouse,
    upload3dModelForHouse
}