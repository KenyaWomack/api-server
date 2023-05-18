const express = require('express');
const app = express();
const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes');

app.use(express.json());

app.use('/food', foodRoutes);

app.use('/clothes', clothesRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});