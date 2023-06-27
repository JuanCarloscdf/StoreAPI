import { Router } from 'express'
import * as fn from '../controllers/login.controllers'
const router = Router()
router.post('/', fn.postLogin)
export { router }
