import 'dotenv/config'
import { type Env } from './interfaces/env.interface'

export const env: Env = {
  PORT: process.env.PORT ?? '3200',
  JWT_KEY: process.env.JWT_KEY ?? '1212212',
  HASH_COST: Number(process.env.HASH_COST) ?? 8,
  TOKEN_EXPIRATION: Number(process.env.TOKEN_EXPIRATION) ?? 100
}

