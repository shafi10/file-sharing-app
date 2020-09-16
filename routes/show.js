const router = require('express').Router()
const File = require('../models/File')

router.get('/:uuid',async (req,res) =>{
    try {
        const file = await File.findOne({uuid: req.params.uuid});
        if(!file){
            return res.json({msg:'no file found'})
        }
        res.json({
            uuid:file.uuid,
            fileName:file.filename,
            fileSize:file.size,
            download:`http://localhost:5000/files/download/${file.uuid}`
        })
    } catch (error) {
        console.log(error)
    }

})


module.exports = router