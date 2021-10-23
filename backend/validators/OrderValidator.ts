import { body, param } from 'express-validator';


export function checkCreateOrder() {
  return [
    body('firstName')
      .notEmpty()
      .withMessage('Order first name is required.'),
    body('lastName')
      .notEmpty()
      .withMessage('Order last name is required.'),
    body('fullName')
      .notEmpty()
      .withMessage('Order full name is required.'),
  ];
}

export function checkIdParam() {
  return [
    param('id')
      .notEmpty()
      .withMessage('The value should be not empty.')
      .isInt()
      .withMessage('The value should be an integer.'),
  ];
}

export default {
  checkCreateOrder,
  checkIdParam
};