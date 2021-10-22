"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverInstance = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class DriverInstance extends sequelize_1.Model {
}
exports.DriverInstance = DriverInstance;
DriverInstance.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "FirstName",
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "LastName",
    },
    fullName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: 'Drivers',
});
