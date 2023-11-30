import { Request, Response } from 'express'
import ErrorHandler from '../error'
import DepartmentService from './department.service'

export default class DepartmentControllers extends ErrorHandler {
  private service: DepartmentService

  constructor() {
    super()
    this.service = new DepartmentService()
  }

  public create() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.createDepartment(req.body)

        return res.status(201).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public show() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.showDepartment()

        return res.status(201).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }
}
