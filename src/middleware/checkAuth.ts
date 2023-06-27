import { type Response, type NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { type JwtDecoded, type RequestExt } from '../interfaces/jwt.interface'
import { env } from '../env.config'

export const checkAuth = (req: RequestExt, res: Response, next: NextFunction): any => {
  try {
    console.log(req.headers.authorization)
    const inputToken = req.headers.authorization as string
    if (inputToken.length === 0) return res.status(401).json({ msg: 'NOT_AUTHORIZED' })

    const jwtPayloadDecoded = verify(inputToken, env.JWT_KEY)

    req.userData = jwtPayloadDecoded as JwtDecoded
    console.log('decodedToken :>> ', req.userData)
    next()
  } catch (error) {
    console.log('errorFromMiddleware chechAuth :>> ', error)
    res.status(401).json({ msg: 'BAD_TOKEN' })
  }
}
