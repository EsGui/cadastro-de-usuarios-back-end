require('dotenv').config();

const config = {
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'Dev123456@',
  database: process.env.MYSQLDATABASE || 'user_registration',
  host: process.env.MYSQLHOST || 'localhost',
  port: Number(process.env.MYSQLPORT) || 3306,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};