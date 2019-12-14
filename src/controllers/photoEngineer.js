
const misc = require('./misc')
const path = require('path')
const multer = require('multer')
const ImageEngineer = './src/images/engineers/'
const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,ImageEngineer);
  },
  filename:(req,file,cb)=>{
    const fileName = path.basename(file.originalname)
    const extension = path.extname(file.originalname)
    const files = path.basename(file.originalname, path.extname(file.originalname))
    const imageName = files + '-' + Date.now()+path.extname(file.originalname)
    const image = imageName.toLowerCase().split(' ').join('-')
    cb(null, image)
  }
})
const upload = multer({
  storage:storage,
  fileFilter:(req,file,cb)=>{
    if(file.mimetype=="image/png"||file.mimetype=="image/jpg"||file.mimetype=="image/jpeg"||file.mimetype=="image/gif"){
      cb(null,true)
    }else{
      cb(null,false)
      return cb(new Error('allowed only .png, .jpg, .jpeg and.gif'))
    }
  }
})

module.exports = {
  upload:
	multer({
	  storage:storage,
	  fileFilter:(req,file,cb)=>{
	    if(file.mimetype=="image/png"||file.mimetype=="image/jpg"||file.mimetype=="image/jpeg"||file.mimetype=="image/gif"){
	      cb(null,true)
	    }else{
	      cb(null,false)
	      return cb(new Error('allowed only .png, .jpg, .jpeg and.gif'))
	    }
	  }
	})
}