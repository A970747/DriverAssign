"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
exports.Order = db_1.default.define('Order', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    driver: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: null,
    },
    // start
    distance: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: null,
    },
    revenue: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: null,
    },
    cost: {
        type: sequelize_1.DataTypes.FLOAT,
        defaultValue: null,
    },
    // here
    startDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    startCity: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    startProv: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    startCountry: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    endCity: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    endProv: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    endCountry: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "Generic commodity",
    },
}, {
    sequelize: db_1.default,
    tableName: 'Orders',
});
