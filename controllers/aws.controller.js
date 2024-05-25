const AWS = require('../services/aws.service')

async function uploadFile(req, res, next){
    try {
        if(!req.file){
            return res.status(400).json({status : false, message : 'Please select a image'})
        }
        const aws = new AWS()
        let fileType = req.file.originalname.split(".")[1]
        const params = {
            Bucket: process.env.AWS_S3_BUCKET,
            Key: `test.${fileType}`,
            Body: req.file.buffer,
            ContentType: req.file.mimetype
        }
        // console.log(params);  
        let dpKey = await aws.uploadToS3(params)
        res.send(dpKey)
        // await User.findOneAndUpdate({ _id: req.userid }, {dp: dpKey}, {select: '-password'})
        // let data = {
        //     url: getProfilePicture(params.Key)
        // }
        // res.status(200).json({status : true, data: data, message : 'Profile picture uploaded successfully'})
    } catch (error) {
        next(error)
    }
}

module.exports = { 
    uploadFile
}