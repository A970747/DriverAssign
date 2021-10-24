"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdParam = exports.checkRequiredFields = void 0;
const express_validator_1 = require("express-validator");
function checkRequiredFields() {
    return [
        (0, express_validator_1.body)('startDate')
            .notEmpty()
            .withMessage('Start Date is required.'),
        (0, express_validator_1.body)('endDate')
            .notEmpty()
            .withMessage('End date is required.'),
        (0, express_validator_1.body)('startCity')
            .notEmpty()
            .withMessage('Start City is required.'),
        (0, express_validator_1.body)('startProv')
            .notEmpty()
            .withMessage('Start Province is required.'),
        (0, express_validator_1.body)('startCountry')
            .notEmpty()
            .withMessage('Start Country is required.'),
        (0, express_validator_1.body)('endCity')
            .notEmpty()
            .withMessage('End City is required.'),
        (0, express_validator_1.body)('endProv')
            .notEmpty()
            .withMessage('End Province is required.'),
        (0, express_validator_1.body)('endCountry')
            .notEmpty()
            .withMessage('End Country is required.'),
    ];
}
exports.checkRequiredFields = checkRequiredFields;
function checkIdParam() {
    return [
        (0, express_validator_1.param)('id')
            .notEmpty()
            .withMessage('The value should be not empty.')
            .isInt()
            .withMessage('The value should be an integer.'),
    ];
}
exports.checkIdParam = checkIdParam;
exports.default = {
    checkRequiredFields,
    checkIdParam
};
