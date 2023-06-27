import { type Response, type Request } from 'express'
import { errorHandler } from '../utils/error.handler'
import * as fn from '../services/order.services'
import { type OrderAndResponse } from '../interfaces/order.interface'
export const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const servResponse = await fn.getOrderServ(id) as OrderAndResponse
    res.send(servResponse[0])
  } catch (error) {
    errorHandler('ERROR_ GET_ORDERS', res, error)
  }
}
export const postOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const newOrder = req.body
    console.log(newOrder)
    const servResponse = await fn.postOrderServ(newOrder)
    res.send(servResponse)
  } catch (error) {
    errorHandler('ERROR_ post_ORDERS', res, error)
  }
}
export const deleteOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const servResponse = await fn.deleteOrderServ()
    res.send(servResponse)
  } catch (error) {
    errorHandler('ERROR_ delete_ORDERS', res, error)
  }
}
