import { HmacSHA256 } from 'crypto-js'
import _ from 'lodash'
import { sign } from 'jsonwebtoken'

import { KEY } from '../../gajah.json'
import database from '../../models'
import { userloginAttributes } from '../../models/userlogin'

export default class AuthenticateService {
  public async register(payload: userloginAttributes) {
    try {
      const ENCRYPTED_PASSWORD = HmacSHA256(payload.Password, KEY).toString()

      const USER_EXIST = await database.userlogin.findOne({
        where: {
          Email: payload.Email
        }
      })

      if (USER_EXIST !== null) {
        return { message: 'Email already exist', result: null }
      }

      const latestUserId = await database.userlogin.count()
      const newUserIdNumber = latestUserId + 1
      const formattedUserId = `User${newUserIdNumber.toString().padStart(3, '0')}`

      await database.userlogin.create({
        Id_User: formattedUserId,
        Email: payload.Email,
        Username: payload.Username,
        Password: ENCRYPTED_PASSWORD,
        Token: '',
        Created_at: new Date()
      })

      return { message: 'Success register user', result: null }
    } catch (error) {
      throw error
    }
  }

  public async login(payload: userloginAttributes) {
    try {
      const USER_EXIST = await database.userlogin.findOne({
        where: {
          Email: payload.Email
        }
      })

      if (!USER_EXIST) {
        return { message: 'Email not found', result: null }
      }

      const ENCRYPTED_PASSWORD = HmacSHA256(payload.Password, KEY).toString()

      if (ENCRYPTED_PASSWORD !== USER_EXIST.Password) {
        return { message: 'Wrong password', result: null }
      }

      const ACCESS_TOKEN = sign(
        {
          Id_User: USER_EXIST.Id_User,
          Email: USER_EXIST.Email
        },
        KEY,
        {
          algorithm: 'HS256',
          expiresIn: '7d'
        }
      )

      USER_EXIST.Token = ACCESS_TOKEN

      await USER_EXIST.save()

      const RESULT = {
        Token: ACCESS_TOKEN,
        Id_User: USER_EXIST.Id_User,
        Email: USER_EXIST.Email
      }

      return { message: 'Success login', result: RESULT }
    } catch (error) {
      throw error
    }
  }
}
