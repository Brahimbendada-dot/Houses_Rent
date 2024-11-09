const multer = require('multer')


const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req,file,cb)=>{
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})
const uploads = multer({
    storage,          
    limit: { fileSize: 2000000000 }, // size of file less then 2GB
    fileFilter:(req,file,cb)=>{
        const allowExtension = ["glb","mtl","obj"]
        let isFileExtInList = false
        const fileExtension = file.originalname.split('.')[1]
        console.log(fileExtension)
        allowExtension.map(extension=>{
            if(extension === fileExtension){
                isFileExtInList = true
            }
        })
        if(isFileExtInList){
            cb(null,true)
        }else{
            cb(new Error("Format as not allowed"))
        }
    }
})

module.exports = uploads