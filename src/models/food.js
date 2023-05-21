'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
 
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'food',
  timestamps: false,
});

module.exports = Food;
