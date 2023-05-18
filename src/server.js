const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const errorHandler404 = require('./error-handler/404');
const errorHandler500 = require('./error-handler/500');
// const cors = require('cors');
const app = express();
const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes');

app.use(express.json());

app.use('/food', foodRoutes);

app.use('/clothes', clothesRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;