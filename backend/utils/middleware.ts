import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import logger from './logger';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.infoMessage('Method: ', req.method);
  logger.infoMessage('Path: ', req.path);
  logger.infoMessage('Body: ', req.body);
  logger.infoMessage('---');

  next();
};

export const handleValidationError = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    res.status(400).json(error);
  }

  next();
}

export const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'Unknown endpoint' });
};

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  logger.errorMessage(error.message);

  next(error);
};

export default {
  requestLogger,
  handleValidationError,
  unknownEndpoint,
  errorHandler,
};
