const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const FoodModel = require('./food');
const ClothesModel = require('./clothes');
const Food = FoodModel(sequelize, Sequelize);
const Clothes = ClothesModel(sequelize, Sequelize);


// might help some code work!
// const { Sequelize, DataTypes } = require('sequelize');

// const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

// const sequelizeDatabase = new Sequelize(DATABASE_URL);


module.exports = {
  Food,
  Clothes,
};