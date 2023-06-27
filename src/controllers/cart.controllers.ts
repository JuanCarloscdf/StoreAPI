import { type Request, type Response } from 'express'
import { errorHandler } from '../utils/error.handler'
import * as fn from '../services/cart.services'
import { type CartAndResponse } from '../interfaces/cart.interface'

export const getCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const servResponse = await fn.getCartServ(id) as CartAndResponse
    res.send(servResponse[0])
  } catch (error) {
    errorHandler('ERROR_GET_CART', res, error)
  }
}
export const postCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const newCart = req.body
    console.log('newCart :>> ', newCart)
    const servResponse = await fn.postCartServ(newCart) as CartAndResponse
    res.send(servResponse[0])
  } catch (error) {
    errorHandler('ERROR_post_CART', res, error)
  }
}
export const putCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const newProduct = req.body
    const servResponse = await fn.putCartServ(newProduct) as CartAndResponse
    res.send(servResponse[0])
  } catch (error) {
    errorHandler('ERROR_put_CART', res, error)
  }
}
export const deleteCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleteCartData = req.body
    console.log('deleteCartData :>> ', deleteCartData)
    const servResponse = await fn.deleteCartServ(deleteCartData) as CartAndResponse
    res.send(servResponse[0])
  } catch (error) {
    errorHandler('ERROR_delete_CART', res, error)
  }
}
