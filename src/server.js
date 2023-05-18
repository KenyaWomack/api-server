const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const errorHandler404 = require('./error-handler/404');
const errorHandler500 = require('./error-handler/500');
// const cors = require('cors');
const app = express();

// Middleware

// might be worth adding! not sure if required
// app.use(cors());
// app.use(express.json());
app.use(logger);

// Routes

// app.get('/', (req, res, next) => {
//   res.status(200).send('Server is alive!!!');
// });

app.get('/person', validator, (req, res) => {
  const name = req.query.name;
  if (name) {
    res.json({ name });
  } else {
    throw new Error('Name is missing');
  }
});
// very cool use of throwing an error!! didnt think of this!

// Error Handlers
app.use(errorHandler404);
app.use(errorHandler500);

module.exports = {
  start: function (port) {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  },
  app: app,
};