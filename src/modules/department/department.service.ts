import { bidangAttributes } from '../../models/bidang'
import database from '../../models'

export default class DepartmentService {
  public async createDepartment(data: bidangAttributes) {
    try {
      const latestDepartmentId = await database.bidang.count()
      const newDepartmentIdNumber = latestDepartmentId + 1
      const formattedDepartmentId = `B${newDepartmentIdNumber.toString()}`

      await database.bidang.create({
        Id_Bidang: data.Id_Bidang ? data.Id_Bidang : formattedDepartmentId,
        NamaBidang: data.NamaBidang,
        Created_at: new Date()
      })

      return { message: 'Success created bidang', result: null }
    } catch (error) {
      throw error
    }
  }

  public async showDepartment() {
    try {
      const DEPARTMENT_DATA = await database.bidang.findAll()

      if (!DEPARTMENT_DATA) {
        return { message: 'Data not found', result: null }
      }

      return { message: true, result: DEPARTMENT_DATA }
    } catch (error) {
      throw error
    }
  }
}
