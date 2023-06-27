import { type Response, type Request } from 'express'
import { errorHandler } from '../utils/error.handler'
import * as fn from '../services/product.services'
import { type ProductAndResponse } from '../interfaces/products.interface'
export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const servResponse = await fn.getProductsServ() as ProductAndResponse
    res.send(servResponse[0])
  } catch (error) {
    errorHandler('ERROR GET PRODUCTS', res, error)
  }
}
export const getProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const servResponse = await fn.getProductServ(id) as ProductAndResponse
    res.send(servResponse[0][0])
  } catch (error) {
    errorHandler('ERROR GET PRODUCT', res, error)
  }
}
export const postProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const newProduct = req.body

    const servResponse = await fn.postProductServ(newProduct)
    res.send(servResponse)
  } catch (error) {
    errorHandler('ERROR POST PRODUCTS', res, error)
  }
}
export const putProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const newProduct = req.body
    const servResponse = await fn.putProductServ(id, newProduct)
    res.send(servResponse[0])
  } catch (error) {
    errorHandler('ERROR put PRODUCTS', res, error)
  }
}
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const servResponse = await fn.deleteProductServ(id)
    res.send(servResponse)
  } catch (error) {
    errorHandler('ERROR delete PRODUCTS', res, error)
  }
}
export const patchProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const servResponse = await fn.patchProductServ()
    res.send(servResponse)
  } catch (error) {
    errorHandler('ERROR patch PRODUCTS', res, error)
  }
}
