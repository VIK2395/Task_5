const { DataTypes } = require('sequelize');
const sequelize = require('../../config/postgresql');
const Comics = require('./Comics');

const Publisher = sequelize.define(
  'Publisher',
  {
    name: { type: DataTypes.STRING, allowNull: false },
    dateFounded: { type: DataTypes.DATE, allowNull: false },
    parantCompany: { type: DataTypes.STRING, allowNull: false },
    countryOfOrigin: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);

// one-to-many
Publisher.hasMany(Comics, { foreignKey: 'PublisherId' });
Comics.belongsTo(Publisher, { foreignKey: 'PublisherId' });

module.exports = Publisher;
