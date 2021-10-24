import express from 'express';
import DriverController from '../controllers/DriverController';
import { handleValidationError } from '../utils/middleware';
import { checkIdParam, checkRequiredFields } from '../validators/DriverValidator';

const DriverRouter = express.Router();

DriverRouter.get(
  '/',
  DriverController.getAllDrivers
);

DriverRouter.get(
  '/:id',
  checkIdParam(),
  handleValidationError,
  DriverController.getSingleDriver
);

DriverRouter.post(
  '/',
  checkRequiredFields(),
  handleValidationError,
  DriverController.addDriver
);

DriverRouter.put(
  '/:id',
  checkIdParam(),
  handleValidationError,
  DriverController.updateDriver
);

DriverRouter.delete(
  '/:id',
  checkIdParam(),
  handleValidationError,
  DriverController.deleteDriver
);

export default DriverRouter;