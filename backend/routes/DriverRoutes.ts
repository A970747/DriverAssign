import express from 'express';
import DriverController from '../controllers/DriverController';
import { handleValidationError } from '../utils/middleware';
import DriverValidator from '../validators/DriverValidator';

const router = express.Router();

router.get(
  '/',
  DriverController.getAllDrivers
);

router.get(
  '/:id',
  DriverValidator.checkIdParam(),
  handleValidationError,
  DriverController.getSingleDriver
);

router.post(
  '/',
  DriverValidator.checkCreateDriver(),
  handleValidationError,
  DriverController.addDriver
);

router.put(
  '/:id',
  DriverValidator.checkIdParam(),
  handleValidationError,
  DriverController.updateDriver
);

router.delete(
  '/:id',
  DriverValidator.checkIdParam(),
  handleValidationError,
  DriverController.deleteDriver
);

export default router;