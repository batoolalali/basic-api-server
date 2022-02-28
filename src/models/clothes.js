'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('clothes',{
    model:{
        type: DataTypes.STRING,
        allowNull: false
    },
    color:{
        type: DataTypes.STRING,
    }
});

module.exports = Clothes;