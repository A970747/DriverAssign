import { body, param } from 'express-validator';


export function checkRequiredFields() {
  return [
    body('firstName')
      .notEmpty()
      .withMessage('Driver first name is required.'),
    body('lastName')
      .notEmpty()
      .withMessage('Driver last name is required.'),
    body('fullName')
      .notEmpty()
      .withMessage('Driver full name is required.'),
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
  checkRequiredFields,
  checkIdParam
};