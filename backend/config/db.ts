import { Sequelize } from 'sequelize';

const db = new Sequelize('app', '', '', {
  storage: './db/database.sqlite',
  dialect: 'sqlite',
  logging: false,
});

export default db;