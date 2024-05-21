async function uploadFile(req, res, next){
    try {
        res.send(req.file)
    } catch (error) {
        next(error)
    }
}

module.exports = { 
    uploadFile
}