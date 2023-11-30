import database from '../../models'
import MySQLProvider from '../../providers/mysql'

interface datapegawaiAttributes {
  Id_Pegawai: string
  NamaLengkap: string
  Tanggal: string
  Umur: number
  AlamatLengkap: string
  LevelPekerjaan: 'Entry Level' | 'Middle Level' | 'Senior Level'
  Kd_Provinsi: string
  Kd_KotaKabupaten: string
  Kodepos: string
  Created_at?: Date
  createdAt?: Date
  updatedAt?: Date
  Keahlian?: string[]
  value: string
}

const connection = new MySQLProvider()

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

      if (data.LevelPekerjaan !== 'Senior Level') {
        throw { message: 'Invalid Level Pekerjaan', result: null }
      }

      const employeeData = await database.datapegawai.create({
        Id_Pegawai: data.Id_Pegawai ? data.Id_Pegawai : formattedEmployeeId,
        NamaLengkap: data.NamaLengkap,
        Tanggal: data.Tanggal,
        Umur: ageInYears,
        AlamatLengkap: data.AlamatLengkap,
        LevelPekerjaan: data.LevelPekerjaan,
        Kd_Provinsi: data.Kd_Provinsi,
        Kd_KotaKabupaten: data.Kd_KotaKabupaten,
        Kodepos: data.Kodepos,
        Created_at: new Date()
      })

      if (data.Keahlian && data.Keahlian.length > 0) {
        for (const values of data.Keahlian) {
          await database.keahlian.create({
            value: values,
            Id_Pegawai: employeeData.Id_Pegawai
          })
        }
      }

      return { message: 'Success create data pegawai', result: null }
    } catch (error) {
      throw error
    }
  }

  public async showEmployee() {
    try {
      const EMPLOYEE_DATA = await database.datapegawai.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: database.keahlian,
            as: 'keahlians',
            attributes: { exclude: ['createdAt', 'updatedAt'] }
          }
        ]
      })

      if (!EMPLOYEE_DATA) {
        throw { message: 'Data not found', result: null }
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
        },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: database.keahlian,
            as: 'keahlians',
            attributes: { exclude: ['createdAt', 'updatedAt'] }
          }
        ]
      })

      if (!EMPLOYEE_DATA) {
        throw { message: 'Data not found', result: null }
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
        throw { message: 'Data not found', result: null }
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
      const EMPLOYEE_DATA = await database.datapegawai.findOne({
        where: {
          Id_Pegawai: employeeId
        },
        include: [
          {
            model: database.sertifikasipegawai,
            as: 'sertifikasipegawais'
          },
          {
            model: database.keahlian,
            as: 'keahlians',
            attributes: { exclude: ['createdAt', 'updatedAt'] }
          }
        ]
      })

      return { message: true, result: EMPLOYEE_DATA }
    } catch (error) {
      throw error
    }
  }
}
