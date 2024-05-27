const aws = require('aws-sdk')

class AWS{
    constructor(){
        aws.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
            region: process.env.AWS_REGION
        });
    }

    async uploadToS3(params) {
        try {
            const s3 = new aws.S3()
            const result = await s3.upload(params).promise()
            return result
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

module.exports = AWS