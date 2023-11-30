import { Router } from 'express'
import EmployeeRoutes from '../modules/employee/employee.routes'
import AreaRoutes from '../modules/area/area.routes'
import DepartmentRoutes from '../modules/department/department.routes'
import CertificationRoutes from '../modules/certification/certification.routes'
import UploadRoutes from '../modules/upload/upload.routes'

export default class DataRoutes {
  private router: Router
  private employee: EmployeeRoutes
  private area: AreaRoutes
  private department: DepartmentRoutes
  private certification: CertificationRoutes
  private upload: UploadRoutes

  constructor() {
    this.router = Router()
    this.employee = new EmployeeRoutes()
    this.area = new AreaRoutes()
    this.department = new DepartmentRoutes()
    this.certification = new CertificationRoutes()
    this.upload = new UploadRoutes()
  }

  routes(): Router {
    this.router.use('/employee', this.employee.routes())
    this.router.use('/area', this.area.routes())
    this.router.use('/department', this.department.routes())
    this.router.use('/certification', this.certification.routes())
    this.router.use('/upload', this.upload.routes())

    return this.router
  }
}
