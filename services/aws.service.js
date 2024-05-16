const aws = require('aws-sdk')

class AWS{
    constructor(){
        aws.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION
        });
    }
}

module.exports = AWS