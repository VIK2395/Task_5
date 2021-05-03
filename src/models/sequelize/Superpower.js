const { DataTypes } = require('sequelize');
const sequelize = require('../../config/postgresql');

const Superpower = sequelize.define(
  'Superpower',
  {
    superpower: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);

module.exports = Superpower;
