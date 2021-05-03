const { DataTypes } = require('sequelize');
const sequelize = require('../../config/postgresql');

const Review = sequelize.define(
  'Review',
  {
    ComicsId: { type: DataTypes.INTEGER, allowNull: false },
    UserId: { type: DataTypes.INTEGER, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    dateAdded: { type: DataTypes.DATE, allowNull: false },
  },
  {
    timestamps: false,
  }
);

module.exports = Review;
