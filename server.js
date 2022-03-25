const express = require('express')
const server = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3001

server.set('view engine', 'ejs')

server.use('/', router)

server.listen(PORT, ()=> {
    console.log(`Love that Andree${PORT}`)
})