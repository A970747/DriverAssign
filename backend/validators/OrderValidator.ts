import { body, param } from 'express-validator';

export function checkRequiredFields() {
  return [
    body('startDate')
      .notEmpty()
      .withMessage('Start Date is required.'),
    body('endDate')
      .notEmpty()
      .withMessage('End date is required.'),
    body('startCity')
      .notEmpty()
      .withMessage('Start City is required.'),
    body('startProv')
      .notEmpty()
      .withMessage('Start Province is required.'),
    body('startCountry')
      .notEmpty()
      .withMessage('Start Country is required.'),
    body('endCity')
      .notEmpty()
      .withMessage('End City is required.'),
    body('endProv')
      .notEmpty()
      .withMessage('End Province is required.'),
    body('endCountry')
      .notEmpty()
      .withMessage('End Country is required.'),
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