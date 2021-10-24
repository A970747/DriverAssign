"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.unknownEndpoint = exports.handleValidationError = exports.requestLogger = void 0;
const express_validator_1 = require("express-validator");
const logger_1 = __importDefault(require("./logger"));
const requestLogger = (req, res, next) => {
    logger_1.default.infoMessage('Method: ', req.method);
    logger_1.default.infoMessage('Path: ', req.path);
    logger_1.default.infoMessage('Body: ', req.body);
    logger_1.default.infoMessage('---');
    next();
};
exports.requestLogger = requestLogger;
const handleValidationError = (req, res, next) => {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        res.status(400).json(error);
    }
    next();
};
exports.handleValidationError = handleValidationError;
const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'Unknown endpoint' });
};
exports.unknownEndpoint = unknownEndpoint;
const errorHandler = (error, req, res, next) => {
    logger_1.default.errorMessage(error.message);
    next(error);
};
exports.errorHandler = errorHandler;
exports.default = {
    requestLogger: exports.requestLogger,
    handleValidationError: exports.handleValidationError,
    unknownEndpoint: exports.unknownEndpoint,
    errorHandler: exports.errorHandler,
};
