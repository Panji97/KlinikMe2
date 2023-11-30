import { Router } from 'express'
import EmployeeController from './employee.controllers'
import EmployeeValidation from './employee.validation'

export default class EmployeeRoutes {
  private router: Router
  private controller: EmployeeController
  private validation: EmployeeValidation

  constructor() {
    this.router = Router()
    this.controller = new EmployeeController()
    this.validation = new EmployeeValidation()
  }

  routes(): Router {
    this.router.get('/v1/show', this.controller.show())
    this.router.get('/v1/show/:id', this.controller.showId())
    this.router.get('/v1/show-certification/:id', this.controller.employeeWithCertification())
    this.router.post('/v1/create', this.validation.createEmployee(), this.controller.create())
    this.router.post('/v1/edit/:id', this.controller.updateId())

    return this.router
  }
}
