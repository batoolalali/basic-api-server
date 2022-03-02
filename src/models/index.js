'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food');
const clothes = require('./clothes');

const DATABASE_URL = process.env.DATABASE_URL;


let sequelizeOptions =  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }

let sequelize = new Sequelize(DATABASE_URL,sequelizeOptions);

// let sequelize = new Sequelize(DATABASE_URL);


module.exports={
    db: sequelize,
    Food: food(sequelize,DataTypes),
    Clothes: clothes(sequelize, DataTypes)
}