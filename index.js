require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.get('/', (req, res)=>{
    res.send('endpoint running')
})
const port = process.env.PORT || 5000

server.listen(port, ()=> {
    console.log(`\n** server is running on port ${port}**`)
})
