const server = require('./server.js');

require('dotenv').config()

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`\n** Welcome to Eventr! Running on port ${port} **\n`)
});