const server = require('./server.js');

const PORT = process.env.PORT || 7000


server.listen(PORT, () => {
    console.log(`=== webAPI server on http://localHost:${PORT}`)
})
