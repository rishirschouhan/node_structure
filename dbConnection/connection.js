const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.MSSQL_DB, process.env.MSSQL_USER, process.env.MSSQL_PASSWORD, {
  dialect: 'mssql',
  host : process.env.MSSQL_HOST,
  operatorsAliases: false,
  dialectOptions: {
    encrypt: true
  },
  logging: false,
  define: {
    timestamps: true
} 
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;