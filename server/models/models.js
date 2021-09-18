const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Ticket = sequelize.define('ticket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  price: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = {
  Ticket,
};
