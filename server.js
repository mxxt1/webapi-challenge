// require('dotenv').config()
const express = require('express')
const helmet = require('helmet')


const server = express()

// reference routes
const projectRouter = require('./routers/project-router.js')
const actionRouter = require('./routers/action-router.js')


// use middleware
server.use(express.json())
server.use(helmet())

//  use routes
server.use('/projects', projectRouter)
server.use('/actions', actionRouter)


//root route

server.get('/', (req, res) => {
    // res.status(200).json({message: "Server active!"})
    res.send({message: "Server active!"});
})


//export

module.exports = server