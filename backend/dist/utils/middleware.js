"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = exports.errorHandler = exports.unknownEndpoint = exports.tokenExtractor = exports.requestLogger = void 0;
const express_validator_1 = require("express-validator");
const logger_1 = __importDefault(require("./logger"));
const requestLogger = (req, res, next) => {
    logger_1.default.infoMessage('Method: ', req.method);
    logger_1.default.infoMessage('Path: ', req.path);
    logger_1.default.infoMessage('Body: ', req.body);
    logger_1.default.infoMessage('---');
    return next();
};
exports.requestLogger = requestLogger;
const tokenExtractor = (req, res, next) => {
    const authorization = req.get('Authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        req.body.token = authorization.substring(7);
    }
    return next();
};
exports.tokenExtractor = tokenExtractor;
const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'Unknown endpoint' });
};
exports.unknownEndpoint = unknownEndpoint;
const errorHandler = (error, req, res, next) => {
    if (error.name === 'CastError') {
        return res.status(400).send({ error: 'Malformatted  ID' });
    }
    ;
    if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
    }
    ;
    if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'invalid token' });
    }
    ;
    logger_1.default.errorMessage(error.message);
    return next(error);
};
exports.errorHandler = errorHandler;
const handleValidationError = (req, res, next) => {
    const error = (0, express_validator_1.validationResult)(req);
    console.log(error);
    if (!error.isEmpty()) {
        return res.status(400).json(error.array()[0]);
    }
    next();
};
exports.handleValidationError = handleValidationError;
exports.default = {
    requestLogger: exports.requestLogger,
    tokenExtractor: exports.tokenExtractor,
    unknownEndpoint: exports.unknownEndpoint,
    errorHandler: exports.errorHandler,
    handleValidationError: exports.handleValidationError
};
