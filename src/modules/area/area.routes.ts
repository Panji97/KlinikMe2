import { Router } from 'express'
import AreaControllers from './area.controllers'

export default class AreaRoutes {
  private router: Router
  private controller: AreaControllers

  constructor() {
    this.router = Router()
    this.controller = new AreaControllers()
  }

  routes(): Router {
    this.router.get('/v1/area', this.controller.area())

    return this.router
  }
}
