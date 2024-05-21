var express = require('express')
var router = express.Router()

const upload = require('../utils/multer.util')
const awsController = require('../controllers/aws.controller')

router.get('/upload-file', upload(1), awsController.uploadFile)

module.exports = router