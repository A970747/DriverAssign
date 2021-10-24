"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
const Driver_1 = require("./models/Driver");
const Order_1 = require("./models/Order");
const mockData_1 = require("./utils/mockData");
// use db.authenticate when this goes to postgres
if (process.env.NODE_ENV === 'production') {
    // !remove SYNC when migrations are setup. Migrations should be syncing the tables - this is a workaround for deving.
    db_1.default.authenticate()
        .then(() => db_1.default.sync({ force: true })
        .then(async () => {
        console.log('Connection has been established successfully.');
        await Driver_1.Driver.bulkCreate(mockData_1.driverData, { returning: true });
        await Order_1.Order.bulkCreate(mockData_1.orderData, { returning: true });
    }))
        .catch(() => console.error('Unable to connect to the PG database:'));
}
else {
    db_1.default.sync({ force: true })
        .then(async () => {
        console.log("Connected to DB");
        const drivers = await Driver_1.Driver.bulkCreate(mockData_1.driverData, { returning: true });
        const orders = await Order_1.Order.bulkCreate(mockData_1.orderData, { returning: true });
    })
        .catch(() => {
        console.log("Problem attempting to start up the SQLite db");
    });
}
const PORT = process.env.PORT || 3333;
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
