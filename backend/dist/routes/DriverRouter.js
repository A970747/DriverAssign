"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DriverController_1 = __importDefault(require("../controllers/DriverController"));
const middleware_1 = require("../utils/middleware");
const DriverValidator_1 = __importDefault(require("../validators/DriverValidator"));
const DriverRouter = express_1.default.Router();
DriverRouter.get('/', DriverController_1.default.getAllDrivers);
DriverRouter.get('/:id', DriverValidator_1.default.checkIdParam(), middleware_1.handleValidationError, DriverController_1.default.getSingleDriver);
DriverRouter.post('/', DriverValidator_1.default.checkCreateDriver(), middleware_1.handleValidationError, DriverController_1.default.addDriver);
DriverRouter.put('/:id', DriverValidator_1.default.checkIdParam(), middleware_1.handleValidationError, DriverController_1.default.updateDriver);
DriverRouter.delete('/:id', DriverValidator_1.default.checkIdParam(), middleware_1.handleValidationError, DriverController_1.default.deleteDriver);
exports.default = DriverRouter;
