'use strict';

require('dotenv').config();
const server = require('./src/server.js');
const { db } = require('./src/models/index.js');
const PORT = process.env.PORT || 3002;

db.sync()
  .then(() => {
    server.start(PORT);
  })
  .catch(console.error);

// const express = require('express');
// const { Sequelize } = require('sequelize');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const foodRoutes = require('./src/routes/food');
// const clothesRoutes = require('./src/routes/clothes');
// const NotFoundHandler = require('./src/error-handlers/404');
// const ErrorHandler = require('./src/error-handlers/500');


// // bringing in dotenv, bringing server up, and setting port (maybe 3002?)
// // bring in config folder with `npm run init:config`
// require('dotenv').config();
// const server = require('./src/server');



// const sequelize = new Sequelize({
//   dialect: 'postgres', 
// });

// app.use(cors());
// app.use(bodyParser.json());

// app.use('/food', foodRoutes);
// app.use('/clothes', clothesRoutes);

// app.use(NotFoundHandler);

// app.use(ErrorHandler);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection to the database has been established successfully.');
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });


// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });