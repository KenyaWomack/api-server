'use strict';
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL === 'test '? 'sqlite::memory:' : process.env.DATABASE_URL;
const {Sequelize, DataTypes} = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const Collection = require('./collection');
const sequelize = new Sequelize(DATABASE_URL);
const FoodSchema = require('./food');
const ClothesSchema = require('./clothes');

const FoodModel = FoodSchema(sequelize, DataTypes);
const ClothesModel = ClothesSchema(sequelize, DataTypes);

const FoodCollection = new Collection(FoodModel);
const ClothesCollection = new Collection(ClothesModel);

module.exports = {
  db: sequelize,
  Food: FoodCollection,
  Clothes: ClothesCollection,
};


// might help some code work!
// const { Sequelize, DataTypes } = require('sequelize');

// const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

// const sequelizeDatabase = new Sequelize(DATABASE_URL);
