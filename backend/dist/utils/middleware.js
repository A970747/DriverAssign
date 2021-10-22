"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const requestLogger = (req, res, next) => {
    logger_1.default.infoMessage('Method: ', req.method);
    logger_1.default.infoMessage('Path: ', req.path);
    logger_1.default.infoMessage('Body: ', req.body);
    logger_1.default.infoMessage('---');
    return next();
};
const tokenExtractor = (req, res, next) => {
    const authorization = req.get('Authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        req.body.token = authorization.substring(7);
    }
    return next();
};
const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'Unknown endpoint' });
};
const errorHandler = (req, res, next) => {
    if (Error.name === 'CastError') {
        return res.status(400).send({ error: 'Malformatted  ID' });
    }
    ;
    if (Error.name === 'ValidationError') {
        return res.status(400).json({ error: Error });
    }
    ;
    if (Error.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'invalid token' });
    }
    ;
    logger_1.default.errorMessage(Error);
    return next(Error);
};
exports.default = {
    requestLogger,
    tokenExtractor,
    unknownEndpoint,
    errorHandler,
};
