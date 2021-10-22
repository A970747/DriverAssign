"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("./utils/middleware"));
/* import todoRouter from "./todo/route"; */
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static('build'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(middleware_1.default.requestLogger);
app.use(middleware_1.default.tokenExtractor);
// app.use("/api/drivers", driverRouter);
// app.use("/api/orders", orderRouter);
app.use(middleware_1.default.unknownEndpoint);
app.use(middleware_1.default.errorHandler);
exports.default = app;
