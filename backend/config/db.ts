import { Sequelize } from 'sequelize';

let db: any;

if (process.env.NODE_ENV === 'production') {
  db = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_IP}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
  try {
    db.authenticate().then(() => console.log('Connection has been established successfully.'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
} else {
  db = new Sequelize('app', '', '', {
    storage: './db/database.sqlite',
    dialect: 'sqlite',
    logging: false,
  });
}


export default db;