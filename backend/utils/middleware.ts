import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import logger from './logger';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.infoMessage('Method: ', req.method);
  logger.infoMessage('Path: ', req.path);
  logger.infoMessage('Body: ', req.body);
  logger.infoMessage('---');
  return next();
};

export const tokenExtractor = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.get('Authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.body.token = authorization.substring(7);
  }

  return next();
};

export const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'Unknown endpoint' });
};

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'Malformatted  ID' });
  };
  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  };
  if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'invalid token' });
  };
  logger.errorMessage(error.message);

  return next(error);
};

export const handleValidationError = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req);
  console.log(error);
  if (!error.isEmpty()) {
    console.log('this is the place');
    return res.status(400).json(error);
  }
  next();
}

export default {
  requestLogger,
  tokenExtractor,
  unknownEndpoint,
  errorHandler,
  handleValidationError
};
