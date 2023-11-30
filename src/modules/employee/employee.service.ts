import { datapegawaiAttributes } from '../../models/datapegawai'
import database from '../../models'

export default class EmployeeService {
  public async createEmploye(data: datapegawaiAttributes) {
    try {
      const NAME_EXIST = await database.datapegawai.findOne({
        where: {
          NamaLengkap: data.NamaLengkap
        }
      })

      if (NAME_EXIST) {
        return { message: 'Nama Lengkap is already exist', result: null }
      }

      const latestEmployeeId = await database.datapegawai.count()
      const newEmployeeIdNumber = latestEmployeeId + 1
      const formattedEmployeeId = `P${newEmployeeIdNumber.toString().padStart(3, '0')}`

      const birthDate = new Date(data.Tanggal)
      const currentDate = new Date()
      const ageInMilliseconds = currentDate.getTime() - birthDate.getTime()
      const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000))

      await database.datapegawai.create({
        Id_Pegawai: data.Id_Pegawai ? data.Id_Pegawai : formattedEmployeeId,
        NamaLengkap: data.NamaLengkap,
        Tanggal: data.Tanggal,
        Umur: ageInYears,
        AlamatLengkap: data.AlamatLengkap,
        Keahlian: data.Keahlian,
        LevelPekerjaan: data.LevelPekerjaan,
        Kd_Provinsi: data.Kd_Provinsi,
        Kd_KotaKabupaten: data.Kd_KotaKabupaten,
        Kodepos: data.Kodepos,
        Created_at: new Date()
      })

      return { message: 'Success create data pegawai', result: null }
    } catch (error) {
      throw error
    }
  }

  public async showEmployee() {
    try {
      const EMPLOYEE_DATA = await database.datapegawai.findAll()

      if (!EMPLOYEE_DATA) {
        return { message: 'Data not found', result: null }
      }

      return { message: true, result: EMPLOYEE_DATA }
    } catch (error) {
      throw error
    }
  }

  public async showEmployeeById(employeeId: string) {
    try {
      const EMPLOYEE_DATA = await database.datapegawai.findOne({
        where: {
          Id_Pegawai: employeeId
        }
      })

      if (!EMPLOYEE_DATA) {
        return { message: 'Data not found', result: null }
      }

      return { message: true, result: EMPLOYEE_DATA }
    } catch (error) {
      throw error
    }
  }

  public async editEmployeeById(employeeId: string, data: datapegawaiAttributes) {
    try {
      const EMPLOYEE_DATA = await database.datapegawai.findOne({
        where: {
          Id_Pegawai: employeeId
        }
      })

      if (!EMPLOYEE_DATA) {
        return { message: 'Data not found', result: null }
      }

      await database.datapegawai.update(data, {
        where: {
          Id_Pegawai: employeeId
        }
      })

      return { message: 'Success update data pegawai', result: null }
    } catch (error) {
      throw error
    }
  }

  public async showEmployeeAndAllCertification(employeeId: string) {
    try {
      const CERTIFICATION_DATA = await database.sertifikasipegawai.findAll({
        include: {
          model: database.datapegawai,
          as: 'Id_Pegawai_datapegawai',
          where: {
            Id_Pegawai: employeeId
          }
        }
      })

      return { message: true, result: CERTIFICATION_DATA }
    } catch (error) {
      throw error
    }
  }
}
