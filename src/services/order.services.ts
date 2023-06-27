import { pool } from '../config/mysql'
import { type Order } from '../interfaces/order.interface'

export const getOrderServ = async (id: string): Promise<any> => {
  try {
    const dbResponse = await pool.query(`CALL get_orders(${id})`)
    return dbResponse
  } catch (error) {
    console.log(error)
  }
}
export const postOrderServ = async (newOrder: Order): Promise<any> => {
  try {
    const dbResponse = await pool.query(`CALL fill_order('${newOrder.country}','${newOrder.state}','${newOrder.adress}',${newOrder.user_id},${newOrder.total},${newOrder.method_id})`)
    return dbResponse
  } catch (error) {
    console.log(error)
  }
}
export const deleteOrderServ = async (): Promise<any> => {
  try {
    const dbResponse = await pool.query('SELECT 1+1 AS res')
    return dbResponse
  } catch (error) {
    console.log(error)
  }
}
