import { Request, Response } from 'express'
import ErrorHandler from '../error'
import AreaService from './area.service'

export default class AreaControllers extends ErrorHandler {
  private service: AreaService

  constructor() {
    super()
    this.service = new AreaService()
  }

  public area() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.showArea()

        return res.status(200).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }
}
