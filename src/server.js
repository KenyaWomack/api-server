const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator');
const errorHandler404 = require('./error-handlers/404.js');
const errorHandler500 = require('./error-handlers/500.js');
const app = express();
const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes');

const Food = require('./models/food'); // Require the correct data model
const FoodCollection = require('./collections/food'); // Require the collection class

app.use(express.json());

app.use('/food', foodRoutes(Food, FoodCollection)); // Use the food routes and pass the model and collection as parameters
app.use('/clothes', clothesRoutes); // Use the clothes routes

app.use(logger);
app.use(validator);

// Routes
app.get('/', (req, res, next) => {
  res.status(200).send('Server is alive!!!');
});

// Error handlers
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
