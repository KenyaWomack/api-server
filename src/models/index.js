const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const FoodModel = require('./food');
const ClothesModel = require('./clothes');
const Food = FoodModel(sequelize, Sequelize);
const Clothes = ClothesModel(sequelize, Sequelize);

module.exports = {
  Food,
  Clothes,
};