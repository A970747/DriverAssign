"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdParam = exports.checkRequiredFields = void 0;
const express_validator_1 = require("express-validator");
function checkRequiredFields() {
    return [
        (0, express_validator_1.body)('firstName')
            .notEmpty()
            .withMessage('Driver first name is required.'),
        (0, express_validator_1.body)('lastName')
            .notEmpty()
            .withMessage('Driver last name is required.'),
        (0, express_validator_1.body)('fullName')
            .notEmpty()
            .withMessage('Driver full name is required.'),
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
