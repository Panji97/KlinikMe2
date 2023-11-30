import { Request, Response } from 'express'
import ErrorHandler from '../error'
import EmployeeService from './employee.service'

export default class EmployeeController extends ErrorHandler {
  private service: EmployeeService

  constructor() {
    super()
    this.service = new EmployeeService()
  }

  public create() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.createEmploye(req.body)

        return res.status(201).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public show() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.showEmployee()

        return res.status(201).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public showId() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.showEmployeeById(String(req.params.id))

        return res.status(201).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public updateId() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.editEmployeeById(String(req.params.id), req.body)

        return res.status(201).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }

  public employeeWithCertification() {
    return async (req: Request, res: Response) => {
      try {
        const data = await this.service.showEmployeeAndAllCertification(String(req.params.id))

        return res.status(201).json({ message: data.message, result: data.result })
      } catch (error) {
        this.handleError(error, req, res)
      }
    }
  }
}
