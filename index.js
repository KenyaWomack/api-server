
// bringing in dotenv, bringing server up, and setting port (maybe 3002?)
// bring in config folder with `npm run init:config`
require('dotenv').config();
const server = require('./src/server');

const PORT = process.env.PORT || 3000;

server.start(PORT);