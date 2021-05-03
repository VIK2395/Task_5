const { DataTypes } = require('sequelize');
const sequelize = require('../../config/postgresql');
const Comics = require('./Comics');
const Superpower = require('./Superpower');

const Character = sequelize.define(
  'Character',
  {
    nickname: { type: DataTypes.TEXT, unique: true, allowNull: false }, // unique: true ? doesnt have affect
    image: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.INTEGER, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);

Character.belongsToMany(Comics, { through: 'Comics/character' }); // will automatically create FK CharacterId
Comics.belongsToMany(Character, { through: 'Comics/character' }); // will automatically create FK ComicsId

Character.belongsToMany(Superpower, { through: 'Character/superpower' }); // will automatically create FK CharacterId
Superpower.belongsToMany(Character, { through: 'Character/superpower' }); // will automatically create FK SuperpowerId

module.exports = Character;
