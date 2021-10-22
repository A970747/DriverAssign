"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
// use db.authenticate when this goes to postgres
db_1.default.sync().then(() => {
    console.log("Connected to DB");
});
const PORT = process.env.PORT || 3333;
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
