'use strict'

const Food = (sequelize, DataTypes)=> sequelize.define('food', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.ENUM("high", "med", "low"),
    }
})

module.exports = Food;