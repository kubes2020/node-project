const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const server = express()
const userRouter = require('./users/userRouter.js')
const postRouter = require('./posts/postRouter.js')

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())
server.use('/api/users', userRouter)
server.use('/api/posts', postRouter)
server.get('/', (req, res)=>{
    res.send('endpoint running')
})

module.exports = server