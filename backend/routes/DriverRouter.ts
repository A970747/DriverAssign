import express from 'express';
import DriverController from '../controllers/DriverController';
import { handleValidationError } from '../utils/middleware';
import DriverValidator from '../validators/DriverValidator';

const DriverRouter = express.Router();

DriverRouter.get(
  '/',
  DriverController.getAllDrivers
);

DriverRouter.get(
  '/:id',
  DriverValidator.checkIdParam(),
  handleValidationError,
  DriverController.getSingleDriver
);

DriverRouter.post(
  '/',
  DriverValidator.checkCreateDriver(),
  handleValidationError,
  DriverController.addDriver
);

DriverRouter.put(
  '/:id',
  DriverValidator.checkIdParam(),
  handleValidationError,
  DriverController.updateDriver
);

DriverRouter.delete(
  '/:id',
  DriverValidator.checkIdParam(),
  handleValidationError,
  DriverController.deleteDriver
);

export default DriverRouter;