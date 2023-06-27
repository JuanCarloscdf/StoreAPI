import { type DatabaseResponse } from '../interfaces/db.interface'

export interface Cart {
  user_id: number | string
  quantities: string
  products: string
}
export type CartAndResponse = [Cart[], DatabaseResponse]

export interface addProduct {
  user_id: number
  quantity: number
  product: number
}
