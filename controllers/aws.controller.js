const AWS = require('../services/aws.service')
const s3storage = require('../models/s3storage.model')

async function uploadFile(req, res, next){
    try {
        if(!req.file){
            return res.status(400).json({status : false, message : 'Please select a image'})
        }
        const aws = new AWS()
        let fileType = req.file.originalname.split(".")[1]
        let fileName = req.file.originalname.split(".")[0]
        const params = {
            Bucket: process.env.AWS_S3_BUCKET,
            Key: `${fileName}.${fileType}`,
            Body: req.file.buffer,
            ContentType: req.file.mimetype
        }
        let result = await aws.uploadToS3(params)
        let new_file = new s3storage({
            key: result.Key,
            location: result.Location,
            name: fileName
        })
        await new_file.save()
        res.status(200).json({status : true, data: new_file, message : 'File uploaded successfully'})
    } catch (error) {
        next(error)
    }
}

module.exports = { 
    uploadFile
}