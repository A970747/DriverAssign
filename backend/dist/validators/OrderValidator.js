"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdParam = exports.checkCreateOrder = void 0;
const express_validator_1 = require("express-validator");
function checkCreateOrder() {
    return [
    /*     body('firstName')
          .notEmpty()
          .withMessage('Order first name is required.'),
        body('lastName')
          .notEmpty()
          .withMessage('Order last name is required.'),
        body('fullName')
          .notEmpty()
          .withMessage('Order full name is required.'), */
    ];
}
exports.checkCreateOrder = checkCreateOrder;
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
    checkCreateOrder,
    checkIdParam
};
