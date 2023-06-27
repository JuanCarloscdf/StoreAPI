import { type Response } from 'express'

export const errorHandler = (error: string, res: Response, errorRaw?: any): void => {
  res.status(500).json({ error })
}
