import { pool } from '../config/mysql'
import { type LoginResAndResponse, type LoginData } from '../interfaces/loginData.interface'
import { env } from '../env.config'
import { createToken } from '../utils/jwt.handler'
import { compareHashPassword } from '../utils/bcrypt.handler'

export const postLoginServ = async (loginData: LoginData): Promise<any> => {
  try {
    const email = loginData.email
    const [user] = await pool.query(`SELECT u.first_name, u.password,u.user_id, ut.user_type FROM user AS u INNER JOIN user_type AS ut ON u.user_type_id=ut.user_type_id  WHERE u.email='${email}'`) as unknown as LoginResAndResponse

    if (user.length === 0) return { message: 'email_error' }

    const isCorrectPassword = await compareHashPassword(loginData.password, user[0].password)
    if (!isCorrectPassword) return { message: 'password_error' }

    const payload = {
      user_type: user[0].user_type,
      user_id: user[0].user_id
    }

    const KEY = env.JWT_KEY
    const token = createToken(payload, KEY)

    const toSend = {
      token,
      name: user[0].first_name,
      user_id: user[0].user_id
    }
    /*   console.log(toSend) */
    return toSend
  } catch (mysqlError) {
    console.log('dasddddddddddddd', mysqlError)
    return mysqlError
  }
}
