import { type DatabaseResponse } from './db.interface'
export interface Product {
  product_id?: number | string
  name: string
  price: number
  discount: number
  description: string
  stock: number
  sold: number
  brand_id?: number | string
  user_id: number
}
export interface NewProduct extends Product {
  brand: string
  category: string
  images: string
}
export type ProductAndResponse = [Product[], DatabaseResponse]
export type userTypeId = Pick<Product, 'user_id'>
