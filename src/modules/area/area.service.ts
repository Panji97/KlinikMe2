import database from '../../models'

export default class AreaService {
  public async showArea() {
    try {
      const dataArea = await database.ms_kota.findAll({
        include: {
          model: database.ms_provinsi,
          as: 'Kd_Provinsi_ms_provinsi'
        }
      })

      return { message: true, result: dataArea }
    } catch (error) {
      throw error
    }
  }
}
