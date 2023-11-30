import { Router } from 'express'
import DepartmentControllers from './department.controller'

export default class DepartmentRoutes {
  private router: Router
  private controller: DepartmentControllers

  constructor() {
    this.router = Router()
    this.controller = new DepartmentControllers()
  }

  routes(): Router {
    this.router.post('/v1/create', this.controller.create())
    this.router.get('/v1/show', this.controller.show())

    return this.router
  }
}
