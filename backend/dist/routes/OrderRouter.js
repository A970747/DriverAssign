"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrderController_1 = __importDefault(require("../controllers/OrderController"));
const middleware_1 = require("../utils/middleware");
const OrderValidator_1 = require("../validators/OrderValidator");
const OrderRouter = express_1.default.Router();
OrderRouter.get('/', OrderController_1.default.getAllOrders);
OrderRouter.get('/:id', (0, OrderValidator_1.checkIdParam)(), middleware_1.handleValidationError, OrderController_1.default.getSingleOrder);
OrderRouter.post('/', (0, OrderValidator_1.checkRequiredFields)(), middleware_1.handleValidationError, OrderController_1.default.addOrder);
OrderRouter.put('/:id', (0, OrderValidator_1.checkRequiredFields)(), middleware_1.handleValidationError, OrderController_1.default.updateOrder);
OrderRouter.delete('/:id', (0, OrderValidator_1.checkIdParam)(), middleware_1.handleValidationError, OrderController_1.default.deleteOrder);
exports.default = OrderRouter;
