const multer = require('multer')

// var storage = multer.diskStorage({
//     destination :  './public/uploads/',
//     filename : function(req, file, cb){
//         cb(null, Date.now() + '-' + file.originalname)
//     }
//  })

const fileFilter = (req, file, cb) => {
    console.log(file.mimetype);
    const ext_accepted = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf']
    if(ext_accepted.includes(file.mimetype)){
        cb(null, true)
    } else{
        const multerError = new multer.MulterError()
        multerError.message = 'Failed. Only '+ ext_accepted.join(', ') +' files are allowed'
        cb(multerError, false)
    }
}

const createMulter = (limit) => {
    const storage =  multer.memoryStorage()
    return multer({
        storage: storage,
        limits: { fileSize: limit * 1024 * 1024 },
        fileFilter: fileFilter
    }).single('file')
}

const  handleFileUpload = (limit) => (req, res, next) => {
    const upload = createMulter(limit)
    upload(req, res, (err) => { 
        if(err){
            if(err instanceof multer.MulterError){
                if(err.code === 'LIMIT_FILE_SIZE'){
                    return res.status(400).json({ status: false, message: `Failed. File size exceeds the limit of ${limit} MB` })         
                }
                return res.status(400).json({ status: false, message: err.message || 'Failed. Something went wrong' })
            }
            return res.status(500).json({ status: 500, message: 'Internal server error'})
        }
        next()
    })
}

module.exports = handleFileUpload