const { DataTypes } = require('sequelize');
const sequelize = require('../../config/postgresql');
const Review = require('./Review');

const User = sequelize.define(
  'User',
  {
    image: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);

// one-to-many
User.hasMany(Review, { foreignKey: 'UserId' });
Review.belongsTo(User, { foreignKey: 'UserId' });

module.exports = User;
