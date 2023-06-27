import { compare, hash } from 'bcryptjs'
import { env } from '../env.config'

export const hashPassword = async (password: string): Promise<string> => {
  const hashPassword = await hash(password, env.HASH_COST)
  return hashPassword
}

export const compareHashPassword = async (password: string, hashPassword: string): Promise<boolean> => {
  const isCorrect = await compare(password, hashPassword)
  return isCorrect
}
