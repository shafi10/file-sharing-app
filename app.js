const express = require('express')
const connectBD = require('./config/db.js')
const cors = require('cors')
const app = express()

connectBD();


app.use('/api', require('./routes/file'))
app.use('/files',require('./routes/show'))
app.use('/files/download', require('./routes/download'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})