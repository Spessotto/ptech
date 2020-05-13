const Sequelize = require("sequelize");
//logging: console.log,

let configSQL = {
  dialect: 'postgres',
  logging: false,
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: false,
    underscored: false
  }
};

if (!configSQL)
  throw new Error('Error reading config info to access the Database.');

//Connection Info  
sequelize = new Sequelize(configSQL);

//Verify connection
sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection successfull.');
    module.exports = sequelize;

  })
  .catch(function (err) {
    console.log('Error connecting to Database:', err);
  });