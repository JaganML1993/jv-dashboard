const { body } = require('express-validator');

const loginValidation = [
    body('email').notEmpty().isEmail().withMessage('email is required').trim().escape(),
    body('password').notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).isLength({ max: 25 }).withMessage('Password must be at least 6 characters long').trim(),
];

module.exports = loginValidation;
