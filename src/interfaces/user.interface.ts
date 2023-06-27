import { type DatabaseResponse } from './db.interface'
export interface User {
  user_id?: number
  first_name: string
  last_name: string
  email: string
  password: string
  cellphone: string
  user_type_id: string
}

export type UsersAndResponse = [User[], DatabaseResponse]
export type userTypeId = Pick<User, 'user_id'>
