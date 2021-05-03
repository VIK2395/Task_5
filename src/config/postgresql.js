const { Sequelize } = require('sequelize');

module.exports = new Sequelize('postgresql://postgres:password@localhost:5432/comicswebstore', {
  define: {
    timestamps: false,
  },
});

// CREATE TABLE publishers (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR NOT NULL,
//     dateFounded INTEGER,
//     parantCompany VARCHAR NOT NULL,
//     countryOfOrigin VARCHAR NOT NULL
// );
