require('dotenv').config();
const express = require('express');
const helmet = require('helmet');


const server = express();

// reference routes


// use middleware
server.use(express.json());
server.use(helmet());

//  use routes


//root route

server.get('/', (req, res) => {
    // res.status(200).json({message: "Server active!"})
    res.send({message: "Server active!"});
})


//export

module.exports = server