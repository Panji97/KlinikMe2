import { Request, Response } from 'express'
import ErrorHandler from '../error'
import CertificationService from './certification.service'

export default class CertificationControllers extends ErrorHandler {
  private service: CertificationService
  constructor() {
    super()
    this.service = new CertificationService()
  }

  public create() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.createCertification(req.body)

        return res.status(201).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public show() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.showCertification()

        return res.status(201).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public delete() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.deleteCertification(String(req.params.id))

        return res.status(200).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }
}
