import express from 'express';
import OrderController from '../controllers/OrderController';
import { handleValidationError } from '../utils/middleware';
import OrderValidator from '../validators/OrderValidator';

const OrderRouter = express.Router();

OrderRouter.get(
  '/',
  OrderController.getAllOrders
);

OrderRouter.get(
  '/:id',
  OrderValidator.checkIdParam(),
  handleValidationError,
  OrderController.getSingleOrder
);

OrderRouter.post(
  '/',
  OrderValidator.checkCreateOrder(),
  handleValidationError,
  OrderController.addOrder
);

OrderRouter.put(
  '/:id',
  OrderValidator.checkIdParam(),
  handleValidationError,
  OrderController.updateOrder
);

OrderRouter.delete(
  '/:id',
  OrderValidator.checkIdParam(),
  handleValidationError,
  OrderController.deleteOrder
);

export default OrderRouter;