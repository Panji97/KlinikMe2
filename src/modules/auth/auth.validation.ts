import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

export default class AuthenticateValidation {
  login() {
    return [
      body('Email')
        .exists()
        .withMessage('Must Have email')
        .isString()
        .withMessage('Email must be string')
        .notEmpty()
        .withMessage('Email can not be empty')
        .isEmail()
        .withMessage('Must email format')
        .bail(),
      body('Password')
        .exists()
        .withMessage('Must Have password')
        .isString()
        .withMessage('Password must be string')
        .notEmpty()
        .withMessage('Password can not be empty')
        .bail(),
      this.validate
    ]
  }

  register() {
    return [
      body('Email')
        .exists()
        .withMessage('Must Have email')
        .isString()
        .withMessage('Email must be string')
        .notEmpty()
        .withMessage('Email can not be empty')
        .isEmail()
        .withMessage('Must email format')
        .bail(),
      body('Password')
        .exists()
        .withMessage('Must Have password')
        .isString()
        .withMessage('Password must be string')
        .notEmpty()
        .withMessage('Password can not be empty')
        .isLength({ min: 6, max: 100 })
        .withMessage('Password must be between 6 and 100 characters')
        .bail(),
      body('Username')
        .exists()
        .withMessage('Must Have username with text and number unique')
        .isString()
        .withMessage('username must be string')
        .notEmpty()
        .withMessage('username can not be empty')
        .bail(),
      this.validate
    ]
  }

  async validate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, message: errors.array() })
    }
    next()
  }
}
