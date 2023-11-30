import database from '../../models'

export default class AreaService {
  public async showArea() {
    try {
      const dataArea = await database.ms_provinsi.findAll({
        include: {
          model: database.ms_kota,
          as: 'ms_kota'
        }
      })

      return { message: true, result: dataArea }
    } catch (error) {
      throw error
    }
  }
}
