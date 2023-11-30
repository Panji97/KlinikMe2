import { Router } from 'express'
import AuthenticateController from './auth.controllers'
import AuthenticateValidation from './auth.validation'

export default class AuthenticateRoutes {
  private router: Router
  private controller: AuthenticateController
  private validation: AuthenticateValidation

  constructor() {
    this.router = Router()
    this.controller = new AuthenticateController()
    this.validation = new AuthenticateValidation()
  }

  routes(): Router {
    this.router.post('/oauth/v1/register', this.validation.register(), this.controller.registerUser())
    this.router.post('/oauth/v1/login', this.validation.login(), this.controller.loginUser())

    return this.router
  }
}
