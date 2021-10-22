import { NextFunction, Request, Response } from "express";
import logger from './logger';

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.infoMessage('Method: ', req.method);
  logger.infoMessage('Path: ', req.path);
  logger.infoMessage('Body: ', req.body);
  logger.infoMessage('---');
  return next();
};

const tokenExtractor = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.get('Authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.body.token = authorization.substring(7);
  }

  return next();
};

const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'Unknown endpoint' });
};

const errorHandler = (req: Request, res: Response, next: NextFunction) => {
  if (Error.name === 'CastError') {
    return res.status(400).send({ error: 'Malformatted  ID' });
  };
  if (Error.name === 'ValidationError') {
    return res.status(400).json({ error: Error });
  };
  if (Error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'invalid token' });
  };
  logger.errorMessage(Error);

  return next(Error);
};

export default {
  requestLogger,
  tokenExtractor,
  unknownEndpoint,
  errorHandler,
};
