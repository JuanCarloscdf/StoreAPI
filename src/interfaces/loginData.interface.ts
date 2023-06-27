import { type DatabaseResponse } from './db.interface'
import { type User } from './user.interface'

export type LoginData = Pick<User, 'email' | 'password'>

export interface LoginRes {
  password: string
  user_type: string
  user_id: number
  first_name: string
}

export type LoginResAndResponse = [LoginRes[], DatabaseResponse]

export interface Payload {
  user_type: string
  user_id: number
}
