"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
// use db.authenticate when this goes to postgres
if (process.env.NODE_ENV === 'production') {
    try {
        db_1.default.authenticate().then(() => console.log('Connection has been established successfully.'));
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
else {
    db_1.default.sync({ force: true })
        .then(() => {
        console.log("Connected to DB");
    })
        .catch(() => {
        console.log("Problem attempting to start up the SQLite db");
    });
}
const PORT = process.env.PORT || 3333;
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
