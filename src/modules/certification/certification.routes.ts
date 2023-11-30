import { Router } from 'express'
import CertificationControllers from './certification.controllers'
import CertificationValidation from './certification.validation'

export default class CertificationRoutes {
  private router: Router
  private controller: CertificationControllers
  private validation: CertificationValidation

  constructor() {
    this.router = Router()
    this.controller = new CertificationControllers()
    this.validation = new CertificationValidation()
  }

  routes(): Router {
    this.router.post('/v1/create', this.validation.createCertification(), this.controller.create())
    this.router.get('/v1/show', this.controller.show())
    this.router.get('/v1/delete/:id', this.controller.delete())

    return this.router
  }
}
