const router = require('express').Router()
const fs = require('fs')
const multer = require('multer')
const { tmpdir } = require('os')
const path = require('path')

const uploader = multer({
  dest: path.resolve('uploads', 'temp')
})

router.post('/upload', uploader.single('file'), async(req, res) => {
  const { filename, originalname } = req.file

    const from = path.resolve('uploads', 'temp', filename)
    const to = path.resolve('uploads', originalname)

    fs.renameSync(from ,to)

    res.json({ status: `${originalname} has been uploaded successfully`})
})

module.exports = router