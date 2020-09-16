const router = require('express').Router()
const File = require('../models/File')

router.get('/:uuid', async (req,res)=>{
    const file = await File.findOne({uuid: req.params.uuid})
     if(!file){
         return res.json({msg:'error file not found'})
     }
     const filePath = `${__dirname}/../${file.path}`
     res.download(filePath);
})




module.exports = router