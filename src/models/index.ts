import { mysqlClient } from '../config/database'
import { initModels } from './init-models'

const sequelize = mysqlClient.getConnection()
const database = initModels(sequelize)

export { sequelize }
export default database
