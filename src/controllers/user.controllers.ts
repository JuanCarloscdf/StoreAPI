import { type Response, type Request } from 'express'
import { errorHandler } from '../utils/error.handler'
import * as fn from '../services/user.services'
/* import { type RequestExt } from '../interfaces/jwt.interface' */
import { type UsersAndResponse } from '../interfaces/user.interface'
import { type RequestExt } from '../interfaces/jwt.interface'
export const getUsers = async (req: RequestExt, res: Response): Promise<void> => {
  try {
    const servicesResponse = await fn.getUsersServ() as UsersAndResponse
    res.send(servicesResponse[0])
  } catch (error) {
    errorHandler('GET_USERS_ERROR', res)
  }
}
export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const servicesResponse = await fn.getUserServ(id) as UsersAndResponse
    console.log('object :>> ', servicesResponse[0][0])
    res.send(servicesResponse[0][0])
  } catch (error) {
    errorHandler('GET_USER_ERROR', res)
  }
}
export const postUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const newUser = req.body
    const servicesResponse = await fn.postUserServ(newUser) as { message: string, data?: object }
    if (servicesResponse.message === 'email_error') {
      return res.status(409).send(servicesResponse)
    }
    if (servicesResponse.message === 'cellphone_error') {
      return res.status(409).send(servicesResponse)
    }
    res.status(201).send(servicesResponse)
  } catch (error) {
    errorHandler('POST_USER_ERROR', res)
  }
}
export const putUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const newUser = req.body
    const servicesResponse = await fn.putUserServ(newUser, id)
    res.send(servicesResponse)
  } catch (error) {
    errorHandler('PUT_USER_ERROR', res)
  }
}
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const servicesResponse = await fn.deleteUserServ(id) as UsersAndResponse
    res.send(servicesResponse)
  } catch (error) {
    errorHandler('DELETE_USER_ERROR', res)
  }
}
export const patchUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const atribute: string = req.body
    const value: string = req.body
    const servicesResponse = await fn.patchUserServ(Number(id), atribute, value)
    res.send(servicesResponse)
  } catch (error) {
    errorHandler('PATCH_USER_ERROR', res)
  }
}
