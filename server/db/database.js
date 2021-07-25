const Sequelize = require('sequelize');
const { config } = require('webpack');

// if(process.env.DATABASE_URL) {
//   config.dialectOptions = {
//     ssl: {
//       rejectUnauthorized:
//     }
//   }
// }

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/boilermaker', {
  logging: false
});

module.exports = db;
