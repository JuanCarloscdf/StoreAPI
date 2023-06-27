import { type DatabaseResponse } from './db.interface'

export interface Order {
  country: string
  state: string
  adress: string
  user_id: number | string
  total: number
  method_id: number
}

export type OrderAndResponse = [Order[], DatabaseResponse]
