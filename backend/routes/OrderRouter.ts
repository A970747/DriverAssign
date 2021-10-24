import express from 'express';
import OrderController from '../controllers/OrderController';
import { handleValidationError } from '../utils/middleware';
import { checkIdParam, checkRequiredFields } from '../validators/OrderValidator';

const OrderRouter = express.Router();

OrderRouter.get(
  '/',
  OrderController.getAllOrders
);

OrderRouter.get(
  '/:id',
  checkIdParam(),
  handleValidationError,
  OrderController.getSingleOrder
);

OrderRouter.post(
  '/',
  checkRequiredFields(),
  handleValidationError,
  OrderController.addOrder
);

OrderRouter.put(
  '/:id',
  checkRequiredFields(),
  handleValidationError,
  OrderController.updateOrder
);

OrderRouter.delete(
  '/:id',
  checkIdParam(),
  handleValidationError,
  OrderController.deleteOrder
);

export default OrderRouter;