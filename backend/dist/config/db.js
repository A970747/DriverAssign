"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
let db;
const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_IP}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
if (process.env.NODE_ENV === 'production') {
    try {
        db = new sequelize_1.Sequelize(connectionString);
        db.authenticate().then(() => console.log('Connection has been established successfully.'));
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
else {
    db = new sequelize_1.Sequelize('app', '', '', {
        storage: './db/database.sqlite',
        dialect: 'sqlite',
        logging: false,
    });
}
exports.default = db;
