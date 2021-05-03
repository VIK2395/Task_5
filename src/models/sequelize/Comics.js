const { DataTypes } = require('sequelize');
const sequelize = require('../../config/postgresql');
const Review = require('./Review');

const Comics = sequelize.define(
  'Comics',
  {
    title: { type: DataTypes.STRING, allowNull: false },
    logo: { type: DataTypes.STRING, allowNull: false },
    PublisherId: { type: DataTypes.INTEGER, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);

// one-to-many
Comics.hasMany(Review, { foreignKey: 'ComicsId' });
Review.belongsTo(Comics, { foreignKey: 'ComicsId' });

module.exports = Comics;
