import { type Payload } from '../interfaces/loginData.interface'
import { env } from '../env.config'
import { sign } from 'jsonwebtoken'
export const createToken = (payload: Payload, KEY: string): string => {
  return sign(payload, KEY, { expiresIn: 60 * 60 * env.TOKEN_EXPIRATION })
}
