import { type Request, type Response } from 'express'
import { errorHandler } from '../utils/error.handler'
import * as fn from '../services/login.services'
export const postLogin = async (req: Request, res: Response): Promise<any> => {
  try {
    const loginData = req.body
    const servResponse = await fn.postLoginServ(loginData)
    console.log(servResponse)
    if (servResponse.message === 'email_error') {
      return res.status(409).json(servResponse)
    }
    if (servResponse.message === 'password_error') {
      return res.status(409).json(servResponse)
    }
    res.send(servResponse)
  } catch (error) {
    errorHandler('ERROR_POST_LOGIN', res, error)
  }
}
